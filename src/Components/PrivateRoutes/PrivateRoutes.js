import { Route, Routes } from "react-router-dom";
import Developers from "../Pages/Developers";
import Protected from "./Protected";
import Posts from "../Dashboard/Posts";
import Experience from "../Dashboard/Experience";
import Education from "../Dashboard/Education";
import Profile from "../Dashboard/Profile";
import Dashboard from "../Dashboard/Dashboard";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/dashboard"
        element={<Protected Component={<Dashboard />} />}
      />
      <Route exact path="/developers" element={<Developers />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/experience" element={<Experience />} />
      <Route exact path="/education" element={<Education />} />
      <Route exact path="/profile" element={<Profile />} />
    </Routes>
  );
};
export default PrivateRoutes;
