import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = ({ profile }) => {
    const [name, setName] = useState(profile.name);
    const [area, setArea] = useState(profile.area);
    const [email, setEmail] = useState(profile.email);
    const [mainCrop, setMainCrop] = useState(profile.mainCrop);
    const [profilePic, setProfilePic] = useState('https://source.unsplash.com/400x400/?portrait');
    const [pin, setpin] = useState(profile.pin);

    const [editing, setEditing] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAreaChange = (event) => {
        setArea(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMainCropChange = (event) => {
        setMainCrop(event.target.value);
    };

    const handlepinChange = (event) => {
        setpin(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setEditing(false);
    };

    const handleEditClick = () => {
        setEditing(true);
    };

    return (
        <div className="profile-page">
            <div className="profile-header">
                <div className="profile-pic">
                    <img src={profilePic} alt="Profile" />
                    {/* {editing && (
                        <div className="form-group-2">
                            <label htmlFor="profile-pic">Profile Picture URL:</label>
                            <input
                                type="text"
                                id="profile-pic"
                                name="profile-pic"
                                value={profilePic}
                                onChange={handleProfilePicChange}
                            />
                        </div>
                    )} */}
                </div>
                <div className="profile-info">
                    <h2>{name}</h2>
                    <p>{area}-{pin}</p>
                    <p>{email}</p>
                    <p>Main Crop: {mainCrop}</p>
                    {editing && (
                        <div className="form-group-2">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="Prof_name" name="name" value={name} required onChange={handleNameChange} />
                        </div>
                    )}
                    {editing && (
                        <div className="form-group-2">
                            <label htmlFor="area">Area:</label>
                            <input type="text" id="area" name="area" value={area} onChange={handleAreaChange} />
                        </div>
                    )}
                    {editing && (
                        <div className="form-group-2">
                            <label htmlFor="pin">pin:</label>
                            <input type="text" id="pin" name="pin" value={pin} onChange={handlepinChange} />
                        </div>
                    )}
                    {editing && (
                        <div className="form-group-2">
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email" value={email} onChange={handleEmailChange} />
                        </div>
                    )}
                    {editing && (
                        <div className="form-group-2">
                            <label htmlFor="mainCrop">Main Crop:</label>
                            <input
                                type="text"
                                id="mainCrop"
                                name="mainCrop"
                                value={mainCrop}
                                onChange={handleMainCropChange}
                            />
                        </div>
                    )}
                    {editing ? (
                        <button className="profile-btn" onClick={handleSubmit}>
                            Save Changes
                        </button>
                    ) : (
                        <button className="profile-btn" onClick={handleEditClick}>
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
