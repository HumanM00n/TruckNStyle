import React, { Component } from "react";
import Link from "next/link";


export default function Header() {
    return (
        <header className=" bg">
            <div className="containerNav ">
                <div className="containerLogo"></div>
                <div className="containerNavLinks"></div>
                <div className="containerIcon"></div>
            </div>
        </header>
    );
}