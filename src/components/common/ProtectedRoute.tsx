import React from "react";
import { Redirect, Route } from "react-router-dom";
import { COOKIE_KEY_LOGIN } from "../../constants";
import { getCookie } from "../../utils";

interface ProtectedRouteProps {
  component: React.FC;
  path: string;
  exact: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
  path,
  exact,
}) => {
  return getCookie(COOKIE_KEY_LOGIN) === "true" ? (
    <Route component={component} exact={exact} path={path} />
  ) : (
    <Redirect to="/" />
  );
};
