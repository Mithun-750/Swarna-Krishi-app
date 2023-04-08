import React, { Component } from 'react'
import './Features.css'

export class Features extends Component {
    render() {
        return (
            <>
                <section id='Features' class={`container text-bg-${this.props.crr_theme} px-3 pt-md-4 pt-xl-5 pb-lg-3 pb-xl-5 transition `}>
                    <div class="row mb-5">
                        <div class="col-lg-3">
                            <h1 class="py-2 pb-md-3 pb-lg-4">Features</h1><img class="d-none d-lg-block" src="https://finder.createx.studio/img/intro/turn-right-arrow.svg" width="80" alt="Arrow" />
                        </div>
                        <div class="col-lg-9">
                            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-1 gy-md-3 gx-3 gx-md-4">
                                <div class="col">
                                    <div class="card card-body card-hover h-100 border-0 bg-transparent"><img class="d-block mb-3" src="img/intro/features/bootstrap.png" width="56" alt="Bootstrap logo" />
                                        <h3 class="h6">Built with Bootstrap 5</h3>
                                        <p class="fs-sm mb-0">Finder is&nbsp;the powerful front-end solution based on&nbsp;Bootstrap 5&nbsp;— the world's&nbsp;most popular responsive, mobile-first front-end component library.</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card card-body card-hover h-100 border-0 bg-transparent"><img class="d-block mb-3" src="img/intro/features/gulp.png" width="56" alt="Gulp logo" />
                                        <h3 class="h6">Kick-start your development</h3>
                                        <p class="fs-sm mb-0">Start your development process fast and easy with Node.js&nbsp;and Gulp setup. Configuration files are included in&nbsp;download package. Full tasks automation.</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card card-body card-hover h-100 border-0 bg-transparent"><img class="d-block mb-3" src="img/intro/features/sass.png" width="56" alt="Sass logo" />
                                        <h3 class="h6">Easy to customize with Sass</h3>
                                        <p class="fs-sm mb-0">Finder is&nbsp;built using Sass. Easily change colors, typography and much more. It&nbsp;is&nbsp;the most mature, stable, and powerful CSS extension language in&nbsp;the world.</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card card-body card-hover h-100 border-0 bg-transparent"><img class="d-block mb-3" src="img/intro/features/pug.png" width="56" alt="Pug logo" />
                                        <h3 class="h6">Pug - HTML templating</h3>
                                        <p class="fs-sm mb-0">No need to write huge amount of HTML, if you don’t want to. Pug provides features not available in plain HTML like variables, includes, mixins, functions and other.</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card card-body card-hover h-100 border-0 bg-transparent"><img class="d-block mb-3" src="img/intro/features/components.png" width="56" alt="Components icon" />
                                        <h3 class="h6">50+ flexible components</h3>
                                        <p class="fs-sm mb-0">Besides styling all default Bootstrap 5 components Finder introduces lots of&nbsp;new flexible, customizable and reusable elements you can use across the website.</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card card-body card-hover h-100 border-0 bg-transparent"><img class="d-block mb-3" src="img/intro/features/mobile.png" width="56" alt="Mobile icon" />
                                        <h3 class="h6">Mobile friendly interface</h3>
                                        <p class="fs-sm mb-0">It's not a surprise that nowadays over 60% of users surf the inernet using their mobile devices. Finder is 100% responsive and optimized for small touch screens.</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card card-body card-hover h-100 border-0 bg-transparent"><img class="d-block mb-3" src="img/intro/features/touch.png" width="56" alt="Touch icon" />
                                        <h3 class="h6">Touch-enabled sliders</h3>
                                        <p class="fs-sm mb-0">In the era of touch screens it is important to ensure great user experience on handheld devices, especially when it comes to such frequently used component as slider.</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card card-body card-hover h-100 border-0 bg-transparent"><img class="d-block mb-3" src="img/intro/features/google-fonts.png" width="56" alt="Google Fonts logo" />
                                        <h3 class="h6">Google fonts</h3>
                                        <p class="fs-sm mb-0">Finder uses Google font (Noto Sans) which is free, fast to load and of very high quality. Currently Google fonts library includes 1000+ font families to choose from.</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card card-body card-hover h-100 border-0 bg-transparent"><img class="d-block mb-3" src="img/intro/features/vector.png" width="56" alt="Vector icon" />
                                        <h3 class="h6">Vector based HD ready icons</h3>
                                        <p class="fs-sm mb-0">Finder is equiped with font-based icon pack to ensure that infographics and interface icons look sharp on any device with any screen resolution and pixel density.</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card card-body card-hover h-100 border-0 bg-transparent"><img class="d-block mb-3" src="img/intro/features/html.png" width="56" alt="HTML5 logo" />
                                        <h3 class="h6">W3C valid HTML code</h3>
                                        <p class="fs-sm mb-0">All HTML files are checked via W3C validator to ensure 100% valid code. As you probably know invalid HTML limits innovation, but Finder is innovative at its core.</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card card-body card-hover h-100 border-0 bg-transparent"><img class="d-block mb-3" src="img/intro/features/js.png" width="56" alt="JS icon" />
                                        <h3 class="h6">Future-proof JavaScript</h3>
                                        <p class="fs-sm mb-0">Finder core scripts as&nbsp;well as&nbsp;all dependencies are written in&nbsp;vanilla&nbsp;JS. And now with Bootstrap 5 we finally drop jQuery and use ES6 modules.</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card card-body card-hover h-100 border-0 bg-transparent"><img class="d-block mb-3" src="img/intro/features/docs.png" width="56" alt="Docs icon" />
                                        <h3 class="h6">Detailed documentation</h3>
                                        <p class="fs-sm mb-0">Download package includes offline and links to online documentation. It&nbsp;covers all crucial information about how to&nbsp;get started, customize template and components usage.</p>
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
