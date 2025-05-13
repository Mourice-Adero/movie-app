import { RouterProvider } from "react-router";
import { router } from "./routes";
import MovieProvider from "./contexts/MovieContext";

function App() {
  return (
    <>
      <MovieProvider>
        <RouterProvider router={router} />
      </MovieProvider>
    </>
  );
}

export default App;
