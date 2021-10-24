import { useHistory } from "react-router-dom";

import "../styles/LogIn.css";
import pic from "../images/login.jpg";

const LogIn = () => {
  const history = useHistory();

  const submitHandler = () => {
    history.push("/main");
  };

  return (
    <div className="LogIn">
      <form onSubmit={submitHandler}>
        <textarea
          name="email"
          placeholder="Enter your email ..."
          contentEditable="true"
          required
        ></textarea>
        <textarea
          name="password"
          placeholder="Enter your password ..."
          contentEditable="true"
          required
        ></textarea>
        <button type="submit">Log In</button>
      </form>
      <img src={pic} alt="login" />
    </div>
  );
};

export default LogIn;
