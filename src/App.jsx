import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
// import { PrivateRoute } from "./redux/privateRoute";
// import Main from "./pages/main";

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
        <Route path="/register" element={<Register />} />
        {/* <Route
          path="/main"
          element={<PrivateRoute redirectTo="/" component={<Main />} />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
