import express from "express";
import { pool } from "./db.mjs";

const app = express();
const port = 4000;

app.use(express.json());

// 📍 **** สร้าง API เพื่อใช้ในการเพิ่มข้อมูลหนังเรื่องใหม่ไปที่ Database ตรงนี้ ****

app.post("/movies", async (req, res) => {

	const title =	req.body.title;
	const description = req.body.description;
	const genres = req.body.genres;
	const year = req.body.year;
	const poster = req.body.poster;
	const rating = req.body.rating;

	const result = await pool.query(`
		INSERT INTO movies (title, description, genres, year, poster, rating)
		VALUES ($1, $2, $3, $4, $5, $6)`,
		[title, description, genres, year, poster, rating]);
	

	return res.json({message: "Movie has been created. "});

});

app.listen(port, () => {
	console.log(`🚀 Server is running at ${port}`);
});
