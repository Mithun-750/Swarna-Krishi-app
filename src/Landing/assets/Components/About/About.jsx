import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <>
                <section id='About' className={`px-4 py-5 my-5 text-center text-bg-${this.props.crr_theme} transition `}>
                    {/* <img className="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                    <h1 className="display-5 fw-bold">About</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Simple Farm managing tool which helps a farmers keep track if fertilization and irrigation intervals and also help them keep track of the weather. This tool also helps them by recommending the best possibble crop that can be grown on the Land. </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3" fdprocessedid="y86du">Donate Us</button>
                            <a href="https://github.com/Mithun-750/Swarna-Krishi-app" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4" fdprocessedid="kyd7k">Source code</button>
                            </a>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default About
