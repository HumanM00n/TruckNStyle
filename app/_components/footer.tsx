'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {

    return (
        <footer className="border-2 border-red-600 w-full h-auto">
            
            {/* Logo */}
            <div className="w-36 border-2">
                <Image 
                src={"/logo/logoTNS-white.png"}
                width={350}
                height={200}
                quality={90}
                alt="Logo de l'application en blanc"
                />
            </div>

            <div className=""></div>

            <div className="">
                <div className=""></div>
                <div className=""></div>
            </div>

        </footer>
    );
}