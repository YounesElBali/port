import { useNavigate } from "react-router-dom";
import React from 'react';

function LogoutLink(props) {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(process.env.REACT_APP_API_URL +"/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: ""
        })
            .then((data) => {
                if (data.ok) {
                    navigate("/login");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <a href="/" onClick={handleSubmit}>{props.children}</a>
    );
}

export default LogoutLink;
