
const { createClient } = require("redis");

const redisClient = createClient({
  url: "redis://default:secret@localhost:6379", // Default Redis URL
});

redisClient.on("error", (err) => console.error("Redis Error:", err));

(async () => {
  try {
    await redisClient.connect();
    // await redisClient.auth("yourpassword"); // Manually authenticate
    console.log("✅ Redis connected successfully!");
  } catch (err) {
    console.error("❌ Redis connection error:", err);
  }
})();

module.exports = redisClient;
