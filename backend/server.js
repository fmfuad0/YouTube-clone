import {connectDB} from "./src/config/db.js";
import dotenv from "dotenv";
import {app} from "./src/app.js";
dotenv.config();

connectDB()
.then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);})
})
.catch((err) => {
    console.error(err);
})

