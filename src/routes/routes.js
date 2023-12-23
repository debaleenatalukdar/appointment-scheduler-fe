import { createBrowserRouter } from "react-router-dom";
import { SignIn, SignUp } from "../containers/Authentication";
import { Home } from "../containers/Home";

export const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/signin', element: <SignIn /> }
]);
