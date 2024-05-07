import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Registration() {
  const [inputType, setInputType] = useState("password");
  const changeIInputTypeHandler = () => {
    if (inputType == "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  return (
    <section className="login">
      <div className="container">
        <div className="login__wrapper">
          <div className="login__welcome login__welcome-regist">
            <h2 className="login__title title">Xoş gəldiniz!</h2>
            <form action="">
              <div className="login__mob">
                <input
                  type="tel"
                  required
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="phone"
                  placeholder="Mobil nömrə"
                />
              </div>
              <div className="login__password">
                <input type={inputType} placeholder="Şifrə" />
                <div
                  onClick={() => changeIInputTypeHandler()}
                  className="login__password-icon"
                >
                  <i className="fa-solid fa-eye"></i>
                </div>
              </div>
              <div className="login__password login__password-repeat">
                <input type={inputType} placeholder="Yenidən Şifrə" />
                <div
                  onClick={() => changeIInputTypeHandler()}
                  className="login__password-icon"
                >
                  <i className="fa-solid fa-eye"></i>
                </div>
              </div>
              {/* <div className="login__accept">
                <input type="checkbox" name="registr" id="registr" />

                <label htmlFor="registr">
                  Taste it <span>Qaydaları və Şərtləri</span> ilə tanış oldum və
                  qəbul edirəm.
                </label>
              </div> */}
              <div className="login__btn">
                <p className="btn-sign" type="submit">
                  Qeydiyyatdan keç
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
