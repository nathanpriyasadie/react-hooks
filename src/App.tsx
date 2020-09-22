import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login } from "./pages";
import { TaskProvider, ThemeProvider } from "./context";
import { ProtectedRoute } from "./components/common/ProtectedRoute";

export default function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Router>
          <Switch>
            <ProtectedRoute path="/home" component={Home} exact />
            <Route path="/" component={Login} />
          </Switch>
        </Router>
      </TaskProvider>
    </ThemeProvider>
  );
}
