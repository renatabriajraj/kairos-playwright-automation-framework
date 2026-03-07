# Kairos – Playwright Automation Framework

# Overview
This repository demonstrates UI automation testing using **Playwright with TypeScript**, structured according to industry best practices.

It complements the manual testing portfolio by showcasing automated validation of **user interface behaviour** within the Kairos AI-driven coaching platform.

This project focuses on:

- Automation framework design
- Page Object Model (POM)
- Structured test case implementation
- Traceability between manual and automated tests
- Clean, maintainable automation architecture

---

# Demo Environment

Automation is executed against the Kairos **front-end prototype**:

https://kairos-hackathon2025.lovable.app/

The demo application is a **UI prototype only** and does not include:

- Authentication services
- Database persistence
- AI analysis modules
- LMS integrations
- Backend APIs

Because of these limitations:

- Some automated tests are **skipped**
- Some validations are **UI-only**
- Backend-dependent workflows cannot be executed

This mirrors real-world QA environments where **system components may be unavailable during early testing phases**.

---

# About Kairos

Kairos is an AI coaching platform that:

- Analyses user calls using an **LLM-based scoring engine**
- Identifies performance trends and improvement areas
- Generates **bespoke training recommendations**
- Integrates with **LMS and HR systems**
- Enables continuous improvement learning cycles

This automation framework focuses on **validating user interface behaviour and navigation stability**.

---

# Framework Architecture

The project follows the **Page Object Model (POM)** design pattern to ensure:

- Reusability
- Maintainability
- Separation of concerns
- Reduced duplication
- Scalable automation structure

---

# Folder Structure


kairos-playwright-automation-framework/
│
├── tests/ # Test specifications (.spec.ts files)
├── pages/ # Page Object Model classes
├── playwright.config.ts # Test configuration
├── package.json # Dependencies & scripts
├── test-results/ # Execution output
└── playwright-report/ # HTML test reports


---

# Automated Test Coverage

Automation is derived from the manual test cases documented in the **Kairos Software Testing Portfolio**.

| Test Case ID | Description | Execution Status |
|--------------|-------------|------------------|
| TC-GF-001 | User Login with Valid Credentials | Skipped – authentication not implemented |
| TC-GF-002 | User Login with Invalid Credentials | Skipped – authentication not implemented |
| TC-GF-003 | User Performs Primary Action After Login | Skipped – backend functionality missing |
| TC-GF-004 | User Performs Multiple Actions in One Session | Skipped – backend functionality missing |
| TC-GF-005 | User Navigates Between Pages | Executable – UI navigation test |

The automation framework demonstrates **test structure and automation design**, even when some workflows cannot yet be executed.

---

# Design Principles Applied

This framework demonstrates:

- Use of **Playwright Test Runner**
- **Page Object Model** implementation
- Assertion best practices using `expect()`
- Clear naming conventions tied to manual test cases
- Separation between test logic and page interactions
- Reusable page action methods
- Clean test structure for scalability

---

# Testing Approach

This repository is intended to demonstrate:

- Practical application of **functional UI test automation**
- Alignment between **manual and automated testing**
- Test structure and execution workflows
- Handling of **partially implemented systems**

The automation architecture is designed so tests can be **expanded easily when backend services become available**.

---

# How to Run Tests

### 1 Install dependencies

npm install

### 2 Install Playwright browsers

npx playwright install

### 3 Run tests

npx playwright test

### 4 Run tests with HTML report

npx playwright test --reporter=html

### 5 Open HTML report

npx playwright show-report


---

# Related Repository

Manual test design, system testing, and defect reporting are documented in:

https://github.com/renatabriajraj/kairos-software-testing-portfolio

---

# Author

**Renata Briajraj**

ISTQB CTFL Certified  
Aspiring Software Tester | Quality Advocate
