import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { COOKIE_KEY_LOGIN } from "../constants";
import { setCookie } from "../utils";

interface LoginPageProps {}

interface LoginError {
  username?: string;
  password?: string;
}

const user = {
  username: "a",
  password: "a",
};

const LoginPage: React.FC<LoginPageProps> = () => {
  const history = useHistory();
  return (
    <>
      <h1>Login Page</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const error: LoginError = {};
          if (!values.username) error.username = "required";
          if (!values.password) error.password = "required";
          return error;
        }}
        onSubmit={(values) => {
          if (
            values.username === user.username &&
            values.password === user.password
          ) {
            setCookie(COOKIE_KEY_LOGIN, "true");
            history.push("/home");
          } else {
            console.log("failed");
          }
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <Field type="text" name="username" placeholder="username" />
              <ErrorMessage name="username" />
              <Field type="password" name="password" placeholder="password" />
              <ErrorMessage name="password" />
              <button disabled={isSubmitting}>Submit</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginPage;
