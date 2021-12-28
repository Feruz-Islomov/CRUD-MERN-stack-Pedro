import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <div>
      {/* return route */}
      <Route
        {...rest}
        render={(props) => {
          if (auth) return <Component {...props} />;
          if (!auth)
            return (
              <Redirect to={{ path: "/", state: { from: props.location } }} />
            );
        }}
      />
    </div>
  );
};

export default ProtectedRoute;
