import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./redux/privateRoute";
import { RestrictedRoute } from "./redux/restrikeRoute";
import { lazy } from "react";
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));
const Main = lazy(() => import("./pages/main"));

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/main" component={<Register />} />
          }
        />
        <Route
          path="/main"
          element={<PrivateRoute redirectTo="/" component={<Main />} />}
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
