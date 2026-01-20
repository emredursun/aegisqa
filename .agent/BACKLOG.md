# AegisQA — Product Backlog

> Prioritized list of all features and tasks for AegisQA platform.

---

## Sprint 1: Foundation & Core Setup 🔴 CURRENT

### Epic: Project Infrastructure

| ID    | Task                                          | Status  | Priority    |
| ----- | --------------------------------------------- | ------- | ----------- |
| F-001 | Create monorepo folder structure              | ⬜ TODO | 🔴 Critical |
| F-002 | Set up shared configuration module            | ⬜ TODO | 🔴 Critical |
| F-003 | Create Docker Compose (ParaBank + PostgreSQL) | ⬜ TODO | 🔴 Critical |
| F-004 | Create environment configuration (.env)       | ⬜ TODO | 🔴 Critical |
| F-005 | Initialize Git repository                     | ⬜ TODO | 🔴 Critical |

---

## Sprint 2: UI Automation Module

### Epic: Playwright + TypeScript Setup

| ID     | Task                                  | Status  | Priority    |
| ------ | ------------------------------------- | ------- | ----------- |
| UI-001 | Initialize Playwright project         | ⬜ TODO | 🔴 Critical |
| UI-002 | Create base Page Object Model classes | ⬜ TODO | 🔴 Critical |
| UI-003 | Implement ParaBank page objects       | ⬜ TODO | 🔴 Critical |
| UI-004 | Create test fixtures and hooks        | ⬜ TODO | 🟡 High     |
| UI-005 | Implement login test scenarios        | ⬜ TODO | 🟡 High     |
| UI-006 | Implement account test scenarios      | ⬜ TODO | 🟡 High     |
| UI-007 | Implement transfer test scenarios     | ⬜ TODO | 🟡 High     |
| UI-008 | Add cross-layer validation hooks      | ⬜ TODO | 🟡 High     |
| UI-009 | Configure Allure reporting            | ⬜ TODO | 🟢 Medium   |

---

## Sprint 3: API Automation Module

### Epic: REST Assured + Java Setup

| ID      | Task                                       | Status  | Priority    |
| ------- | ------------------------------------------ | ------- | ----------- |
| API-001 | Initialize Maven project with dependencies | ⬜ TODO | 🔴 Critical |
| API-002 | Create base test classes and utilities     | ⬜ TODO | 🔴 Critical |
| API-003 | Implement ParaBank API clients             | ⬜ TODO | 🔴 Critical |
| API-004 | Create request/response POJOs              | ⬜ TODO | 🟡 High     |
| API-005 | Implement authentication API tests         | ⬜ TODO | 🟡 High     |
| API-006 | Implement account API tests                | ⬜ TODO | 🟡 High     |
| API-007 | Implement transfer API tests               | ⬜ TODO | 🟡 High     |
| API-008 | Add database validation integration        | ⬜ TODO | 🟡 High     |
| API-009 | Configure Allure reporting                 | ⬜ TODO | 🟢 Medium   |

---

## Sprint 4: Database Module

### Epic: PostgreSQL Integration

| ID     | Task                                 | Status  | Priority    |
| ------ | ------------------------------------ | ------- | ----------- |
| DB-001 | Create database connection utilities | ⬜ TODO | 🔴 Critical |
| DB-002 | Implement query builders             | ⬜ TODO | 🟡 High     |
| DB-003 | Create test data seeders             | ⬜ TODO | 🟡 High     |
| DB-004 | Add data validation helpers          | ⬜ TODO | 🟡 High     |
| DB-005 | Implement transaction management     | ⬜ TODO | 🟢 Medium   |

---

## Sprint 5: AI Integration Engine

### Epic: Google Gemini Integration

| ID     | Task                                 | Status  | Priority    |
| ------ | ------------------------------------ | ------- | ----------- |
| AI-001 | Design AI provider abstraction layer | ⬜ TODO | 🔴 Critical |
| AI-002 | Implement GeminiProvider             | ⬜ TODO | 🔴 Critical |
| AI-003 | Create test analyzer module          | ⬜ TODO | 🟡 High     |
| AI-004 | Implement scenario generator         | ⬜ TODO | 🟡 High     |
| AI-005 | Add refactoring suggestions          | ⬜ TODO | 🟢 Medium   |
| AI-006 | Create coverage analysis             | ⬜ TODO | 🟢 Medium   |
| AI-007 | Build CLI interface for AI tools     | ⬜ TODO | 🟢 Medium   |

---

## Sprint 6: CI/CD & Reporting

### Epic: GitHub Actions & Allure

| ID     | Task                               | Status  | Priority    |
| ------ | ---------------------------------- | ------- | ----------- |
| CI-001 | Create UI tests workflow           | ⬜ TODO | 🔴 Critical |
| CI-002 | Create API tests workflow          | ⬜ TODO | 🔴 Critical |
| CI-003 | Create full regression workflow    | ⬜ TODO | 🟡 High     |
| CI-004 | Configure Allure report publishing | ⬜ TODO | 🟡 High     |
| CI-005 | Set up GitHub Pages for reports    | ⬜ TODO | 🟢 Medium   |

---

## Sprint 7: Documentation

### Epic: Professional Documentation

| ID      | Task                            | Status  | Priority    |
| ------- | ------------------------------- | ------- | ----------- |
| DOC-001 | Create comprehensive README     | ⬜ TODO | 🔴 Critical |
| DOC-002 | Document architecture decisions | ⬜ TODO | 🟡 High     |
| DOC-003 | Add execution guides            | ⬜ TODO | 🟡 High     |
| DOC-004 | Create contribution guidelines  | ⬜ TODO | 🟢 Medium   |
| DOC-005 | Add AI usage documentation      | ⬜ TODO | 🟢 Medium   |

---

## Status Legend

| Symbol         | Meaning               |
| -------------- | --------------------- |
| ⬜ TODO        | Not started           |
| 🔄 IN PROGRESS | Currently working     |
| ✅ DONE        | Completed             |
| ⏸️ BLOCKED     | Waiting on dependency |
| ❌ CANCELLED   | No longer needed      |
