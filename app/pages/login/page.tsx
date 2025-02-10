'use client';

import { useState } from "react";
import Link from "next/link";

export default function loginPage() {
    return (
        <div className="md:w-full h-[715px] flex items-center justify-center relative bg--noir">
            {/* CONTAINER IMAGE */}
            <div className="hidden lg:w-2/5 md:block h-full relative left-96">
                <img
                    src="/assets/photoTondeuse.jpg"
                    className="w-full h-full object-cover"
                    alt="Photo d'une tondeuse"
                />
            </div>

            {/* FORMULAIRE DE CONNEXION */}
            <div className="shrink-2 absolute left-2/4 transform -translate-x-3/4 bg--form p-12 px-40 rounded-md text-sm shadow-lg w-[600px]">
                <form action="" className="font-montserrat z-10">
                    <h1 className="text-light text-3xl font-[500] font-playfair text-center">Connexion</h1>

                    <div className="grid grid-cols-1 gap-y-6 mt-10">
                        {/* ADRESSE EMAIL */}
                        <input
                            type="email"
                            className="form-control w-72 py-2.5 px-4 placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4"
                            id="inputForEmail"
                            placeholder="Email"
                        />

                        {/* MOT DE PASSE */}
                        <input
                            type="password"
                            className="form-control w-72 py-2.5 px-4 placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4"
                            id="inputForPassword"
                            placeholder="Mot de passe"
                        />
                    </div>

                    <div className="underline underline-offset-1 text-light font-montserrat mt-6">
                        <Link href={""}>J&apos;ai oublié mon mot de passe</Link>
                    </div>

                    <div className="mt-4 flex justify-end">
                        <button type="submit" className="btn btn-outline-light rounded-xs hover:bg-white hover:text-[#733E34]">
                            Se connecter
                        </button>
                    </div>

                    <div className="flex items-center my-10">
                        <hr className="flex-grow border-white" />
                        <span className="mx-4 text-light">OU</span>
                        <hr className="flex-grow border-white" />
                    </div>
 
                    <div className="underline underline-offset-1 text-light font-montserrat mt-6 text-xs">
                        <Link href={"#"}>Vous n&apos;avez pas de compte ? Créez-en un !</Link>
                    </div>

                    <div className="mt-3">
                        <button type="button" className="btn btn-light w-full text-[#8C5744] hover:text-[#8C5744]">
                            Créer un compte
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

