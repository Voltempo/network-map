# Voltempo charging network live map
With our interactive map, you simply type in a place name or postcode and you will find out where all the HGV EV charging points are across the UK network.

Live map visualization of EV and HGV charging infrastructure, powered by Voltempo’s advanced data platform.


<img width="646" height="392" alt="Screenshot 2025-07-30 at 12 52 11" src="https://github.com/user-attachments/assets/db0fc6b3-65bd-4013-b612-0356e084d538" />



🚀 Overview
This project provides a real-time interactive map of EV (Electric Vehicle) and HGV (Heavy Goods Vehicle) charging stations across the UK (or other regions as applicable). Designed to support fleet operators, logistics managers, and EV drivers, the map integrates live data streams and user-friendly visualization tools.

🔗 Live Demo: https://network.voltempo.com/

🗺️ Features
Real-time display of charging station availability

EV and HGV-specific charger filtering

Map clustering for high-density areas

Search and navigation tools

API integration with live charging data (e.g., Zap-Map, OpenChargeMap, Voltempo API)

📦 Tech Stack
Frontend: Angular, Google maps

Backend (optional): Node.js, Express, WebSocket for real-time updates

Data Sources: Voltempo APIs, Google maps, custom integrations

Hosting: AWS 

🛠️ Installation
bash
Copy
Edit
git clone https://github.com/voltempo/
cd 
npm install
npm start
Environment variables (create a .env file):


📁 Project Structure
bash
Copy
Edit
├── public/                # Static assets
├── src/
│   ├── components/        # React components
│   ├── services/          # API integrations
│   ├── utils/             # Helper functions
│   └── App.js             # Main app entry point
├── .env
└── README.md
🧪 Development Tips
Use npm run lint to check code quality

Consider running mock APIs locally during development

Ensure proper google maps token usage to avoid quota overruns

✅ To Do
 Add user route planning for EVs/HGVs

 Improve mobile responsiveness

 Implement offline map caching

 Add multi-language support

📄 License
MIT License © 2025 Voltempo Ltd.

🤝 Contributing
We welcome contributions! Please open an issue or submit a pull request. See CONTRIBUTING.md for details.
