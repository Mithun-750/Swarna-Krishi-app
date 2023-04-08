import React, { useState, useEffect } from 'react';
import './CropInfoDashboard.css';
import { Link } from 'react-router-dom';


const CropInfoDashboard = ({ crop }) => {
    const cropName = crop.cropName;
    const irrigationInterval = crop.irrigationInterval;
    const fertilizationInterval = crop.fertilizationInterval;
    const sunlightRequirements = crop.sunlightRequirements;
    const soilType = crop.soilType;
    const harvestTime = crop.harvestTime;



    useEffect(() => {

        let variable = `The N value of soil is high and might give rise to weeds.
      <br/> Please consider the following suggestions:
  
      <br/><br/> 1. <i> Manure </i> – adding manure is one of the simplest ways to amend your soil with nitrogen. Be careful as there are various types of manures with varying degrees of nitrogen.
  
      <br/> 2. <i>Coffee grinds </i> – use your morning addiction to feed your gardening habit! Coffee grinds are considered a green compost material which is rich in nitrogen. Once the grounds break down, your soil will be fed with delicious, delicious nitrogen. An added benefit to including coffee grounds to your soil is while it will compost, it will also help provide increased drainage to your soil.
  
      <br/>3. <i>Plant nitrogen fixing plants</i> – planting vegetables that are in Fabaceae family like peas, beans and soybeans have the ability to increase nitrogen in your soil
  
      <br/>4. Plant ‘green manure’ crops like cabbage, corn and brocolli
  
      <br/>5. <i>Use mulch (wet grass) while growing crops</i> - Mulch can also include sawdust and scrap soft woods`
        document.getElementById('FertiRecomend').innerHTML = variable

    }, []);

    return (
        <>

            <div className="crop-info-dashboard">
                <div className="crop-info-image">
                    <img src={`https://source.unsplash.com/900x1600/?${cropName}`} alt={cropName} />
                </div>
                <div className="crop-info-details">
                    <h3>{cropName}</h3>
                    <ul className="crop-info-list">
                        <li><span>Irrigation Interval:</span> {irrigationInterval} days</li>
                        <li><span>Fertilization Interval:</span> {fertilizationInterval} days</li>
                        <li><span>Sunlight Requirements:</span> {sunlightRequirements}</li>
                        <li><span>Soil Type:</span> {soilType}</li>
                        <li><span>Harvest Time:</span> {harvestTime}</li>
                        <div className="btn-container">

                            <li>
                                <Link to={`/Dashboard/CropDetails/${cropName}`}>
                                    <button className="info-btn">
                                        Edit
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <button className="info-btn" data-bs-toggle="modal" data-bs-target="#FerRecomendetionModal">
                                    Recommended
                                </button>
                            </li>
                        </div>
                    </ul>
                </div>


            </div>
            <div className="modal fade" id="FerRecomendetionModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content text-bg-dark">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Recomended Fertilizer :</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" id='FertiRecomend'>

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

export default CropInfoDashboard;
