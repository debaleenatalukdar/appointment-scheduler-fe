import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthenticationContext } from "../../store";

export function Home() {
    const authenticationCtx = useContext(AuthenticationContext);
    const navigate = useNavigate();
    console.log(authenticationCtx);

    useEffect(() => {
        // If user is not authenticated, navigate to the Sign In page
        if(!authenticationCtx.userLoggedIn) {
            navigate('/signin');
        }
    });

    return(
        <AuthenticationContext.Provider value={{ userLoggedIn: false, userData: null }}>
            <div>Home</div>
        </AuthenticationContext.Provider>
    );
}
