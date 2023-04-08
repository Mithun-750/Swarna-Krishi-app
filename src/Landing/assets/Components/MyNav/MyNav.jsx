import React, { Component } from 'react'
import './MyNav.css'
import PropTypes from 'prop-types';
import Sign_in from '../Sign-in/Sign-in';

export class MyNav extends Component {

    render() {
        return (
            <>
                <nav className={`py-3 text-bg-${this.props.crr_theme} fixed-top transition border-bottom `} id='MyNav' onClick={this.props.onClick}>
                    <div className="">
                        <div className="d-flex flex-wrap align-items-center justify-content-around">
                            <a href="/" className={`d-flex align-items-center mb-2 mb-lg-0 text-bg-${this.props.crr_theme} text-decoration-none transition `}>
                                <h1 className={`logo text-bg-${this.props.crr_theme} transition `}>SwarnaKrishi</h1>
                            </a>

                            <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
                                <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                                <li><a href="#Features" className={`nav-link px-2 text-bg-${this.props.crr_theme} transition `}>Features</a></li>
                                <li><a href="#Pricing" className={`nav-link px-2 text-bg-${this.props.crr_theme} transition `}>Pricing</a></li>
                                <li><a href="#FAQs" className={`nav-link px-2 text-bg-${this.props.crr_theme} transition `}>FAQs</a></li>
                                <li><a href="#About" className={`nav-link px-2 text-bg-${this.props.crr_theme} transition `}>About</a></li>
                            </ul>

                            <div className="text-end">

                                <button type="button" onClick={this.props.onThemeChange} className={`btn text-bg-${this.props.crr_theme} m-2 mx-lg-4 transition `} data-toggle="tooltip" data-placement="bottom" title={`Enable ${this.props.theme} mode`}>
                                    <span className="material-symbols-outlined">
                                        {`${this.props.crr_theme}_mode`}
                                    </span>
                                </button>
                                <button type="button" className={`btn btn-outline-${this.props.theme} text-bg-${this.props.crr_theme} me-2 transition `}>Login</button>
                                <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalSignin">Sign-up</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default MyNav
