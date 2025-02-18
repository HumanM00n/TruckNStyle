import { notFound } from "next/navigation";
import { headers } from 'next/headers';

export default function NotFound() {
    return (
        <div className="not-found">
            <h2>404 erreur || Test</h2>
            <p>Cette page est introuvable</p>
        </div>
    )
}