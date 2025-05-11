#!/bin/bash

# Create directories
mkdir -p controllers models routes middlewares config

# Create controller files
touch controllers/authController.js
touch controllers/userController.js
touch controllers/videoController.js
touch controllers/commentController.js

# Create model files
touch models/User.js
touch models/Video.js
touch models/Comment.js

# Create route files
touch routes/authRoutes.js
touch routes/userRoutes.js
touch routes/videoRoutes.js
touch routes/commentRoutes.js

# Create middleware
touch middlewares/authMiddleware.js

# Create DB config
touch config/db.js

# Create entry file
touch server.js

# Create .env file
touch .env

# Initialize npm project and install packages
npm init -y
npm install express mongoose dotenv bcryptjs jsonwebtoken cors
npm install --save-dev nodemon morgan

echo "✅ Project structure created and dependencies installed."
