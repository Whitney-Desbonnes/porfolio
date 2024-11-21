import './App.css';
import Navbar from "./components/pages/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


function App() {
  // state (état, données)
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Navbar/>,
      errorElement: <div>Error Page</div>,
    },
  ])

  // comportements

  // render / affichage
  return <RouterProvider router={router}/>;
}

export default App;
