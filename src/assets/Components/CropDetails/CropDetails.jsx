import React, { Component } from 'react'
import './CropDetails.css'
import CropInfoDashboard from '../CropInfoDashboard/CropInfoDashboard'

import { Link } from 'react-router-dom';

function CropDetails({ crops }) {
    return (
        <>
            <div className="CropDetails logged-container">
                {crops.map((crop) => {
                    return <CropInfoDashboard crop={crop} />;
                })}
                <Link to={`/Dashboard/CropDetails/AddCrop`} id="addCrop" >
                    <span className="material-symbols-outlined">
                        library_add
                    </span>
                    <h3>Add Crop</h3>
                </Link>
            </div>
        </>
    );
}


export default CropDetails