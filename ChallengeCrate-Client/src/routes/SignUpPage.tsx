// Checklist
// Username
// Password
// Email

import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
        className="w-full max-w-md space-y-4"
      >
        {/* Username Field */}
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="Enter your username"
            required
          />

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
