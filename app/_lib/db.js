import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'XVsikn92',
    database: 'truckn_style_bdd',
    port: 3308,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_HOST,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });


export default pool;