require("dotenv").config();
const bcrypt = require("bcrypt");
const { sequelize, User } = require("../models");

(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected for seeding");

    const passwordHash = await bcrypt.hash("admin123", 10);

    await User.findOrCreate({
      where: { email: "admin@mail.com" },
      defaults: {
        passwordHash,
        role: "ADMIN",
      },
    });

    console.log("✅ Admin user ready");
    process.exit();
  } catch (err) {
    console.error("❌ SEED ERROR:", err);
    process.exit(1);
  }
})();
