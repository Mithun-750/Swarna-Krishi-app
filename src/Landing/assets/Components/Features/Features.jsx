import React, { Component } from 'react'
import './Features.css'

export class Features extends Component {
    render() {
        return (
            <>
                <section id='Features' className={`container text-bg-${this.props.crr_theme} px-3 pt-md-4 pt-xl-5 pb-lg-3 pb-xl-5 transition `}>
                    <div className="row mb-5">
                        <div className="col-lg-3">
                            <h1 className="py-2 pb-md-3 pb-lg-4">Features</h1><img className="d-none d-lg-block" src="https://finder.createx.studio/img/intro/turn-right-arrow.svg" width="80" alt="Arrow" />
                        </div>
                        <div className="col-lg-9">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-1 gy-md-3 gx-3 gx-md-4">
                                <div className="col">
                                    <div className="card card-body card-hover h-100 border-0 bg-transparent">
                                        <span className="material-symbols-outlined d-block mb-3" width="56" alt="Gulp logo" >
                                            manage_accounts
                                        </span>
                                        <h3 className="h6">Your managing assistant</h3>
                                        <p className="fs-sm mb-0">Helps farmer to easily manage all his crops and lands systematically.</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card card-body card-hover h-100 border-0 bg-transparent">
                                        <span className="material-symbols-outlined d-block mb-3" width="56"  >
                                            eco
                                        </span>
                                        <h3 className="h6">Manage Everything</h3>
                                        <p className="fs-sm mb-0">Farmer can input what are his lands, and what crop is he growing, and what time he sowed, and when is the harvest time.</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card card-body card-hover h-100 border-0 bg-transparent">
                                        <span className="material-symbols-outlined d-block mb-3" width="56">
                                            cloudy
                                        </span>
                                        <h3 className="h6">Track Weather</h3>
                                        <p className="fs-sm mb-0">Track the weather to take precautions for a bad weather.</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card card-body card-hover h-100 border-0 bg-transparent">
                                        <span className="material-symbols-outlined d-block mb-3" width="56" >
                                            Notifications
                                        </span>
                                        <h3 className="h6">Notifications</h3>
                                        <p className="fs-sm mb-0">We will send push notifications for you to stay on track.</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card card-body card-hover h-100 border-0 bg-transparent">
                                        <span className="material-symbols-outlined d-block mb-3" width="56" >
                                            recommend
                                        </span>
                                        <h3 className="h6">Recomendations for farmers</h3>
                                        <p className="fs-sm mb-0">Not sure what to grow? Dont worry! we will recomend the best crop that can be grown on your land based on the data provided.</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card card-body card-hover h-100 border-0 bg-transparent">
                                        <span className="material-symbols-outlined d-block mb-3" width="56" >
                                            smartphone
                                        </span>
                                        <h3 className="h6">Mobile friendly interface</h3>
                                        <p className="fs-sm mb-0">It's not a surprise that nowadays over 60% of users surf the inernet using their mobile devices. Finder is 100% responsive and optimized for small touch screens.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Features
