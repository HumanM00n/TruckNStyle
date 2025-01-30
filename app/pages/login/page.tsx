export default function loginPage() {
    return (
        
        <form action="" className="flex justify-center border-2 border-red-50 h-auto w-auto">
            <div className="containerForm block">
                <label htmlFor="inputEmail" className="text-white">Adresse email</label>
                <input type="email" name="inputEmail" id="inputEmail" placeholder="Email" className="mr-4"/>

                <label htmlFor="inputPassword" className="text-white">Mot de passe</label>
                <input type="password" name="inputPassword" id="inputPassword" />
            </div>

        </form>

    );
}

