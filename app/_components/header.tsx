'use client';

import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Header() {
    return (
        <header className=" w-100 h-36 bg-noir flex justify-center font-montserrat text-base">
            <div className="containerNav w-10/12 h-32 flex flex-row justify-around">

                <div className="containerLogo flex">
                    <Image
                        src="/logo/logoTNS-brown.png"     
                        width={200}
                        height={150}
                        quality={90}
                        alt="Logo du site"
                    />
                </div>

                <div className="containerNavLinks h-20 border border-light rounded-sm flex align-center py-6 mt-5 pr-6 pl-6 gap-16">
                    <Link href="/">Réservations</Link>
                    <Link href="/">À propos</Link>
                    <Link href="/">Contactez-nous</Link>

                </div>

                <div className="containerIcon h-20 w-60 flex justify-center gap-8 mt-5 py-6">
                    <Link href={"/"}>Connexion</Link>
                    <Link href={"/"}>Inscription</Link>
                </div>
            </div>
        </header>
    );
}