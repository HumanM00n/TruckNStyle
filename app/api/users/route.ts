import { NextResponse } from "next/server";
import pool from "@/app/_lib/db";
import bcrypt from 'bcryptjs'; 

//Création d'un utilisateur
export async function POST(req: Request) {
    const { lastName, firstName, email, password, birthdate, phone_number, department, city, user_type, create_at } = await req.json();

    try {
        // Vérifie si l'email existe déjà
        const existingUser = await pool.query('SELECT * FROM tns_users WHERE user_email = ?', [email]);
        if (existingUser.length > 0) {
            return NextResponse.json({ message: 'Email déjà utilisé' }, { status: 400 });
        }

        // Hashage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Création de l'utilisateur
        const createUser = await pool.query(
            'INSERT INTO tns_users (user_lastname, user_firstname, user_email, user_password, user_birthdate, user_phone_number, user_department, user_city, user_type, create_at) VALUES (?,?,?,?,?,?,?,?,?,?)',
            [lastName, firstName, email, hashedPassword, birthdate, phone_number, department, city, user_type, create_at]
        );

        return NextResponse.json({ message: 'Utilisateur créé avec succès', id: createUser });
    } catch (error) {
        console.error(error); // Affiche l'erreur dans la console
        return NextResponse.json({ message: 'Problème lors de la création de l\'utilisateur' }, { status: 500 });
    }
}
