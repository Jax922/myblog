import React from "react"
import ReactDOM from "react-dom"
import App from './App'
import Home from './pages/Home'
import Resume from "./pages/Resume"
import Blog from "./pages/Blog"
import Article from "./pages/Article"

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "home",
                element: <Home />
            },
            {
                path: "cv",
                element: <Resume />
            },
            {
                path: "blog",
                element: <Blog />,
                children: [
                    {
                        path: "article:id",
                        element: <Article />
                    }
                ]
            }
            

        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)