# Gaming-Dapp
Trial
=======
# GameDapp: A Decentralized Gaming Platform

## Description
GameDapp is a decentralized gaming platform built on Hedera that integrates with RainbowKit for wallet management and Discord for user authentication. The platform allows users to play skill-based games, such as Armor Alley, while storing game scores and player information securely on the blockchain. This repository includes the frontend, backend, and smart contracts required to run the platform.

## Features
- **User Authentication:** Login and register using Discord.
- **Wallet Integration:** Connect and manage wallets using RainbowKit.
- **Game Integration:** Play Armor Alley and other games directly from the platform.
- **Score Tracking:** Smart contract to store game scores, including when the game was played, start time, end time, and the score.

## Setup Instructions

### Prerequisites
- Node.js (>= 14.x)
- npm or yarn
- MongoDB
- ffmpeg (for building game assets)

### Step 1: Clone the Repository
```sh
git clone https://github.com/yourusername/GameDapp.git
cd GameDapp
```

### Step 2: Setup Backend
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start MongoDB (if not already running):
   ```sh
   mongod
   ```

4. Start the backend server:
   ```sh
   node server.js
   ```

### Step 3: Setup Frontend
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the frontend server:
   ```sh
   npm run dev
   ```

### Step 4: Setup Game
1. Navigate to the Armor Alley game directory:
   ```sh
   cd ../ArmorAlley
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Install `ffmpeg` for building audio assets:
   ```sh
   sudo apt-get install ffmpeg
   ```

4. Build the game assets:
   ```sh
   gulp
   ```

5. Start the game server:
   ```sh
   npx http-server
   ```

6. Open your browser and navigate to:
   ```sh
   http://localhost:8080
   ```

### Step 5: Setup Discord Authentication
1. Create a Discord application at [Discord Developer Portal](https://discord.com/developers/applications).
2. Add a redirect URI in your Discord application settings.
   ```

### Smart Contract Deployment
1. Ensure you have Hardhat installed:
   ```sh
   npm install --save-dev hardhat
   ```

2. Compile and deploy the smart contract:
   ```sh
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network localhost
   ```

## Known Issues and Troubleshooting

1. **Installation Errors**
   - Ensure you have the correct versions of Node.js and npm installed.
   - Run `npm install` in each project directory (`backend`, `frontend`, `ArmorAlley`).

2. **MongoDB Connection**
   - Ensure MongoDB is running. If not, start it using `mongod`.
   - Check your MongoDB URI in `server.js` if you have a custom setup.

3. **Gulp Build Errors**
   - If you encounter errors related to `ffmpeg`, ensure `ffmpeg` is installed and available in your system's PATH.
   - Install `gulp-cli` globally if not found: `npm install -g gulp-cli`.

4. **Module Not Found**
   - Ensure all dependencies are installed by running `npm install` in each directory.
   - If you see `MODULE_NOT_FOUND` errors, delete `node_modules` and `package-lock.json` and run `npm install` again.

5. **CORS Issues**
   - Ensure your backend server allows CORS requests from the frontend server. Modify the backend to include CORS headers if necessary.

6. **Discord Authentication**
   - Ensure your Discord application is set up correctly with the appropriate redirect URI and client credentials.

### Dependencies
- **Backend:**
  - `express`: Web framework for Node.js
  - `mongoose`: MongoDB ODM for Node.js
  - `body-parser`: Middleware to parse request bodies
  

- **Frontend:**
  - `react`: JavaScript library for building user interfaces
  - `@rainbow-me/rainbowkit`: Wallet integration
  - `wagmi`: React hooks for Ethereum
  - `@tanstack/react-query`: Data fetching and caching

- **Game:**
  - `gulp`: Task runner for building assets
  - `http-server`: Simple static HTTP server
  - `ffmpeg`: Tool for handling multimedia data



