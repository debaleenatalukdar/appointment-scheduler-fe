import { createBrowserRouter } from "react-router-dom";
import { SignIn, SignUp } from "../containers/Authentication";

export const router = createBrowserRouter([
    { path: '/', element: <SignIn /> },
    { path: '/signup', element: <SignUp /> }
]);
