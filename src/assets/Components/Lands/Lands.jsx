import React, { Component } from 'react'
import './Lands.css'
import LandInfo from './LandInfo/LandInfo'

import { Link } from 'react-router-dom';

function LandDetails({ lands }) {
    return (
        <>
            <div className="LandDetails logged-container">
                {lands.map((land) => {
                    return <LandInfo Land={land} />;
                })}
                <Link to={`/Dashboard/Lands/AddLand`} id="addLand" >
                    <span className="material-symbols-outlined">
                        library_add
                    </span>
                    <h3>Add Land</h3>
                </Link>
            </div >
        </>
    );
}


export default LandDetails