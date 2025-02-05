'use client';

import { useState } from "react";
import Link from "next/link";

export default function loginPage() {
    return (
        <div className="border-2 border-red-500 w-full max-h-full h-[715px]">
            <div className="border-1 border-blue-500 flex w-full">

                <div className="border-1 border-green-600  w-3/6 flex flex-col justify-center ">
                    <form action="" className="border-1 border-pink-200 bg-[#733E34] py-12 rounded-md px-8">
                        <h1 className="text-light">Connexion</h1>
                        <div className="grid grid-cols-1 gap-y-6">

                            <input type="email" className="form-control w-72 
                            placeholder-[#8C5744] placeholder-opacity-70 focus:outline-none focus:ring-4 focus:ring-[#FBFBFB] 
                            py-2.5 px-4" id="inputForEmail" placeholder="Email" />
                            <input type="password" className="form-control w-72 py-2.5 px-4 placeholder-[#8C5744] placeholder-opacity-70" id="inputForPaswword" placeholder="Mot de passe" />
                        </div>


                        <div className="">
                            <Link href={""}>J&apos;ai oublié mon mot de passe </Link>
                        </div>

                        <div className="btnSubmit">
                            <button type="button" className="btn btn-outline-light">Se connecter</button>
                        </div>


                        <div className="hr">
                            <hr />
                        </div>

                        <div className="">
                            <Link href={"#"}>Vous n&apos;avez pas de compte ? Créer en un ! </Link>
                        </div>

                        <div className="redirectRegister">

                        </div>
                    </form>
                </div>



                <div className=""></div>
            </div>
        </div>
    );
}

