import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "@/app/_lib/db";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        // Vérification de l'existance de l'utilisateur 
        const [users] = await pool.query("SELECT * FROM tns_users WHERE user_email = ?", [email]);


        if ((users as any[]).length === 0) {
            return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 });
        }

        const user = (users as any[])[0];

        // Vérification du mot de passe 
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return NextResponse.json('Le mot de passe est incorrecte', { status: 401 });
        }


        // Vérification de JWT_SECRET
        const secret = process.env.JWT_SECRET;

        // Génération d'un token JWT 
        const genTokenTns = jwt.sign({ userId: user.id, email: user.email }, secret as string, { expiresIn: "1h" });

        return NextResponse.json({ token: genTokenTns }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })        
    }
}