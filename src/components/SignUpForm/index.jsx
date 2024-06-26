import React, { Component } from "react";
import { Link } from "react-router-dom";
import Style from "./styles.module.css";
import axios from "axios";
export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
      Phonenumber: "",
      Name: "",
      Error: "",
    };
  }

  handelChange = (key, value) => {
    this.setState({ [key]: value });
  };

  handelClick = () => {
    var Email = this.state.Email;
    var Password = this.state.Password;
    var Phonenumber = this.state.Phonenumber;
    var Name = this.state.Name;
    console.log(Name);

    var checkEmail = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (
      Email.length === 0 ||
      Password.length === 0 ||
      Phonenumber.length === 0 ||
      Name.length === 0
    ) {
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
        Name: Name,
        Phonenumber: Phonenumber,
      };
      console.log(Data);
      axios
        .post("http://localhost/backend/signupweb.php", Data)
        .then((response) => {
          console.log(response.data);
          this.setState({ Error: response.data }); // If data is in JSON => Display alert msg
          if (response.data.Message == "Complete") {
            console.log("true");
            this.props.navigate("/signIn")
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
            Get started with a <span className={Style.titleSpan}>patient</span>{" "}
            account
          </p>
          <div className={Style.column}>
            <label className={Style.inputLabel} htmlFor="inputName">
              Name
            </label>
            <input
              className={Style.inputContent}
              value={this.state.name}
              id="inputName"
              placeholder="Your Full Name"
              onChange={(e) => this.handelChange("Name", e.target.value)}
            />
          </div>
          <div className={Style.column}>
            <label className={Style.inputLabel} htmlFor="inputEmail">
              Email
            </label>
            <input
              className={Style.inputContent}
              value={this.state.email}
              id="inputEmail"
              type="email"
              placeholder="Your Email Address"
              onChange={(e) => this.handelChange("Email", e.target.value)}
            />
          </div>
          <div className={Style.column}>
            <label className={Style.inputLabel} htmlFor="inputPhone">
              phone
            </label>
            <input
              className={Style.inputContent}
              value={this.state.phone}
              id="inputPhone"
              placeholder="Your Phone number"
              onChange={(e) => this.handelChange("Phonenumber", e.target.value)}
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
              placeholder="Your Password"
              onChange={(e) => this.handelChange("Password", e.target.value)}
            />
          </div>
          <div className={Style.rowInput}>
            <label className={Style.inputLabel} htmlFor="terms">
              {this.state.Error}
            </label>
          </div>
          <button className={Style.btn} onClick={this.handelClick}>
            Register
          </button>
          <div className={Style.moveTo}>
            <span>Already have an account?</span>
            <Link className={Style.link} to="/signIn">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
