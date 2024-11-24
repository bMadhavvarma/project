import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";



const App = () => {
 
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      const admin=authData.admin.find((e) => email === e.email && password === e.password)
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
      setUser("admin");
      setLoggedInUserData(admin)
    } 
    else if (authData) {
      const employee=authData.employees.find((e) => email === e.email && password === e.password)
      if(employee){
        localStorage.setItem("loggedInUser",JSON.stringify({role:'employee'}))
        setUser("employee");
        setLoggedInUserData(employee)  
      }
    } else {
      alert("Invalid credentials");
    }
  };
 
 
  

  return (
 <>
 
 {!user ? <Login change={handleLogin}/> : " " }
      {user === "admin" && <AdminDashboard  data={loggedInUserData} changeUser={setUser}/>}
      {user === "employee" && <EmployeeDashboard   data={loggedInUserData} changeUser={setUser}/>}
 </>
     
  );
};

export default App;
