import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import StreamVideo from "./pages/StreamVideo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/video",
        element: <StreamVideo />,
      },
      {},
    ],
  },
]);

export default router;
