import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import pool from "@/app/_lib/db";
import bcrypt from "bcryptjs";
import { error } from "console";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Mot de passe", type: "password" },
            },

            async authorize(credentials) {
                const { email, password } = credentials || {};
                if (!email || !password) {
                    throw new Error("Les informations de connexion sont manquantes");
                }


                try {
                    const [rows]: any[] = await pool.query("SELECT * FROM tns_users WHERE user_email = ?", [email]);
                    const user = rows[0];

                    if (!user) {
                        throw new Error("Email ou mot de passe incorrecte");
                    }

                    // Verification du mot de passe 
                    const isValidPassword = await bcrypt.compare(password, user.user_password);
                    if (!isValidPassword) {
                        throw new Error('Email ou mot de passe incorrecte');
                    }

                    // Retourne les infos du user sans le password
                    return {
                        id: user.id_users,
                        name: `${user.user_firstname} ${user.user_lastname}`,
                        email: user.user_email,
                        city: user.user_city
                    };

                } catch (error) {
                    console.error("Erreur pendant la connexion", error);
                    throw new Error('Erreur de connexion');
                }
            },
        }),
    ],

    session: {
        strategy: "jwt" as const, // Token JWT pour les sessions
    },

    callbacks: {
        async jwt({ token, user }: { token: any; user?: any }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.city = user.city;
            }
            return token;
        },

        async session({ session, token }: { session: any; token: any }) {
            session.user.id = token.id;
            session.user.city = token.city;
            return session;

        },
    },
};


export default NextAuth(authOptions);
