import { createBrowserRouter } from "react-router";
import DestinasiList from "../features/DestinasiList";
import DestinasiCreate from "../features/DestinasiCreate";
import DestinasiDetail from "../features/DestinasiDetail";
import DestinasiEdit from "../features/DestinasiEdit";
import DestinasiAbout from "../features/DestinasiAbout";
import DestinasiContact from "../features/DestinasiContact";
import NotFound from "../features/DestinasiNotFound";
import Layout from "../components/Layout";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: "/", element: <DestinasiList /> },
            { path: "/destinasi/new", element: <DestinasiCreate /> },
            { path: "/destinasi/:id", element: <DestinasiDetail /> },
            { path: "/destinasi/:id/edit", element: <DestinasiEdit/>},
            { path: "/destinasi/about", element: <DestinasiAbout/>},
            { path: "/destinasi/contact", element: <DestinasiContact/>},
            { path: "*", element: <NotFound /> },
        ], 
    },
]); 