'use client';

// import { useState } from "react";
// import loginForm from "@/app/ui/login";
import Link from "next/link";

export default function loginPage() {
    return (
        <div className="border-2 border-red-500 w-full h-96">
            <div className="border-1 border-blue-500 flex w-full h-auto">

                <form action="" className="border-1 border-green-600 rounded-md bg-[#733E34] w-3/6 flex flex-col justify-center px-32 py-12">
                    <h1 className="text-light">Connexion</h1>
                    <div className="grid grid-cols-1 gap-y-6">
                        <input type="email" className="form-control w-72 py-2 px-3" id="inputForEmail" />
                        <input type="password" className="form-control w-72" id="" />
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
                        <Link href={"#"}>Vous n&apos;avez pas de compte?! Créer en un ! </Link>
                    </div>

                    <div className="redirectRegister">

                    </div>
                </form>



                
                <div className=""></div>
            </div>
        </div>
    );
}

