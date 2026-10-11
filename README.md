# HireConnect 🚀
### Collaborative Coding & Technical Interview Platform

HireConnect is a full-stack web application that simplifies technical interviews by combining interview management, real-time collaborative coding, video communication, and code execution in one platform.

🔗 **Live Demo:** https://hireconnect-client.onrender.com/  
💻 **GitHub Repository:** https://github.com/VedantChopde11/HireConnect

## ✨ Features

- **Authentication & Authorization:** Secure user authentication with Clerk and protected application routes.
- **Role-Based Workflows:** Separate experiences for interviewers and candidates.
- **Interview Management:** Organize and manage technical interview sessions.
- **Real-Time Collaborative Coding:** Synchronize code changes between participants using WebSockets.
- **Video Communication:** Enable interviewers and candidates to communicate during interviews.
- **Online Code Execution:** Execute code using the Piston API and inspect output and errors.
- **REST APIs:** Backend endpoints for application functionality and data management.
- **Database Integration:** Persist application data using MongoDB.
- **Responsive Interface:** User interface built with React and modern styling tools.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript |
| Styling | Tailwind CSS, Shadcn/UI, Lucide React |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Authentication | Clerk |
| Real-Time Communication | WebSockets |
| Video / Communication | Stream, where configured |
| Code Execution | Piston API |
| Background Workflows | Inngest, where configured |
| Deployment | Render |

## 🏗️ Application Architecture

```text
                   ┌────────────────────┐
                   │   React Frontend   │
                   └─────────┬──────────┘
                             │
                  ┌──────────┴──────────┐
                  │                     │
             REST APIs             WebSockets
                  │                     │
                  ▼                     ▼
          ┌───────────────┐    ┌─────────────────┐
          │ Express /     │    │ Real-Time Code  │
          │ Node.js       │    │ Synchronization │
          └───────┬───────┘    └─────────────────┘
                  │
           ┌──────┴──────┐
           │             │
           ▼             ▼
       MongoDB      External APIs
                    Clerk / Piston /
                    Communication
```

## 🔄 How It Works

1. Users authenticate and access their respective application workflows.
2. Interviewers organize interview sessions and candidates access their interviews.
3. Participants join the interview environment.
4. Code changes are synchronized between participants in real time.
5. Participants execute code and review the output or errors.
6. Interview-related workflows are managed through the application.

## 📁 Project Structure

```text
HireConnect/
├── frontend/
│   ├── src/
│   └── package.json
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── package.json
├── package.json
├── .gitignore
└── README.md
```

*Note: The structure above is illustrative. Update it to match the actual directories and files in your repository.*

## ⚙️ Getting Started

### Prerequisites

- Node.js and npm
- MongoDB Atlas or a local MongoDB instance
- Clerk account and application credentials
- API credentials for any external services used by your configuration

### 1. Clone the repository

```bash
git clone https://github.com/VedantChopde11/HireConnect.git
cd HireConnect
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

Create a frontend `.env` file with the required environment variables.

Start the frontend using the development script defined in `frontend/package.json`, for example:

```bash
npm run dev
```

### 3. Install backend dependencies

Open a new terminal:

```bash
cd HireConnect/backend
npm install
```

Create a backend `.env` file with the required configuration.

Start the backend using the script defined in `backend/package.json`, for example:

```bash
npm run dev
```

Use the actual scripts configured in your repository if they differ from these examples.

### 4. Configure environment variables

Create the environment files required by your frontend and backend.

Typical configuration may include:

**Frontend**
- API base URL
- Clerk publishable key
- Public communication-service API key, if required

**Backend**
- Port
- MongoDB connection string
- Clerk secret key
- Communication-service credentials
- Code-execution configuration
- Background workflow credentials, if applicable

Refer to your source code for the exact variable names. Never commit real secrets or credentials to GitHub.

## 🔐 Security

- Keep private API keys and database credentials on the backend.
- Validate incoming API requests.
- Enforce server-side authorization for protected operations.
- Restrict access to interview sessions.
- Apply appropriate timeouts and resource limits to code execution.
- Store only the data necessary for the application's functionality.

## 🚀 Future Improvements

- Coding-question library with automated test cases.
- Interview feedback and evaluation system.
- Code history and session recovery.
- Interview reminders and calendar integration.
- Automated testing and CI/CD.
- Interview analytics dashboard.
- AI-assisted interview summaries.

## 👨‍💻 Author

**Vedant Chopde**  
Engineering Student | Full-Stack Developer

- GitHub: https://github.com/VedantChopde11
- Project Repository: https://github.com/VedantChopde11/HireConnect

---

⭐ If you find this project interesting, consider starring the repository!

