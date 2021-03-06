import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useHistory } from 'react-router';
import './otp.css'
import { connect } from "react-redux"

function Otp(props) {
    const [otp, setotp] = useState(null);
    const history = useHistory();

    const phnNumber = props.userValue.username

    const handleChange = (otp) => setotp(otp);
    const handleSubmit = () => {
        if (otp === "1234") {
            alert("Your mobile number successfully verified 🎉🎉. Please continue the signup procedure")
            history.push("/auth/bank-details")
        } else if (!otp || otp.length < 4) {
            alert("OTP is invalid .Please try again")
        } else {
            alert("OTP entered is incorrect please try again")
        }
    }

    console.log(otp)
    return (
        <div className="d-flex justify-content-center align-items-center container">
            <div className="card-1 py-5 px-3 shadow-lg p-3 mb-5 bg-white rounded">
                <h5 className="m-0">Mobile phone verification</h5><span className="mobile-text">Enter the code we just send on your mobile phone <b className="text-info">+91 {phnNumber}</b></span>
                <div className="d-flex flex-row mt-5">
                    <OtpInput
                        value={otp}
                        onChange={handleChange}
                        numInputs={4}
                        hasErrored="true"
                        separator={<span>-</span>}
                    />
                    <br />

                    {/* <input type="text" className="form-control" autofocus=""/><input type="text" className="form-control"/><input type="text" className="form-control"/><input type="text" className="form-control"/> */}
                </div>
                <div>
                    <button onClick={handleSubmit} className="btn btn-lg btn-info btn-block text-uppercase w-100" type="submit">
                        Verify
                    </button>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => ({
    userValue: state.userValue
})

export default connect(mapStateToProps)(Otp)
