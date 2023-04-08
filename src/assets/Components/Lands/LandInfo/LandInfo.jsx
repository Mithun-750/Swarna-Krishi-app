import React, { useState, useEffect } from 'react';
import './LandInfo.css';
import { Link } from 'react-router-dom';

const LandInfo = ({ Land }) => {

    const LandName = Land.name;
    const soil_color = Land.soil_color;
    const soil_texture = Land.soil_texture;
    const rainfall = Land.rainfall;
    const ph = Land.ph;
    const nitrogren = Land.nitrogren;
    const potassium = Land.potassium;
    const phosphorous = Land.phosphorous;


    return (
        <>
            <div className="Land-info-dashboard">
                <h3>{LandName}</h3>
                <ul className="Land-info-list">
                    <li><span>Soil Color :</span> {soil_color}</li>
                    <li><span>Soil Texture :</span> {soil_texture}</li>
                    <li><span>Rainfall :</span> {rainfall}</li>
                    <li><span>PH :</span> {ph}</li>
                    <li><span>Nitrogren :</span> {nitrogren}</li>
                    <li><span>Potassium :</span> {potassium}</li>
                    <li><span>Phosphorous :</span> {phosphorous}</li>
                    <div className="btn-container">
                        <li>
                            <Link to={`/Dashboard/Lands/edit/${LandName}/`}>
                                <button className="info-btn">
                                    Edit
                                </button>
                            </Link>
                        </li>
                        <li>
                            <button className="info-btn" data-bs-toggle="modal" data-bs-target="#RecomendetionModal">
                                Recommended
                            </button>
                        </li>
                    </div>
                </ul>
            </div>
            <div className="modal fade" id="RecomendetionModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content text-bg-dark">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Recomended crop :</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h3>Potato</h3>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandInfo;
