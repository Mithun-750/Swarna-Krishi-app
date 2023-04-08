import React, { useState } from 'react';
import './Editland.css';
import { useNavigate } from "react-router-dom";

const EditLand = ({ Land, handleSubmit }) => {
    const [LandName, setLandName] = useState(Land.name);
    const [soil_color, setsoil_color] = useState(Land.soil_color);
    const [soil_texture, setsoil_texture] = useState(Land.soil_texture);
    const [rainfall, setrainfall] = useState(Land.rainfall);
    const [ph, setph] = useState(Land.ph);
    const [nitrogren, setnitrogren] = useState(Land.nitrogren);
    const [phosphorous, setphosphorous] = useState(Land.phosphorous);
    const [potassium, setpotassium] = useState(Land.nitrogren);

    const navigate = useNavigate();

    const handleLandNameChange = (e) => {
        setLandName(e.target.value);
    };

    const handlesoil_colorChange = (e) => {
        setsoil_color(e.target.value);
    };

    const handlesoil_textureChange = (e) => {
        setsoil_texture(e.target.value);
    };

    const handlerainfallChange = (e) => {
        setrainfall(e.target.value);
    };

    const handlephChange = (e) => {
        setph(e.target.value);
    };

    const handlenitrogrenChange = (e) => {
        setnitrogren(e.target.value);
    };

    const handlephosphorousChange = (e) => {
        setphosphorous(e.target.value);
    };

    const handlepotassiumChange = (e) => {
        setpotassium(e.target.value);
    };

    const handleSubmitClick = () => {
        handleSubmit({
            ...Land,
            LandName,
            soil_color,
            soil_texture,
            rainfall,
            ph,
            nitrogren
        });

        navigate("/Dashboard/LandDetails");

    };

    return (
        <div className="edit-Land">
            <h2>{Land.LandName ? `Edit ${Land.LandName}` : 'Add Land'}</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="LandNameInput">Land Name:</label>
                    <input id="LandNameInput" type="text" value={LandName} onChange={handleLandNameChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="soil_colorInput">Irrigation Interval:</label>
                    <input id="soil_colorInput" type="text" value={soil_color} onChange={handlesoil_colorChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="soil_textureInput">Fertilization Interval:</label>
                    <input id="soil_textureInput" type="text" value={soil_texture} onChange={handlesoil_textureChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="rainfallInput">Sunlight Requirements:</label>
                    <input id="rainfallInput" type="text" value={rainfall} onChange={handlerainfallChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="phInput">Soil Type:</label>
                    <input id="phInput" type="text" value={ph} onChange={handlephChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="nitrogrenInput">Harvest Time:</label>
                    <input id="nitrogrenInput" type="text" value={nitrogren} onChange={handlenitrogrenChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="potassiumInput">Harvest Time:</label>
                    <input id="potassiumInput" type="text" value={potassium} onChange={handlepotassiumChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="phosphorousInput">Harvest Time:</label>
                    <input id="phosphorousInput" type="text" value={phosphorous} onChange={handlephosphorousChange} />
                </div>
                <div className="btn-container">
                    <button className="submit-btn" type="submit" onClick={handleSubmitClick}>{Land.LandName ? `Save Changes` : 'Add Land'}</button>
                </div>
            </form>
        </div>

    );
};

export default EditLand;


