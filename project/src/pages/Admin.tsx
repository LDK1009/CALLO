"use client";
import Dashboard from "@/components/admin/Dashboard";
import SignIn from "@/components/admin/SignIn";
import { useState } from "react";

 


const Admin = () => {
    const [isSignIn, setIsSignIn] = useState<boolean>(false);

    return (
        <>
        {isSignIn ? <Dashboard/> : <SignIn setIsSignIn={setIsSignIn} />}        
        </>
    );
};

export default Admin;