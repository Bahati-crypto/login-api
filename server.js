const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        return res.json({
            message: "Login successful"
        });
    }

    res.status(401).json({
        message: "Invalid username or password"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});