import React from "react";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { Form, Link, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  data.avatar = "https://ionicframework.com/docs/img/demos/avatar.svg";
  // console.log(data);
  try {
    const response = await customFetch.post("/users", data);
    // console.log(response);
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage = "please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
};

const SignUp = () => {
  return (
    <section className="">
      <Form method="POST" className="">
        <br /><br />
        <h1 className="font-bold	text-5xl">Register</h1>
        <br /><br /><br />
        <FormInput type="text" label="name" name="name" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <br />
        <div className="btn btn-primary">
          <SubmitBtn text="SignUp" />
        </div>
        <br />
        <br />
        <p className="text-center">
          Already a member?
          <Link to="/login" className="btn btn-error">
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default SignUp;
