import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import pool from "@/app/_lib/db";
import bcrypt from "bcryptjs";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Adresse mail", type: "email" },
                password: { label: "Mot de passe", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials || {};
                const [user] = await pool.query('SELECT * FROM tns_users WHERE user_email = ?', [email]);

                if (user && bcrypt.compare(password, user.user_password)) {
                    return {
                        id: user.id_users,
                        email: user.user_email,
                        name: `${user.user_firstname} ${user.user_lastname}`,
                    };
                }
                return null; // Retourne null si l'utilisateur n'existe pas ou si le mot de passe est incorrect
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.id = user.id;
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            return session;
        },
    },
});
