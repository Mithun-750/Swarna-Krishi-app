import { useState } from 'react'
import './Landing_App.css'
import MyNav from './assets/Components/MyNav/MyNav'
import Carousel from './assets/Components/Carousel/Carousel'
import Features from './assets/Components/Features/Features'
import Pricing from './assets/Components/Pricing/Pricing'
import Faq from './assets/Components/Faq/Faq'
import About from './assets/Components/About/About'
import Footer from './assets/Components/Footer/Footer'
import Sign_in from './assets/Components/Sign-in/Sign-in'

function Landing_App(props) {
  let [Navheight, setNavHeight] = useState(0)

  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleThemeChange() {
    setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
  }

  const crr_theme = isDarkMode ? "dark" : "light";
  const theme = isDarkMode ? "light" : "dark";

  function manage() {
    const myNav = document.getElementById('MyNav');
    setNavHeight(myNav.offsetHeight);
    console.log(Navheight)
  }

  function AutoTheme() {
    let time = new Date();
    let Hour = time.getHours()
    let min = time.getMinutes()
    console.log(Hour)

    if ((Hour >= 19) || ((Hour === 18) && (min > 30))) {
      handleThemeChange();
    }

  }

  window.onload = () => {
    manage()
    AutoTheme()
  }

  let space = {
    height: `${Navheight + 5}px`
  }

  return (
    <>
      <div id="supreme_container" className={`supreme_${crr_theme} transition`} ref={props.ref} >
        <MyNav theme={theme} crr_theme={crr_theme} onThemeChange={handleThemeChange} />
        <Sign_in theme={theme} crr_theme={crr_theme} />
        <div style={space}></div>
        <Carousel />
        <div className="divider"></div>
        <Features theme={theme} crr_theme={crr_theme} />
        <div className="divider"></div>
        <Pricing theme={theme} crr_theme={crr_theme} />
        <div className="divider"></div>
        <Faq theme={theme} crr_theme={crr_theme} />
        <div className="divider"></div>
        <About theme={theme} crr_theme={crr_theme} />
        <div className="divider"></div>
        <Footer theme={theme} crr_theme={crr_theme} />

      </div>
    </>
  )
}

export default Landing_App
