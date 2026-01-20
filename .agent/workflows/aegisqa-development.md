---
description: Run AegisQA development workflow
---

# AegisQA Development Workflow

Main workflow for developing AegisQA platform.

## Prerequisites

- Docker Desktop running
- Node.js 20+ installed
- Java 17+ installed
- Maven 3.9+ installed

## Quick Commands

### Start Local Services

// turbo

```powershell
docker-compose up -d
```

### Run UI Tests

// turbo

```powershell
cd ui-automation
npm test
```

### Run API Tests

// turbo

```powershell
cd api-automation
mvn test
```

### Generate Allure Report

// turbo

```powershell
allure serve reports/allure-results
```

### Run AI Test Generator

// turbo

```powershell
cd ai-engine
npm run generate
```

## Development Flow

1. **Start Session** — Run `/session-start` workflow
2. **Check Backlog** — Review `.agent/BACKLOG.md` for priority tasks
3. **Implement** — Work on highest priority task
4. **Test** — Verify implementation locally
5. **Commit** — Small, focused commits
6. **End Session** — Run `/session-end` workflow
