import React from "react";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
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
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="">
      <Form method="post" className="">
        <h4 className="">Login</h4>
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="btn btn-primary">
          <SubmitBtn text="login" />
        </div>

        <p className="">
          Not a member yet?{" "}
          <Link to="/signup" className="">
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
