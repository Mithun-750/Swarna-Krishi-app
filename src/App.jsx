import { useState, useRef, useEffect } from 'react';
import './App.css';
import Navbar from './assets/Components/Navbar/Navbar';
import Welcome from './assets/Components/Welcome/Welcome';
import CountdownTimer from './assets/Components/Timer/Timer';
import Weather from './assets/Components/Weather/Weather';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import CropDetails from './assets/Components/CropDetails/CropDetails';
import EditCrop from './assets/Components/EditCrop/EditCrop';
import ProfilePage from './assets/Components/ProfilePage/Profilepage';
import Landing_App from './Landing/Landing_App';
import LandDetails from './assets/Components/Lands/Lands';
import EditLand from './assets/Components/Lands/EditLand/EditLand';

function App() {
  const countdownRef = useRef(null);
  const landingRef = useRef(null);
  const weatherRef = useRef(null);

  const [showNavbar, setShowNavbar] = useState(true);

  const [countdownTime, setCountdownTime] = useState('00:00:00');
  const [countdownTimeF, setCountdownTimeF] = useState('00:00:00');

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Landing");
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const iriPElement = document.getElementById('IriP');
      if (iriPElement) {
        setCountdownTime(iriPElement.innerText);
      }

      const ferPElement = document.getElementById('FerP');
      if (ferPElement) {
        setCountdownTimeF(ferPElement.innerText);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.getElementById('IriT2').classList.add('gone');
          document.getElementById('IriP2').classList.add('gone');
          document.getElementById('FerT2').classList.add('gone');
          document.getElementById('FerP2').classList.add('gone');

          for (const element of document.getElementsByClassName('timer')) {
            element.classList.remove('gone');
          }
        } else {
          for (const element of document.getElementsByClassName('timer')) {
            element.classList.add('gone');
          }
          document.getElementById('IriT2').classList.remove('gone');
          document.getElementById('IriP2').classList.remove('gone');
          document.getElementById('FerT2').classList.remove('gone');
          document.getElementById('FerP2').classList.remove('gone');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );
    if (countdownRef.current) {
      observer.observe(countdownRef.current);
    }
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowNavbar(false)

        } else {

          setShowNavbar(true)
        }
      },
      {
        root: null,
        rootMargin: '1000px 1000px',
        threshold: 0.5,
      }
    );
    if (landingRef.current) {
      observer3.observe(landingRef.current);
    }

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          for (const element of document.getElementsByClassName('weather-container')) {
            element.classList.remove('gone');
          }
        } else {
          for (const element of document.getElementsByClassName('weather-container')) {
            element.classList.add('gone');
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );
    if (weatherRef.current) {
      observer2.observe(weatherRef.current);
    }

    return () => {
      if (countdownRef.current) {
        observer.unobserve(countdownRef.current);
      }
      if (weatherRef.current) {
        observer2.unobserve(weatherRef.current);
      }
    };
  }, []);

  const crops = [
    {
      cropName: 'Tamato',
      irrigationInterval: '2 Days',
      fertilizationInterval: '5 Days',
      soilType: 'Red',
      harvestTime: '3 months'
    },
    {
      cropName: 'Potato',
      irrigationInterval: '2 Days',
      fertilizationInterval: '5 Days',
      soilType: 'Red',
      harvestTime: '3 months'
    },
  ]

  const lands = [
    {
      name: 'Land_1',
      nitrogen: '20',
      phosphorous: '30',
      potassium: '70',
      ph: '7',
      location: 'chittoor',
      rainfall: '10',
      soil_color: 'Red',
      soil_texture: 'Clay',
    },
    {
      name: 'Land_2',
      nitrogen: '20',
      phosphorous: '30',
      potassium: '70',
      ph: '7',
      location: 'chittoor',
      rainfall: '10',
      soil_color: 'Red',
      soil_texture: 'Clay',
    },
  ]

  const profile = {
    name: 'Krishi',
    area: 'chittoor',
    email: 'Krishi@gmail.com',
    mainCrop: 'Tamato',
    pin: '517646',
  }

  let irrigationDeadline = new Date('2023-05-01T12:00:00');
  let fertilizationDeadline = new Date('2023-04-30T12:00:00');

  return (
    <>
      <div className="supreme_container">
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/Dashboard" element={
            <div>

              <Welcome profile={profile} />

              <div id="IriT2">Irrigation Countdown</div>
              <div id="IriP2">{countdownTime}</div>
              <div id="FerT2">Fertilization Countdown</div>
              <div id="FerP2">{countdownTimeF}</div>

              <h1 className="title center">Count-Downs</h1>
              <div className="logged-container">
                <div>
                  <CountdownTimer timerTitle={'Irrigation Countdown'} deadline={irrigationDeadline} tID='IriT' pID='IriP' />
                </div>
                <div ref={countdownRef}></div>
                <div>
                  <CountdownTimer timerTitle={'Fertilization Countdown'} deadline={fertilizationDeadline} tID='FerT' pID='FerP' />
                </div>
              </div>

              <h1 className="title center">Weather</h1>

              <div className="logged-container" ref={weatherRef}>
                <Weather location={profile.area} />
              </div>

              <button onClick={handleClick} >hi</button>

            </div>
          } />

          {/* Crops start */}
          <Route path='/Dashboard/CropDetails' element={<CropDetails crops={crops} />} />
          {crops.map((crop) => {
            return <Route path={`/Dashboard/CropDetails/${crop.cropName}`} element={<EditCrop crop={crop} />} />;
          })}
          <Route path='/Dashboard/CropDetails/AddCrop' element={<EditCrop crop={``} />} />
          {/* Crops end */}

          {/* Lands start */}
          <Route path='/Dashboard/Lands' element={<LandDetails lands={lands} />} />
          {lands.map((land) => {
            return <Route path={`/Dashboard/Lands/edit/${land.name}`} element={<EditLand Land={land} />} />;
          })}
          <Route path='/Dashboard/Lands/AddLand' element={<EditLand Land={``} />} />
          {/* Lands end */}

          <Route path='/Dashboard/ProfilePage' element={<ProfilePage profile={profile} />} />
          <Route path="/" element={
            <div>
              <div ref={landingRef} className='fixed-top' ></div>
              <Landing_App />
            </div>
          } />

        </Routes>

      </div>
    </>
  );
}


export default function RouterWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
