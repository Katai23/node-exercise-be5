import express from "express";
import { pool } from "./db.mjs";

const app = express();
const port = 4000;

app.use(express.json());

app.get("/movies", async (req, res) => {


	const result = await pool.query("select * from movies");

	//Respond object and put all data inside of it in JSON style
	return res.json({
		data: result.rows,
	});


});

app.listen(4000, () => {
	console.log(`🚀 Server is running at ${4000}`);
});
