import express from "express";
const router = express.Router();

router.post("/login/", async (request, response) => {
    try {
        const { email, password } = request.body;
        if (!email || !password) {
            return response.status(400).send({ message: "Email and password are required." });
        }
        // Authenticate user
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return response.status(401).send({ message: "Invalid email or password." });
        }
        // Generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return response.status(200).send({ token });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.post("/register/", async (request, response) => {
    try {
        const { name, email, password } = request.body;
        if (!name || !email || !password) {
            return response.status(400).send({ message: "All fields are required." });
        }
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return response.status(409).send({ message: "User already exists." });
        }
        // Create new user
        const newUser = new User({ name, email, password });
        await newUser.save();
        return response.status(201).send(newUser);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
