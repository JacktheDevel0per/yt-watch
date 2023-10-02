import { Link } from "react-router-dom";
import TitleBar from "../components/title/NewTitleBar";
import { Outlet } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <TitleBar />
      <Outlet />
    </>
  );
}

export default LandingPage;
