/**
 * todo: Add validation checks for username, password, and email
 * requirements:
 *  - username must be minimum 8 characters, includes one number and one special character
 *  - password must be minimum 8 characters, includes one number, one special character, and one uppercase character
 *  - emails must match example@email.com format
 *
 * Todo: Add backend functionality for further validation
 * - Make sure username is unique, make sure email is unique
 * - Clean and sanitize input from user
 *
 * https://zod.dev/?id=introduction
 * https://ui.shadcn.com/docs/components/form
 */

import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Requires a domain extension
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address with a domain extension.");
      return;
    }

    console.log(formData); // Log the form data
    navigate("/"); // Navigate to another page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form onSubmit={handleSignUp} className="w-full max-w-md">
        <div className="space-y-5">
          {/* Username Field */}
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
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
