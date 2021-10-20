import React from 'react';
import Banner from './Banner/Banner';
import Homedata from './Homedata/Homedata';
import WhyChose from "./WhyChoose/WhyChose";
import './Home.css'
import Covid19 from './Covid19/Covid19';


const Home = () => {



    return (
        <div>

            {/*Banner part */}
            <div>
                <Banner></Banner>
            </div>

            {/* why part */}
            <div>
                <WhyChose></WhyChose>
            </div>


            {/* homedata part */}
            <div>
                <Homedata></Homedata>
            </div>

            {/* covid 19 part */}
            <div>
                <Covid19></Covid19>
            </div>

        </div>
    );
};

export default Home;