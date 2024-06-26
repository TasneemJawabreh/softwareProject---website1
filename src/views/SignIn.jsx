import React, { Component } from "react";
import { useNavigate } from "react-router";
import LeftContent from "../components/LeftContent";
import SignInForm from "../components/SignInForm";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex" }}>
      <LeftContent />
      <SignInForm navigate={navigate} />
    </div>
  );
};

export default SignIn;
