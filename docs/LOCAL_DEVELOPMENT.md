# AegisQA — Local Development Guide

## Prerequisites Verified ✅

| Tool    | Version  | Status                                |
| ------- | -------- | ------------------------------------- |
| Node.js | v22.20.0 | ✅                                    |
| npm     | 10.9.3   | ✅                                    |
| Java    | 17.0.14  | ✅                                    |
| Maven   | 3.9.11   | ✅                                    |
| Docker  | 29.1.3   | ✅ (start Desktop for local services) |

---

## Quick Start Commands

### 1. Run UI Tests (Browser Visible)

```powershell
# Navigate to UI automation
cd ui-automation

# Run all tests with browser visible
npx playwright test --headed

# Run specific test file
npx playwright test login.spec.ts --headed

# Run in debug mode (step through)
npx playwright test --debug

# Open Playwright UI mode (visual test runner)
npx playwright test --ui
```

### 2. Run API Tests

```powershell
# Navigate to API automation
cd api-automation

# Run all tests
mvn test

# Run specific test class
mvn test -Dtest=AuthenticationApiTest

# Run with verbose output
mvn test -X
```

### 3. Generate Reports

```powershell
# UI Tests - Playwright HTML Report
cd ui-automation
npx playwright show-report

# UI Tests - Allure Report
npx allure serve allure-results

# API Tests - Allure Report
cd api-automation
mvn allure:serve
```

---

## VS Code Extensions (Recommended)

### For UI Automation

- **Playwright Test for VS Code** (ms-playwright.playwright)
  - Run tests from sidebar
  - Debug with breakpoints
  - See test results inline

### For API Automation

- **Extension Pack for Java** (vscjava.vscode-java-pack)
  - Java IntelliSense
  - Maven support
  - Test runner

### For Database

- **PostgreSQL** (ckolkman.vscode-postgres)
  - Connect to databases
  - Run queries
  - View tables

### General

- **Thunder Client** (rangav.vscode-thunder-client)
  - REST API testing (alternative to Postman)
- **Docker** (ms-azuretools.vscode-docker)
  - Manage containers
  - View logs

---

## Test Execution Modes

### Headed Mode (See Browser)

```powershell
# See tests running in browser
npx playwright test --headed

# Slow motion (easier to follow)
npx playwright test --headed --slow-mo=1000
```

### Debug Mode

```powershell
# Step through tests
npx playwright test --debug

# Debug specific test
npx playwright test login.spec.ts --debug
```

### UI Mode (Visual Runner)

```powershell
# Best visual experience
npx playwright test --ui
```

---

## Docker Services (When Docker Desktop Running)

```powershell
# Start all services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f parabank

# Stop services
docker-compose down
```

---

## Environment Configuration

The `.env` file controls test execution:

```env
# For headed browser execution
HEADLESS=false
SLOW_MO=500

# For headless (CI) execution
HEADLESS=true
SLOW_MO=0
```
