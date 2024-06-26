import React, { Component } from "react";
import LeftContent from "../components/LeftContent";
import SignUpForm from "../components/SignUpForm";

export default class SignUp extends Component {
  render() {
    return (
      <div style={{display:'flex'}}>
        <LeftContent />
        <SignUpForm/>
      </div>
    );
  }
}
