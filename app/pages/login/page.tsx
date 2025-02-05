'use client';

import { useState } from "react";
import Link from "next/link";

export default function loginPage() {
    return (
        <div className="border-2 border-red-500 w-full max-h-full h-[715px]">
            <div className="border-1 border-blue-500 flex w-full">

                <div className="border-1 border-green-600 w-3/6 flex justify-end">
                    <form action="" className="border-1 border-pink-200 bg-[#733E34] py-12 rounded-md px-8 ">
                        <h1 className="text-light text-3xl font-[500] font-playfair text-center">Connexion</h1>
                        <div className="grid grid-cols-1 gap-y-6 mt-10">

                            <input type="email" className="form-control w-74
                            placeholder-[#8C5744] placeholder-opacity-70 focus:outline-none focus:ring-4 focus:ring-[#FBFBFB] 
                            py-2.5 px-4" id="inputForEmail" placeholder="Email" />
                            <input type="password" className="form-control w-74 py-2.5 px-4 placeholder-[#8C5744] placeholder-opacity-70" id="inputForPaswword" placeholder="Mot de passe" />
                        </div>


                        <div className="underline underline-offset-1 text-light font-montserrat mt-6">
                            <Link href={""}>J&apos;ai oublié mon mot de passe </Link>
                        </div>

                        <div className="mt-4 flex justify-end">
                            <button type="button" className="btn btn-outline-light">Se connecter</button>
                        </div>


                        <div className="flex items-center my-10">
                            <hr className="flex-grow border-white" />
                            <span className="mx-4 text-light">OU</span>
                            <hr className="flex-grow border-white" />
                        </div>



                        <div className="underline underline-offset-1 text-light font-montserrat mt-6">
                            <Link href={"#"}>Vous n&apos;avez pas de compte ? Créer en un ! </Link>
                        </div>

                        <div className="">
                            <button type="button" className="btn btn-outline-light mt-3 w-full">Se connecter</button>
                        </div>
                    </form>
                </div>



                <div className=""></div>
            </div>
        </div>
    );
}

