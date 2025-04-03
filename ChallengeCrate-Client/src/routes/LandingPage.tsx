import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { Link } from "react-router-dom";

// TODO: Check if localstorage has valid jwt token

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="flex justify-end p-3 space-x-2">
        <Link to="/signup">
          <Button>Sign up</Button>
        </Link>
        {/* <Link to="/login"> */}
        <Button>Log in</Button>
        {/* </Link> */}
      </div>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center text-center px-4">
        <p className="text-lg">
          Welcome to ChallengeCrate! Discover and participate in exciting
          challenges tailored to your gaming interests. Sign up or log in to get
          started!
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
