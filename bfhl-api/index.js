import express from "express";
import bfhlRoutes from "./routes/bfhl.js";

const app = express();
app.use(express.json());

app.use("/bfhl", bfhlRoutes);

app.get("/", (req, res) => res.send("BFHL API is up"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

export default app;
