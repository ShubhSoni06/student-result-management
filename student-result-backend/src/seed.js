require("dotenv").config();
const bcrypt = require("bcrypt");
const { sequelize, User } = require("./models");

async function seed() {
    try {
        await sequelize.authenticate();
        console.log("DB connected for seeding");

        const adminHash = await bcrypt.hash("admin123", 10);
        const studentHash = await bcrypt.hash("student123", 10);

        await User.create({
            email: "admin@mail.com",
            passwordHash: adminHash,
            role: "ADMIN",
        });

        await User.create({
            email: "student@mail.com",
            passwordHash: studentHash,
            role: "STUDENT",
        });

        console.log("✅ USERS CREATED");
        process.exit(0);
    } catch (err) {
        console.error("❌ SEED ERROR FULL:", err.original || err);
        process.exit(1);
    }

}

seed();
