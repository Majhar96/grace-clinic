import React from 'react';
import HeaderIntro from './HeaderIntro/HeaderIntro';
import HeaderNav from './HeaderNav/HeaderNav';


const Header = () => {


    return (
        <header>

            {/* // navbar section */}

            <HeaderNav></HeaderNav>

            {/* {// Intro Section} */}

            <HeaderIntro></HeaderIntro>


        </header>



    );

};


export default Header;