'use client';

import RootLayout from "@/app/layout";
import { useState } from "react";
import loginForm from "@/app/ui/login";

export default function loginPage() {
    return (
        <div className="">
            <div className="border-1 border-red-500 w-60 h-72 z-0">

                <form action="" className="">
                    <h1>Connexion</h1>
                    <div className="emailForm">
                        <input type="email" className="form-control" id="inputForEmail" />
                    </div>

                    <div className="passwordFrom">
                        <input type="password" className="form-control" id="" />
                    </div>
                </form>



                
                <div className=""></div>
            </div>
        </div>
    );
}

