import React from 'react';
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
    return (
        <div>
            <main>
                Auth
                <Outlet />
            </main>
        </div>
    );
};

export default AuthLayout;