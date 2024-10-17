import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { useEffect } from "react";
import { store } from "./redux/store";
import { listenForAuthChanges } from "./redux/authSlice";

function App() {
  useEffect(() => {
    store.dispatch(listenForAuthChanges());
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
