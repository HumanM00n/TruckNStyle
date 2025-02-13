import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import pool from "@/app/_lib/db";

export async function POST(req: Request) {
    try {
        console.log("🔹 Requête reçue !");
        const { email, password } = await req.json();
        console.log("🔹 Email reçu :", email, "Password reçu :", password);

        ///DEBUG
        console.log("🔍 Config DB :", {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        

        const [users] = await pool.query("SELECT * FROM tns_users WHERE user_email = ?", [email]);

        console.log("🔹 Résultat de la requête :", users);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((users as any[]).length === 0) {
            console.log("⚠️ Utilisateur introuvable");
            return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 });
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const user = (users as any[])[0];

        console.log("🔹 Utilisateur trouvé :", user);

        // Désactivation de la vérification de mot de passe hashé (comparaison directe)
        if (password !== user.user_password) {
            console.log("⚠️ Mot de passe incorrect");
            return NextResponse.json({ error: "Le mot de passe est incorrect" }, { status: 401 });
        }

        const secret = process.env.JWT_SECRET;
        if (!secret) {
            console.error("❌ JWT_SECRET manquant !");
            return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
        }

        const genTokenTns = jwt.sign(
            { userId: user.id_users, email: user.user_email },
            secret,
            { expiresIn: "1h" }
        );

        console.log("✅ Connexion réussie, token généré :", genTokenTns);
        return NextResponse.json({ token: genTokenTns }, { status: 200 });

    } catch (error) {
        console.error("❌ Erreur serveur :", error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
