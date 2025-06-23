const express = require("express");
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

// Auth Routes
router.post("/register", registerUser);   // Register User
router.post("/login", loginUser);         // Login User
router.get("/profile", protect, getUserProfile);  // Get User Profile
router.put("/profile", protect, updateUserProfile); // Update Profile

router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  // Use local backend URL in development, deployed in production
  const isLocal = req.headers.origin && req.headers.origin.includes('localhost');
  const base = isLocal ? "http://localhost:8000" : "https://task-manager-g01e.onrender.com";
  const imageUrl = `${base}/uploads/${req.file.filename}`;
  res.status(200).json({ imageUrl });
});

module.exports = router;
