# AegisQA

> **AI-Driven Full Stack Test Automation Platform**
>
> Demonstrating Senior/Architect-Level Automation Expertise

---

## 🎯 Overview

AegisQA is a portfolio-grade test automation platform showcasing:

- **Full Stack Testing** — UI + API + Database integration
- **Clean Architecture** — Page Object Model, modular design
- **AI-Powered** — Intelligent test generation with Google Gemini
- **Production Quality** — Enterprise-level best practices

---

## 🛠️ Technology Stack

| Layer              | Technology              |
| ------------------ | ----------------------- |
| **UI Automation**  | Playwright + TypeScript |
| **API Automation** | REST Assured + Java     |
| **Database**       | PostgreSQL              |
| **AI Engine**      | Google Gemini API       |
| **Reporting**      | Allure                  |
| **CI/CD**          | GitHub Actions          |

---

## 📦 Project Structure

```
aegisqa/
├── ui-automation/       # Playwright + TypeScript tests
├── api-automation/      # REST Assured + Java tests
├── db-automation/       # Database utilities
├── ai-engine/           # AI test generation
├── shared/              # Cross-module utilities
├── .github/workflows/   # CI/CD pipelines
├── docs/                # Documentation
└── docker-compose.yml   # Local services
```

---

## 🚀 Quick Start

### Prerequisites

- Docker Desktop
- Node.js 20+
- Java 17+
- Maven 3.9+

### Setup

```bash
# Clone repository
git clone https://github.com/emredursun/aegisqa.git
cd aegisqa

# Start local services
docker-compose up -d

# Run UI tests
cd ui-automation && npm test

# Run API tests
cd api-automation && mvn test
```

---

## 📊 Demo Application

Testing against [ParaBank](https://parabank.parasoft.com) — a demo banking application by Parasoft.

---

## 👤 Author

**Emre Dursun** — ISTQB® Certified Full-Stack Automation Engineer

- 🌐 [emredursun.nl](https://emredursun.nl)
- 💼 [LinkedIn](https://www.linkedin.com/in/emre-dursun-nl)
- 🐙 [GitHub](https://github.com/emredursun)

---

## 📄 License

MIT License
