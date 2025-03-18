import mysql from 'mysql2/promise';

const mysqlpool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'student',
    waitForConnections: true,
    connectionLimit: 10, // Limits the number of connections
    queueLimit: 0
});

export default mysqlpool;
