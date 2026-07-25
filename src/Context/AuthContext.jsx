import { createContext, useEffect } from "react"
import { useState } from "react";

export const AuthContext = createContext();

 export const AuthProvider = ({children}) => {
    const[ currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (user) {
    setCurrentUser(user);
  }
}, []);
   
    const registerUser=(data)=>{
        const users = JSON.parse(localStorage.getItem("registeredUsers"))||[]

        const existingUser = users.find((user) =>user.email === data.email);
        
        if(existingUser){
           return{success:false,
           message:"User already exist",
           }
        }
        const newUser = {
        id: crypto.randomUUID(),
        name: data.name,
        email: data.email,
        password: data.password,
    };

    users.push(newUser);

    localStorage.setItem(
        "registeredUsers",
        JSON.stringify(users)
    );

    return {
        success: true,
        message: "Registration Successful"
    };
 };

 const login = (data)=>{
    const users = JSON.parse(localStorage.getItem("registeredUsers")) ||[]
    const existing = users.find((user) =>{
      return ( user.email === data.email && user.password === data.password)
    });
    if(!existing){
        return{
            success:false,
            message:"Invalid credentials",
        };
    }
    setCurrentUser(existing);

    localStorage.setItem("currentUser", JSON.stringify(existing));
   
    return {
        success: true,
        message: "Login Successful",
    };
 };

   const logout = () => {
  setCurrentUser(null);
  localStorage.removeItem("currentUser");
};
    return (
        <AuthContext.Provider value={{currentUser, registerUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
 };

