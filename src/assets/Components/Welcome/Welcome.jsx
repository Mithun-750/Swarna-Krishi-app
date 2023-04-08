import React, { Component } from 'react';
import './Welcome.css';
class Welcome extends Component {
    constructor(props) {
        super(props);
        this.scrollRef = React.createRef();
    }

    componentDidMount() {
        const options = {
            root: document.querySelector("#scrollArea"),
            rootMargin: "0px",
            threshold: 1.0,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting == true) {
                    entry.target.classList.add('show');
                    document.getElementById('welcome').classList.remove('blur')
                } else {
                    entry.target.classList.remove('show');
                    document.getElementById('welcome').classList.add('blur')
                }
            });
        }, options);


        observer.observe(this.scrollRef.current);
        const options2 = {
            root: document.querySelector("#scrollArea"),
            rootMargin: "250px 0px 0px 0px",
            threshold: 1.0,
        };
        const observer2 = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting == true) {
                    document.getElementById('logged_nav').classList.add('Notvisible')
                    for (const element of document.getElementsByClassName('App-navlink')) {
                        element.classList.add('Notvisible');
                    }

                } else {
                    document.getElementById('logged_nav').classList.remove('Notvisible')
                    for (const element of document.getElementsByClassName('App-navlink')) {
                        element.classList.remove('Notvisible');
                    }
                }
            });
        }, options2);

        observer2.observe(this.scrollRef.current);

    }

    render() {
        return (
            <>
                <div id="welcome">
                    <div className='ScrollEffect hidden transition text-center' ref={this.scrollRef} onMouseOver={() => {
                        document.getElementById('welcome').classList.add('blur')
                    }} onMouseOut={() => {
                        document.getElementById('welcome').classList.remove('blur')
                    }} >
                        <h1 id="welcomeText">Welcome,</h1>
                        <h1 id="name">{this.props.profile.name}</h1>
                    </div>
                </div>
            </>
        );
    }
}

export default Welcome;
