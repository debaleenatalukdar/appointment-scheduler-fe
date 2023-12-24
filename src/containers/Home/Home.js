import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function Home() {
    const navigate = useNavigate();
    const userAuth = useSelector(state => state.auth);

    useEffect(() => {
        // If user is not authenticated, navigate to the Sign In page
        if(!userAuth.userLoggedIn) {
            navigate('/signin');
        }
    });

    return(
        <div>Home</div>
    );
}
