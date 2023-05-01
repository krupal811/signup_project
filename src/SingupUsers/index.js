import { useEffect, useState } from "react";
import "./style.css";

const SignUpUsers = () => {
  const [signUpInfo, setSignUpInfo] = useState([]);

  useEffect(() => {
    const storedSignUpValue = JSON.parse(localStorage.getItem("signupInfo"));
    if (storedSignUpValue) {
      setSignUpInfo(storedSignUpValue);
    }
  }, []);

  const handleDeleteClick = (value) => {
    var signupInfo = JSON.parse(localStorage.getItem("signupInfo"));
    var itemToRemove = value;
    var updatedSignupInfo = signupInfo.filter(
      (item) => item.email !== itemToRemove.email
    );
    if (localStorage.getItem("signupInfo")) {
      localStorage.setItem("signupInfo", JSON.stringify(updatedSignupInfo));
    }
  };

  return (
    <div className="table-container">
      <table className="signUPInfoTable">
        <thead>
          <tr>
            <th>Index</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Password</th>
            <th>ConfirmPassword</th>
            <th>Action</th>
          </tr>
        </thead>
        {signUpInfo &&
          signUpInfo?.map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.confirmPassword}</td>
                  <td onClick={() => handleDeleteClick(item)}>delete</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default SignUpUsers;
