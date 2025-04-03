import passport from "passport";
import SteamStrategy from "passport-steam";
import { configDotenv } from "dotenv";

configDotenv();

passport.use(
    new SteamStrategy({
        returnURL: process.env.STEAM_RETURN_URL as string || "http://localhost:5000/auth/steam/return",
        realm: process.env.STEAM_REALM as string || "http://localhost:5000/",
        apiKey: process.env.STEAM_API_KEY as string || "",
        passReqToCallback: true,
    },
        // TODO: If signing in for the first time, use profile to make a new entry in db
        async function validate(req, _identifier, profile, done) {
            // TODO: Validate that the id coming through exists in db or not
            // User.findByOpenID({ openID: id }, function (err, user) {
            //     return done(null, user);
            // })
            try {
                const action = req.session.authAction;
                const steamId = profile.id;

                // TODO: grab user object from db
                // var user = await UserActivation.findOne({ where: { steamId } })

                switch (action) {
                    case 'signup': // User says account is brand new, check if an existing account is tied to this profile
                        // if (user) {
                        //     req.session.authError = "Steam account already linked.";
                        //     return done(null, false);
                        // }
                        // TODO: create new user object and add to db
                        // user = await User.create({
                        //     steamId,
                        //     dis
                        // })
                        break;
                    case 'login': // User says account already exists, check for existence in db
                        // if (!user) {
                        //     req.session.authError = "Steam account not linked."
                        //     return done(null, false);
                        // }
                        break;
                    default:
                        req.session.authError = "Invalid action.";
                        return done(null, false)
                }
                return done(null, profile);
            } catch (error) {
                return done(error);
            }
        })
);

// This will take user object or attribute and serialize it into the user session
passport.serializeUser((user, done) => {
    done(null, user);
});

// Takes the obj which is whatever the second object in the done function got from serializeUser from session and is used to get the remaining information from the db
passport.deserializeUser((obj, done) => {
    done(null, obj as Express.User);
})

export default passport;
