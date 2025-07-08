const adminRegister = async (request, response) => {
    try {
        const { FullName, Email, Password } = request.body;
        if (!FullName || !Email || !Password) {
            return response.status(400).send({ message: "All fields are required." });
        }
        // Check if user already exists
        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return response.status(409).send({ message: "User already exists." });
        }
        // Create new user
        const newUser = new User({ FullName, Email, Password, UserType: "Admin" });
        await newUser.save();
        return response.status(201).send(newUser);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}

const adminSignin = async (request, response) => {
    try {
        const { Email, Password } = request.body;
        if (!Email || !Password) {
            return response.status(400).send({ message: "Email and password are required." });
        }
        // Authenticate user
        const user = await User.findOne({ Email });
        if (!user || user.Password !== Password) {
            return response.status(401).send({ message: "Invalid email or password." });
        }
        // Generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return response.status(200).send({ token });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}

export default { adminRegister, adminSignin };