import React from 'react';
import Banner from './Banner/Banner';
import Homedata from './Homedata/Homedata';


const Home = () => {



    return (
        <div>

            {/*Carousels part */}
            <div>
                <Banner></Banner>
            </div>


            {/* homedata part */}
            <div>
                <Homedata></Homedata>
            </div>

        </div>
    );
};

export default Home;