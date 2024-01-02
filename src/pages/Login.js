import React from "react";
import { Form, Link, redirect} from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import SubmitBtn from "../components/SubmitBtn";
import FormInput from "../components/FormInput";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    // console.log(data);
    try {
      const response = await customFetch.post("/auth/login", data);
      //   console.log("Login Response:", response);
      const headers = {
        Authorization: `Bearer ${response.data.access_token}`,
      };
      const result = await customFetch.get("/auth/profile", { headers });
      // console.log(result);

      store.dispatch(
        loginUser({
          user: result.data,
          accessToken: response.data.access_token,
        })
      );
      return redirect("/");
    } catch (error) {
      const errorMessage = "please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {

  return (
    <section className="loginHeader">
      <Form method="post" className="formcontrol">
      <br /><br />  
        <h1 className="font-bold	text-5xl">Login</h1>
        <br /><br /><br />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <br />
        <div className="btn btn-primary">
          <SubmitBtn text="login" />
        </div>
        <br /> <br />
        <p className="">
          Not a member yet?{" "}
          <Link
            to="/signup"
            className="btn btn-error"
            style={{ color: "white" }}
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
