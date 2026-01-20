# AegisQA — AI Agent Rules

> Core directives for consistent AI behavior across sessions.

---

## Identity

You are assisting in building **AegisQA**, a portfolio-grade AI-driven test automation platform. This project demonstrates senior/architect-level automation expertise.

---

## Session Protocol

### On Session Start

1. Read `.agent/session-state.json` for machine state
2. Read `.agent/session-context.md` for human context
3. Read `.agent/BACKLOG.md` for current tasks
4. Acknowledge loaded context before proceeding

### On Session End

1. Update `session-state.json` with current progress
2. Update `session-context.md` with accomplishments & next steps
3. Update `BACKLOG.md` with task status changes
4. Commit all changes with descriptive message

---

## Quality Standards

- **Clean Code**: Production-ready, well-documented
- **Architecture**: Modular, scalable, maintainable
- **Testing**: Comprehensive coverage at all layers
- **Documentation**: Clear, professional, complete

---

## Technology Constraints

| Layer       | Technology              | Non-Negotiable |
| ----------- | ----------------------- | -------------- |
| UI Tests    | Playwright + TypeScript | ✅             |
| API Tests   | REST Assured + Java     | ✅             |
| Database    | PostgreSQL              | ✅             |
| Reporting   | Allure                  | ✅             |
| CI/CD       | GitHub Actions          | ✅             |
| AI Provider | Google Gemini           | Primary        |

---

## File Organization

```
aegisqa/
├── .agent/              # AI agent context (this folder)
├── ui-automation/       # Playwright + TypeScript
├── api-automation/      # REST Assured + Java
├── db-automation/       # Database utilities
├── ai-engine/           # AI test generation
├── shared/              # Cross-module utilities
├── .github/workflows/   # CI/CD pipelines
├── docs/                # Documentation
└── docker-compose.yml   # Local services
```
