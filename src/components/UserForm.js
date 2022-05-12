import React, { useEffect, useState } from "react";
import Table from "./Table";
import "./UserForm.css";

function UserForm() {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [getUser, setGetUser] = useState();
  const [myUser, setMyUser] = useState();
  const userObj = {
    firstName: firstname,
    lastName: lastname,
    email: email,
    phone: phone,
    id: Math.floor(Math.random() * 100 + 1),
  };

  const checkInput = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setPhone(onlyDigits);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userObj", JSON.stringify(userObj));
    setGetUser(localStorage.getItem("userObj"));
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };
  useEffect(() => {
    if (getUser) {
      setMyUser(JSON.parse(getUser));
    }
  }, [getUser]);

  const editHandler = (userId) => {
    if (userId) {
      setFirstName(myUser.firstName);
      setLastName(myUser.lastName);
      setEmail(myUser.email);
      setPhone(myUser.phone);
    }
  };
  function deleteHandler() {
    if (getUser) {
      localStorage.removeItem("userObj");
      setMyUser();
    }
  }

  return (
    <>
      <div className="login-page" onSubmit={handleSubmit}>
        <div className="form">
          <form className="login-form">
            <input
              type="text"
              placeholder="First Name"
              autoComplete="off"
              value={firstname}
              id="firstname"
              name="firstname"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              autoComplete="off"
              value={lastname}
              id="lastname"
              name="lastname"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              autoComplete="off"
              value={email}
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              maxLength="10"
              autoComplete="off"
              value={phone}
              id="phone"
              name="phone"
              required
              onChange={(e) => checkInput(e)}
            />
           
            <button
              type="submit"
              disabled={!firstname || !lastname || !email || !phone}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Table
        hasEntry={myUser && userObj}
        userFirstName={myUser?.firstName}
        userLastName={myUser?.lastName}
        userEmail={myUser?.email}
        userPhone={myUser?.phone}
        deleteHandler={deleteHandler}
        editHandler={() => editHandler(myUser.id)}
      />
    </>
  );
}
export default UserForm;
