'use client';
import RootLayout from "@/app/layout";
import { Component } from "react";
import { useState } from "react";

export default function loginForm() {
    return (
        <div className="border-1 border-red-500 w-60 h-72 mt-10">
            <div className="">

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

