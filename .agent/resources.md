# AegisQA — Resources & References

> Curated collection of resources, documentation, and references for building AegisQA.

---

## Demo Application

### ParaBank by Parasoft

| Resource          | Link                                                              |
| ----------------- | ----------------------------------------------------------------- |
| **Live Instance** | https://parabank.parasoft.com                                     |
| **REST API Docs** | https://parabank.parasoft.com/parabank/services/bank/openapi.yaml |
| **SOAP Services** | https://parabank.parasoft.com/parabank/services/                  |
| **Docker Image**  | `docker pull parasoft/parabank`                                   |
| **GitHub**        | https://github.com/parasoft/parabank                              |

---

## UI Automation (Playwright)

### Official Documentation

| Resource               | Link                                            |
| ---------------------- | ----------------------------------------------- |
| **Playwright Docs**    | https://playwright.dev/docs/intro               |
| **TypeScript Config**  | https://playwright.dev/docs/test-typescript     |
| **Page Object Model**  | https://playwright.dev/docs/pom                 |
| **Test Fixtures**      | https://playwright.dev/docs/test-fixtures       |
| **Allure Integration** | https://www.npmjs.com/package/allure-playwright |

### Best Practices

- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Test Isolation](https://playwright.dev/docs/browser-contexts)

---

## API Automation (REST Assured)

### Official Documentation

| Resource                   | Link                                                                           |
| -------------------------- | ------------------------------------------------------------------------------ |
| **REST Assured Wiki**      | https://github.com/rest-assured/rest-assured/wiki                              |
| **Getting Started**        | https://rest-assured.io/                                                       |
| **JSON Schema Validation** | https://github.com/rest-assured/rest-assured/wiki/Usage#json-schema-validation |
| **Allure Integration**     | https://docs.qameta.io/allure/#_testng                                         |

### Maven Dependencies

```xml
<dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>rest-assured</artifactId>
    <version>5.4.0</version>
</dependency>
<dependency>
    <groupId>org.testng</groupId>
    <artifactId>testng</artifactId>
    <version>7.9.0</version>
</dependency>
```

---

## AI Integration (Google Gemini)

### Official Documentation

| Resource            | Link                                                |
| ------------------- | --------------------------------------------------- |
| **Gemini API Docs** | https://ai.google.dev/docs                          |
| **API Quickstart**  | https://ai.google.dev/tutorials/setup               |
| **Node.js SDK**     | https://www.npmjs.com/package/@google/generative-ai |
| **Pricing**         | https://ai.google.dev/pricing                       |

### Free Tier Limits

- 1000 requests/day (with Google login)
- 60 requests/minute
- Gemini 2.5 Flash available

---

## Reporting (Allure)

### Official Documentation

| Resource              | Link                                               |
| --------------------- | -------------------------------------------------- |
| **Allure Docs**       | https://docs.qameta.io/allure/                     |
| **Playwright Plugin** | https://www.npmjs.com/package/allure-playwright    |
| **TestNG Plugin**     | https://docs.qameta.io/allure/#_testng             |
| **GitHub Actions**    | https://github.com/simple-elf/allure-report-action |

---

## CI/CD (GitHub Actions)

### Official Documentation

| Resource               | Link                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------ |
| **Actions Docs**       | https://docs.github.com/en/actions                                                                     |
| **Playwright Action**  | https://github.com/microsoft/playwright-github-action                                                  |
| **Java Setup**         | https://github.com/actions/setup-java                                                                  |
| **PostgreSQL Service** | https://docs.github.com/en/actions/using-containerized-services/creating-postgresql-service-containers |

---

## Database (PostgreSQL)

### Official Documentation

| Resource                | Link                              |
| ----------------------- | --------------------------------- |
| **PostgreSQL Docs**     | https://www.postgresql.org/docs/  |
| **Docker Image**        | https://hub.docker.com/_/postgres |
| **Node.js Driver (pg)** | https://node-postgres.com/        |
| **Java Driver (JDBC)**  | https://jdbc.postgresql.org/      |

---

## Architecture References

### Design Patterns

- [Page Object Model](https://martinfowler.com/bliki/PageObject.html) — Martin Fowler
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) — Uncle Bob
- [Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) — Martin Fowler

### Test Automation

- [Test Automation Patterns](https://testautomationpatterns.org/)
- [ISTQB Syllabus](https://www.istqb.org/certifications/certified-tester-foundation-level)
