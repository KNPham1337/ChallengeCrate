import { Button } from "./ui/button";

export default function SignUpButton() {
  const handleClick = () => {
    window.location.href = "http://localhost:5000/auth/steam";
  };

  return (
    <div onClick={handleClick}>
      <Button variant={"default"}>Sign Up</Button>
    </div>
  );
}
