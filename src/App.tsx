import { RouterProvider } from "react-router-dom";
import { router } from "./router/route";
import ThemeProvider from "./providers/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
