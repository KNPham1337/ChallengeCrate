import { ModeToggle } from "./components/theme/mode-toggle";
import { ThemeProvider } from "./components/theme/theme-provider";

import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ModeToggle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
