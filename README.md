# HireConnect 🚀
### Collaborative Coding & Technical Interview Platform

HireConnect is a full-stack web application that simplifies technical interviews by combining interview management, real-time collaborative coding, video communication, and code execution in one unified platform.

🔗 **Live Demo:** [https://hireconnect-client.onrender.com/](https://hireconnect-client.onrender.com/)  
💻 **GitHub Repository:** [https://github.com/VedantChopde11/HireConnect](https://github.com/VedantChopde11/HireConnect)

---

## ✨ Features

- **Authentication & Authorization:** Secure user authentication with Clerk and protected application routes featuring Just-In-Time (JIT) database synchronization.
- **Role-Based Workflows:** Separate experiences for interviewers and candidates.
- **Interview Management:** Organize and manage live technical interview sessions with room status tracking and 5-second polling.
- **Real-Time Collaborative Coding:** Synchronize code changes between participants inside Monaco Editor with 300ms debouncing and self-event filtering to prevent cursor disruption.
- **HD Video Communication:** Low-latency WebRTC video and audio conferencing powered by Stream's Selective Forwarding Unit (SFU) with adaptive bitrate.
- **Online Code Execution:** Execute code securely across multiple languages (C++, Python, Java, JavaScript) using the **Judge0 CE API** inside containerized Linux sandboxes with real-time compilation diagnostics.
- **REST APIs:** Express 5 backend endpoints for session orchestration, Stream JWT minting, and data persistence.
- **Database Integration:** Scalable document persistence using MongoDB Atlas with Mongoose schema relationships and indexing.
- **Responsive Interface:** Modern, accessible user interface built with React 19, Tailwind CSS, DaisyUI, and resizable layout panels.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React 19, JavaScript, Vite |
| **Styling** | Tailwind CSS, DaisyUI, Lucide React |
| **Code Editor** | Monaco Editor (`@monaco-editor/react`), `react-resizable-panels` |
| **Backend** | Node.js, Express 5 |
| **Database** | MongoDB Atlas, Mongoose ODM |
| **Authentication** | Clerk (`@clerk/clerk-react`, `@clerk/express`) |
| **Real-Time Communication** | Stream.io (WebRTC SFU Video & Chat Event Bus) |
| **Code Execution** | **Judge0 CE API** (Containerized Linux Sandboxes) |
| **Background Workflows** | Inngest (Serverless event-driven sync) |
| **Deployment** | Render (Static Site + Web Service) |

---

## 🏗️ Application Architecture

```text
                   ┌───────────────────────────────────┐
                   │     React 19 Frontend (Vite)      │
                   │  - Monaco Editor  - Stream Video  │
                   └─────────────────┬─────────────────┘
                                     │
                  ┌──────────────────┼──────────────────┐
                  │                  │                  │
             REST API Calls     JWT Bearer        WebRTC & Events
                  │                  │                  │
                  ▼                  ▼                  ▼
          ┌───────────────┐  ┌───────────────┐  ┌────────────────┐
          │ Express 5 /   │  │ Clerk Auth    │  │ Stream.io Cloud│
          │ Node.js       │  │ Short-lived   │  │ - Video SFU    │
          │ JIT Sync      │  │ RS256 JWTs    │  │ - Event Bus    │
          └───────┬───────┘  └───────────────┘  └────────────────┘
                  │
           ┌──────┴──────┐
           │             │
           ▼             ▼
       MongoDB       Judge0 CE API
       Atlas         Sandboxed Execution
                     (C++, Py, Java, JS)
```

---

## 🔄 How It Works

1. **Authentication:** Users authenticate via Clerk. The backend's `protectRoute` middleware uses a Just-In-Time (JIT) pattern to ensure user accounts are provisioned in MongoDB and Stream Chat.
2. **Session Creation:** Interviewers create an interview session with a chosen coding challenge and difficulty.
3. **Joining the Room:** Both participants join the session room, automatically connecting to the WebRTC video call and the synchronized chat channel.
4. **Collaborative Pair Programming:** Changes made in Monaco Editor are debounced and broadcast via custom channel events without causing typing lag or cursor displacement.
5. **Code Execution:** Participants execute code via the **Judge0 CE API** (`https://ce.judge0.com`), receiving real-time stdout, stderr, execution time, and automated test-case evaluation.
6. **Session Termination:** The host ends the session, which cleans up active video/audio hardware tracks and updates room status in MongoDB.

---

## 📁 Project Structure

```text
HireConnect/
├── frontend/
│   ├── src/
│   │   ├── components/      # UI components (Navbar, VideoCallUI, CodeEditorPanel, etc.)
│   │   ├── hooks/           # Custom hooks (useStreamClient, useSessions)
│   │   ├── lib/             # Utilities (judge0.js, axios.js, utils.js)
│   │   ├── pages/           # Pages (Dashboard, Session, Problem)
│   │   └── data/            # Problem definitions and starter code
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route logic (sessionControllers, chatController)
│   │   ├── middleware/      # Authentication & JIT sync (protectRoute)
│   │   ├── models/          # Mongoose models (User, Session)
│   │   ├── routes/          # API endpoints (sessionRoutes, chatRoutes)
│   │   ├── lib/             # Configuration (db, env, inngest, stream)
│   │   └── server.js        # Express 5 application entrypoint
│   └── package.json
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18+ recommended) and npm
- MongoDB Atlas account (or local MongoDB)
- Clerk account and API credentials
- Stream.io account and API credentials

### 1. Clone the repository

```bash
git clone https://github.com/VedantChopde11/HireConnect.git
cd HireConnect
```

### 2. Configure Environment Variables

#### Frontend (`frontend/.env`)
```env
VITE_API_URL=http://localhost:5000/api
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_STREAM_API_KEY=your_stream_api_key
```

#### Backend (`backend/.env`)
```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
INNGEST_SIGNING_KEY=your_inngest_signing_key
INNGEST_EVENT_KEY=your_inngest_event_key
```

### 3. Install Dependencies & Run

#### Backend:
```bash
cd backend
npm install
npm run dev
```

#### Frontend:
```bash
cd ../frontend
npm install
npm run dev
```

The application will be accessible at `http://localhost:5173`.

---

## 🔐 Security & Sandboxing

- **Zero Host Execution:** Candidate code is executed strictly within isolated, ephemeral Linux containers via **Judge0 CE** (128MB RAM, 5s CPU limit) rather than using dangerous local `child_process.exec()` calls.
- **JWT Authentication:** Cryptographically verified Clerk session tokens are validated on protected API endpoints.
- **Hardware Lifecycle Management:** Media tracks and WebRTC connections are terminated upon leaving a session to prevent camera/microphone resource leaks.
- **Idempotent Background Jobs:** Inngest handlers use MongoDB upserts (`findOneAndUpdate`) to prevent race conditions and duplicate key errors.

---

## 🚀 Future Improvements

- Integrated CRDTs (Yjs) for character-level simultaneous multi-cursor editing.
- Automated session cloud recording exports to AWS S3.
- Pre-call hardware testing screen (microphone, speaker, and camera diagnostics).
- AI-assisted interview summary and candidate feedback generation.

---

## 👨‍💻 Author

**Vedant Chopde**  
Engineering Student | Full-Stack Developer  
- GitHub: [https://github.com/VedantChopde11](https://github.com/VedantChopde11)  
- Project Repository: [https://github.com/VedantChopde11/HireConnect](https://github.com/VedantChopde11/HireConnect)

---

⭐ *If you find this project helpful, consider starring the repository!*
