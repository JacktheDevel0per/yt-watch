import { Link } from "react-router-dom";
import TitleBar from "../components/title/NewTitleBar";
import { Outlet } from "react-router-dom";

function WrapperPage() {
  return (
    <>
      <TitleBar />
      <div>This is a test line that is a part of the main page</div>
      <Outlet />
    </>
  );
}

export default WrapperPage;
