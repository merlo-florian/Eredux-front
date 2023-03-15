import { React, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const HomePage = () => {
   /* const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = (localStorage.getItem("authenticated") === 'true');
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);

    if (!authenticated) {
        return <Navigate replace to="/" />;
    } else {*/
        return (
            <div>
                <p>Bienvenue</p>
            </div>
        );
    //}
};
export default HomePage;