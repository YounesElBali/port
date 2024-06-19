import React from 'react';
import LogoutLink from "../components/Authentication/LogoutLink";
import AuthorizeView, { AuthorizedUser } from "../components/Authentication/AuthorizeView";
import HomeText from '../components/Navmenu/HomeText';
import Navmenu from '../components/Navmenu/Navmenu';

function Home() {
    return (
        <div>
            <HomeText />
        </div>
    );
}

export default Home;
