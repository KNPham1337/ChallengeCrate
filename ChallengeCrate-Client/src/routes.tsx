import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import SignUpPage from "./routes/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);

export default router;
