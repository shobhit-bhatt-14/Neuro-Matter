import { useHistory } from "react-router-dom";

import "../styles/SignUp.css";
import pic from "../images/login.jpg";

const SignUp = () => {
  const history = useHistory();
  const submitHandler = () => {
    history.push("/main");
  };

  return (
    <div className="SignUp">
      <form onSubmit={submitHandler}>
        <textarea
          name="name"
          placeholder="Enter your name ..."
          contentEditable="true"
          required
        ></textarea>
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
        <textarea
          name="password"
          placeholder="Confirm your password ..."
          contentEditable="true"
          required
        ></textarea>
        <button type="submit">Sign Up</button>
      </form>
      <img src={pic} alt="login" />
    </div>
  );
};

export default SignUp;
