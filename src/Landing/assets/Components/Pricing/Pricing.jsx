import React, { Component } from 'react'
import './Pricing.css'

export class Pricing extends Component {
    render() {
        return (
            // <section id="Pricing" className="px-4 py-5 my-5 text-bg-${this.props.crr_theme} transition  text-center">
            //     <img className="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
            //         <div className="col-lg-6 mx-auto">
            //             <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            //             <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            //                 <button type="button" className="btn btn-primary btn-lg px-4 gap-3" fdprocessedid="5jflkb">Primary button</button>
            //                 <button type="button" className="btn btn-outline-secondary btn-lg px-4" fdprocessedid="7n08r">Secondary</button>
            //             </div>
            //         </div>
            // </section>
            <>
                <section id='Pricing' className={`container text-bg-${this.props.crr_theme} transition `}>
                    <h1 className="display-5 py-5 fw-bold text-center a_heading">Pricing</h1>

                    <div className={`row row-cols-1 row-cols-md-3 mb-3 text-center text-bg-${this.props.crr_theme} transition `} >
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className={`card-header py-3 text-bg-${this.props.crr_theme} transition `}>
                                    <h4 className="my-0 fw-normal">Free</h4>
                                </div>
                                <div className={`card-body text-bg-${this.props.crr_theme} transition `}>
                                    <h1 className="card-title pricing-card-title">$0<small className={`text-bg-${this.props.crr_theme} transition `}>/mo</small></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>10 users included</li>
                                        <li>2 GB of storage</li>
                                        <li>Email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 shadow-sm">
                                <div className={`card-header py-3 text-bg-${this.props.crr_theme} transition `}>
                                    <h4 className="my-0 fw-normal">Pro</h4>
                                </div>
                                <div className={`card-body text-bg-${this.props.crr_theme} transition `}>
                                    <h1 className="card-title pricing-card-title">$15<small className={`text-bg-${this.props.crr_theme} transition `}>/mo</small></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>20 users included</li>
                                        <li>10 GB of storage</li>
                                        <li>Priority email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-primary">
                                <div className="card-header py-3 text-bg-primary border-primary">
                                    <h4 className="my-0 fw-normal">Enterprise</h4>
                                </div>
                                <div className={`card-body text-bg-${this.props.crr_theme} transition `}>
                                    <h1 className="card-title pricing-card-title">$29<small className={`text-bg-${this.props.crr_theme} transition `}>/mo</small></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>30 users included</li>
                                        <li>15 GB of storage</li>
                                        <li>Phone and email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Pricing
