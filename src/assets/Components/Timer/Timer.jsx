import React, { Component } from 'react';
import './Timer.css'

class CountdownTimer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            remainingTime: this.getRemainingTime(),
        };

        this.timerRef = React.createRef();
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                remainingTime: this.getRemainingTime(),
            });
        }, 1000);

        // const options = {
        //     root: document.querySelector("#scrollArea"),
        //     rootMargin: "0px",
        //     threshold: 1.0,
        // };

        // const observer = new IntersectionObserver((entries, observer) => {
        //     entries.forEach((entry) => {
        //         if (entry.isIntersecting) {
        //             entry.target.classList.remove('sqIN');
        //         } else {
        //             entry.target.classList.add('sqIN');
        //         }
        //     });
        // }, options);

        // observer.observe(this.timerRef.current);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    getRemainingTime() {
        const deadline = new Date(this.props.deadline).getTime();
        const now = new Date().getTime();

        const remainingMillis = deadline - now;
        const remainingSeconds = Math.floor(remainingMillis / 1000);
        const remainingMinutes = Math.floor(remainingSeconds / 60);
        const remainingHours = Math.floor(remainingMinutes / 60);

        return {
            hours: remainingHours,
            minutes: remainingMinutes % 60,
            seconds: remainingSeconds % 60,
        };
    }

    render() {
        const { hours, minutes, seconds } = this.state.remainingTime;

        return (
            <div className={`timer ${this.props.className}`} ref={this.timerRef} >
                <h1 className='center' > <span id={this.props.tID}>{this.props.timerTitle}</span></h1>
                <p className='center' ><span id={this.props.pID}>{hours}h {minutes}m {seconds}s</span></p>
            </div>
        );
    }
}

export default CountdownTimer;
