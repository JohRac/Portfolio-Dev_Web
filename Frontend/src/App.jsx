import { GetFooter } from "./banner/GetFooter";
import { GetHeader } from "./banner/GetHeader";
import { Home } from "./home/Home";
import { Project } from "./project/Project";
import { Contact } from "./contact/Contact";
import "./styles/App.scss";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "Projets",
        element: <Project />
      },
      {
        path: "Contact",
        element: <Contact />
      }
    ]
  }
]);

function Root() {
  return <>
    <GetHeader/>
    <Outlet />
    <GetFooter/>
  </>
}

function App() {
  return <RouterProvider router={router} />
}

export default App