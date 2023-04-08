import React, { Component } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const client = axios.create({
    baseURL: "https://swarna-krishi-api.onrender.com/"
});


function HandleSignIn() {


    const navigate = useNavigate();

    client.post('/register', {
        email: document.getElementById('floatingInput').value,
        password: document.getElementById('floatingPassword').value
    })
        .then(function (response) {
            console.log(response);

            navigate("/Dashboard/");
        })
        .catch(function (error) {
            console.log(error);
        });

    console.log(document.getElementById('floatingInput').value)
}


export class Sign_in extends Component {
    render() {
        return (
            <>
                <div className="modal fade" id="modalSignin" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className={`modal-content text-bg-${this.props.crr_theme} rounded-4 shadow`}>
                            <div className="modal-header p-5 pb-4 border-bottom-0">
                                <h1 className="fw-bold mb-0 fs-2">Sign up for free</h1>
                                <span type="button" className={`material-symbols-outlined text-bg-${this.props.crr_theme}`} data-bs-dismiss="modal" aria-label="Close" fdprocessedid="zpe9cm">
                                    close
                                </span>
                            </div>

                            <div className="modal-body p-5 pt-0">
                                {/* <form className=""> */}
                                <div className="form-floating mb-3">
                                    <input type="email" className={`form-control text-bg-${this.props.crr_theme} rounded-3`} id="floatingInput" placeholder="name@example.com" fdprocessedid="anhvf" />
                                    <label for="floatingInput"> <span className={`text-bg-${this.props.crr_theme}`}>Email address</span></label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className={`form-control text-bg-${this.props.crr_theme} rounded-3`} id="floatingPassword" placeholder="Password" fdprocessedid="ybmdld" />
                                    <label for="floatingPassword"><span className={`text-bg-${this.props.crr_theme}`}>Password</span></label>
                                </div>
                                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" fdprocessedid="alr1yp" onClick={HandleSignIn} >Sign up</button>
                                <small className={`d-block text-center text-bg-${this.props.crr_theme}`}>By clicking Sign up, you agree to the terms of use.</small>
                                <hr className="my-4" />
                                <h2 className="fs-5 text-center fw-bold mb-3">Or use a third-party</h2>
                                <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit" fdprocessedid="oxvik">
                                    <img src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" alt="" className='rounded-circle mx-2' width="25" height="25" srcset="" />
                                    Sign up with Google
                                </button>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Sign_in
