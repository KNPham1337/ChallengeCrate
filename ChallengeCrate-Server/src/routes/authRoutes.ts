import { Router } from "express";
import passport from "../utils/passport";

declare module "express-session" {
    interface Session {
        authAction?: string;
        authError?: string;
    }
}

const router = Router();

// Steam authentication route
router.get("/steam", (req, res, next) => {
    const { action } = req.query;
    if (action) req.session.authAction = action as string;
    passport.authenticate("steam")(req, res, next);
});

// Callback route
router.get("/steam/return",
    passport.authenticate("steam", { failureRedirect: "/failure" }),
    (req, res) => {
        res.redirect("http://localhost:5173/dashboard");
    }
);

// Bad Authentication error
router.get("/failure", (req, res) => {
    const errorMessage = req.session.authError || "Authentication failed.";
    delete req.session.authError;
    res.status(401).send({ message: errorMessage });
})

// Logout Route
router.get("/logout", (req, res, next) => {
    req.logOut(err => {
        if (err) return next(err);
        res.redirect("/");
    });
});

export default router;