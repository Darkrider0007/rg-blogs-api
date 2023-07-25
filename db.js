// import mysql from "mysql"

// export const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'PASSWORD@Rohan#2002',
//     database: 'blog'
// })

import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
const db = mysql.createConnection(process.env.DATABASE_URL);
db.connect((err) => {
  if (err) {
    console.error('Error connecting to PlanetScale:', err);
    return;
  }
  console.log('Connected to PlanetScale!');
});

export {db};
