import { useNavigate } from "react-router-dom";
// import Button from "./ui/Button";
import ReferIcon from "../icons/refer.svg";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🔑 Remove JWT token
    localStorage.removeItem("token");
    localStorage.removeItem("username");


    // 🔄 Redirect to login page
    navigate("/");
  };

  return (

    <>
    <div className="btn text-lg "><button onClick={handleLogout}>Logout</button></div>
    
    </>
    // <Button
    //   variant="primary"
    //   size="lg"
    //   title="Logout"
    //   onClick={handleLogout}
    // />
  );
}

export default LogoutButton;
