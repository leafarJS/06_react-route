import { useNavigate, Link, Outlet } from "react-router-dom";

const PageDashBord = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <Outlet />
      <h1>Dashbord</h1>
      <button onClick={handleClick}>Logout</button>
      <br></br> <br></br>
      <Link to="welcome">Say Welcome</Link>
      {/* para marcar donde van las sub rutas */}
      <br></br> <br></br>
      <Link to="goodbye">Say GoodBye</Link>
    </div>
  );
};

export default PageDashBord;
