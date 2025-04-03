import { Button } from "./ui/button";

export default function LoginButton() {
  const handleClick = () => {
    window.location.href = "http://localhost:5000/auth/steam";
  };

  return (
    <div onClick={handleClick}>
      <Button variant={"default"}>Login</Button>
    </div>
  );
}
