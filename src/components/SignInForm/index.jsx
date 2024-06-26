import React, { Component } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Style from "./styles.module.css";
import axios from "axios";
export default class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
      Error: "",
    };
  }

  handelChange = (key, value) => {
    this.setState({ [key]: value });
  };

  handelClick = () => {
    // this.props.navigate("/dashboard") //to admin pages

    // this.props.navigate("/today") to secretary pages 
    // this.props.navigate("/lab") to lab pages 


    var Email = this.state.Email;
    var Password = this.state.Password;

    if (Email == "admine@gmail.com" && Password == "admine123") {
      // console.log("true");
      this.props.navigate("/dashboard")
      // this.props.navigation.navigate("/dashboard");
    }

    var checkEmail = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (Email.length === 0 || Password.length === 0) {
      this.setState({ Error: "error,fill all inputs please" });
    } else if (!checkEmail.test(Email)) {
      this.setState({ Error: "Enter a valid email address" });
    } else if (Password.length < 8) {
      this.setState({ Error: "Minimum 08 characters required!!!" });
    } else if (/[ ]/.test(Password)) {
      this.setState({ Error: "Don't include space in password!!!" });
    } else {
      var Data = {
        Email: Email,
        Password: Password,
      };

      axios
        .post("http://localhost/backend/signinweb.php", Data)
        .then((response) => {
          console.log(response.data);
          this.setState({ Error: response.data }); // If data is in JSON => Display alert msg
          if (response.data == 1) {
            // console.log("true");
            this.props.navigate("/lab")
            // this.props.navigation.navigate("/dashboard");
          }
        })

        .catch((error) => {
          console.log(error.response);
        });
    }
  };
  render() {
    return (
      <div className={Style.form}>
        <div className={Style.container}>
          <div className={Style.row}>
            <img
              className={Style.logoImg}
              src="./assets/images/logo.png"
              alt="logo"
            />
            <span className={Style.logo}>Clinics</span>
          </div>
          <p className={Style.desc}>
            Sign in to your<span className={Style.titleSpan}> patient </span>
            account
          </p>
          <div className={Style.column}>
            <label className={Style.inputLabel} htmlFor="inputEmail">
              Username
            </label>
            <input
              className={Style.inputContent}
              value={this.state.username}
              id="inputEmail"
              type="email"
              placeholder="Enter Username"
              onChange={(e) => this.handelChange("Email", e.target.value)}
            />
          </div>
          <div className={Style.column}>
            <label className={Style.inputLabel} htmlFor="inputPass">
              Password
            </label>
            <input
              className={Style.inputContent}
              value={this.state.password}
              id="inputPass"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => this.handelChange("Password", e.target.value)}
            />
          </div>



          <div className={Style.rowInput}>
            <label className={Style.inputLabel} htmlFor="terms">
              {this.state.Error}
            </label>
          </div>
          <button className={Style.btn} onClick={this.handelClick}>
            Sign in
          </button>
          <div className={Style.moveTo}>
            <span>Don't have an account?</span>
            <Link className={Style.link} to="/">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
