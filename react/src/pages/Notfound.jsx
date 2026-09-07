import { useNavigate } from "react-router-dom";
import "./Notfound.css";

const NotFound = () => {
  const nav = useNavigate();
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    <button onClick={()=>{
      nav("/")
    }}>Back to Home Page</button>
    </div>
  );
};

export default NotFound;