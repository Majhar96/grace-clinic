import React from 'react';
import './WhyChose.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, faAnchor, faClinicMedical } from '@fortawesome/free-solid-svg-icons';

const WhyChose = () => {

    // fontawesome icon set
    const clinic = <FontAwesomeIcon icon={faClinicMedical} />
    const care = <FontAwesomeIcon icon={faAmbulance} />
    const top = <FontAwesomeIcon icon={faAnchor} />

    return (
        <div className="main-why mb-3 pt-5">
            <h2>Why Choose Grace Clinic?
            </h2>
            <div className="why-container">

                <div className="purpose-container">
                    <button className="button">{clinic}</button>
                    <br />
                    <h3>More experience</h3>
                    <br />
                    <p>
                        Every year, more than a million people come to Grace Clinic for care. Our highly specialized experts are deeply experienced in treating rare and complex conditions.</p>
                </div>

                <div className="purpose-container">
                    <button className="button">{care}</button>
                    <h3>Seamless care</h3>
                    <br />
                    <p>
                        At Grace Clinic, every aspect of your care is coordinated and teams of experts work together to provide exactly the care you need. What might take months elsewhere can often be done in days here.</p>
                </div>

                <div className="purpose-container">
                    <button className="button">{top}</button>
                    <h3>Unparalleled expertise</h3>
                    <br />
                    <p> Unparalleled expertise
                        Grace Clinic experts are some of the best in the world. In the U.S. News and World Report rankings of top hospitals, Grace Clinic is consistently ranked among the top hospitals in the nation.</p>
                </div>
            </div>

        </div>
    );
};

export default WhyChose;