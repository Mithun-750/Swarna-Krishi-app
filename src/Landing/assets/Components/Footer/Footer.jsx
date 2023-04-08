import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <>
                <div class={`text-bg-${this.props.crr_theme} transition`}>
                    <footer class="d-flex flex-wrap justify-content-between align-items-center p-3 border-top">
                        <p class="col-md-4 mb-0 ">© 2022 Company, Inc</p>

                        <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                            <h2 className={`logo text-bg-${this.props.crr_theme} transition`}>SwarnaKrishi</h2>
                        </a>

                        <ul class={`nav col-md-4 d-flex justify-content-end  text-bg-${this.props.crr_theme} transition`}>
                            <li class="nav-item"><a href="#" class="nav-link px-2">Home</a></li>
                            <li class="nav-item"><a href="#Features" class="nav-link px-2 ">Features</a></li>
                            <li class="nav-item"><a href="#Pricing" class="nav-link px-2 ">Pricing</a></li>
                            <li class="nav-item"><a href="#FAQs" class="nav-link px-2 ">FAQs</a></li>
                            <li class="nav-item"><a href="#About" class="nav-link px-2 ">About</a></li>
                        </ul>
                    </footer>
                </div>
            </>
        )
    }
}

export default Footer
