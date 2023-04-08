import React, { useState } from 'react';
import './EditCrop.css';
import { useNavigate } from "react-router-dom";

const EditCrop = ({ crop, handleSubmit }) => {
    const [cropName, setCropName] = useState(crop.cropName);
    const [irrigationInterval, setIrrigationInterval] = useState(crop.irrigationInterval);
    const [fertilizationInterval, setFertilizationInterval] = useState(crop.fertilizationInterval);
    const [sunlightRequirements, setSunlightRequirements] = useState(crop.sunlightRequirements);
    const [soilType, setSoilType] = useState(crop.soilType);
    const [harvestTime, setHarvestTime] = useState(crop.harvestTime);

    const navigate = useNavigate();



    const handleCropNameChange = (e) => {
        setCropName(e.target.value);
    };

    const handleIrrigationIntervalChange = (e) => {
        setIrrigationInterval(e.target.value);
    };

    const handleFertilizationIntervalChange = (e) => {
        setFertilizationInterval(e.target.value);
    };

    const handleSunlightRequirementsChange = (e) => {
        setSunlightRequirements(e.target.value);
    };

    const handleSoilTypeChange = (e) => {
        setSoilType(e.target.value);
    };

    const handleHarvestTimeChange = (e) => {
        setHarvestTime(e.target.value);
    };

    const handleSubmitClick = () => {
        handleSubmit({
            ...crop,
            cropName,
            irrigationInterval,
            fertilizationInterval,
            sunlightRequirements,
            soilType,
            harvestTime
        });

        navigate("/Dashboard/CropDetails");

    };

    return (
        <div className="edit-crop">
            <h2>{crop.cropName ? `Edit ${crop.cropName}` : 'Add Crop'}</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="cropNameInput">Crop Name:</label>
                    <input id="cropNameInput" type="text" value={cropName} onChange={handleCropNameChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="irrigationIntervalInput">Irrigation Interval:</label>
                    <input id="irrigationIntervalInput" type="text" value={irrigationInterval} onChange={handleIrrigationIntervalChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="fertilizationIntervalInput">Fertilization Interval:</label>
                    <input id="fertilizationIntervalInput" type="text" value={fertilizationInterval} onChange={handleFertilizationIntervalChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="sunlightRequirementsInput">Sunlight Requirements:</label>
                    <input id="sunlightRequirementsInput" type="text" value={sunlightRequirements} onChange={handleSunlightRequirementsChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="soilTypeInput">Soil Type:</label>
                    <input id="soilTypeInput" type="text" value={soilType} onChange={handleSoilTypeChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="harvestTimeInput">Harvest Time:</label>
                    <input id="harvestTimeInput" type="text" value={harvestTime} onChange={handleHarvestTimeChange} />
                </div>
                <div className="btn-container">
                    <button className="submit-btn" type="submit" onClick={handleSubmitClick}>{crop.cropName ? `Save Changes` : 'Add Crop'}</button>
                </div>
            </form>
        </div>

    );
};

export default EditCrop;


