import { NextResponse } from "next/server";
import pool from "@/app/_lib/db";

// Récupération de toutes les réservations
export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("userId");

        let query = "SELECT id_reservation, id_haircut, reservation_datetime, reservation_price_haircut, id_hairdresser FROM tns_reservation";
        let values: any[] = [];

        if (userId) {
            query += " WHERE id_hairdresser = ?";
            values.push(userId);
        }

        const [reservations] = await pool.query(query, values);
        return NextResponse.json(reservations);
    } catch (error) {
        console.error("Erreur lors de la récupération des réservations :", error);
        return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
    }
}

// Création d'une réservation
export async function POST(req: Request) {
    try {
        const {
            id_haircut,
            reservation_datetime,
            reservation_duration_haircut,
            reservation_price_haircut,
            id_hairdresser
        } = await req.json();

        if (
            !id_haircut || !reservation_datetime || !reservation_duration_haircut ||
            !reservation_price_haircut || !id_hairdresser
        ) {
            return NextResponse.json({ message: "Données invalides ou incomplètes" }, { status: 400 });
        }

        const query = `
            INSERT INTO tns_reservation 
            (id_haircut, reservation_datetime, reservation_duration_haircut, reservation_price_haircut, id_hairdresser) 
            VALUES (?, ?, ?, ?, ?)
        `;

        const [result] = await pool.query(query, [
            id_haircut,
            reservation_datetime,
            reservation_duration_haircut,
            reservation_price_haircut,
            id_hairdresser
        ]);

        return NextResponse.json({ message: "Réservation créée", id: (result as any).insertId });
    } catch (error) {
        console.error("Erreur lors de la création de la réservation :", error);
        return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
    }
}

//  Mise à jour d'une réservation
export async function PUT(req: Request) {
    try {
        const { id_reservation, reservation_datetime, reservation_duration_haircut, reservation_price_haircut } = await req.json();

        if (!id_reservation) {
            return NextResponse.json({ message: "ID de réservation requis" }, { status: 400 });
        }

        const checkQuery = "SELECT id_reservation FROM tns_reservation WHERE id_reservation = ?";
        const [existingReservations] = await pool.query(checkQuery, [id_reservation]);

        if (existingReservations.length === 0) {
            return NextResponse.json({ message: "Réservation introuvable" }, { status: 404 });
        }

        const query = `
            UPDATE tns_reservation
            SET reservation_datetime = COALESCE(?, reservation_datetime),
                reservation_duration_haircut = COALESCE(?, reservation_duration_haircut),
                reservation_price_haircut = COALESCE(?, reservation_price_haircut)
            WHERE id_reservation = ?
        `;

        await pool.query(query, [reservation_datetime, reservation_duration_haircut, reservation_price_haircut, id_reservation]);

        return NextResponse.json({ message: "Réservation mise à jour avec succès" });
    } catch (error) {
        console.error("Erreur lors de la mise à jour de la réservation :", error);
        return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
    }
}

// Suppression d'une réservation
export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id_reservation = parseInt(searchParams.get("id") || "", 10);

        

        const checkQuery = "SELECT id_reservation FROM tns_reservation WHERE id_reservation = ?";
        const [existingReservations] = await pool.query(checkQuery, [id_reservation]);

        if (existingReservations.length === 0) {
            return NextResponse.json({ message: "Réservation introuvable" }, { status: 404 });
        }

        const deleteQuery = "DELETE FROM tns_reservation WHERE id_reservation = ?";
        await pool.query(deleteQuery, [id_reservation]);

        return NextResponse.json({ message: "Réservation supprimée avec succès" });
    } catch (error) {
        console.error("Erreur lors de la suppression de la réservation :", error);
        return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
    }
}
