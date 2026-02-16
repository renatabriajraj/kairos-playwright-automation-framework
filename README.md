# Kairos – Playwright Automation Framework

# Overview
This repository demonstrates UI automation testing using **Playwright with TypeScript**, structured according to industry best practices. It complements the manual testing portfolio by showcasing automated validation of core functional workflows within the Kairos AI-driven coaching platform.

This project focuses on:
* Automation framework design
* Page Object Model (POM)
* Structured test case implementation
* Traceability between manual test cases and automated tests
* Clean, maintainable test architecture

# About Kairos
Kairos is an AI coaching platform that:
* Analyses user calls using an LLM-based scoring engine
* Identifies performance trends and improvement areas
* Generates bespoke training recommendations
* Integrates with LMS and HR systems
* Enables continuous improvement cycles
This automation framework focuses on validating core user-facing workflows.

# Framework Architecture
The project follows the **Page Object Model (POM)** design pattern to ensure:
* Reusability
* Maintainability
* Separation of concerns
* Reduced duplication
* Scalable automation structure

# Folder Structure
kairos-playwright-automation-framework/
│
├── tests/                  # Test specifications (.spec.ts files)
├── pages/                  # Page Object Model classes
├── playwright.config.ts    # Test configuration
├── package.json            # Dependencies & scripts
├── test-results/           # Execution output
└── playwright-report/      # HTML test reports

# Automated Test Coverage
The following test cases are automated based on manual functional test design:

| Test Case ID | Description                                   |
| ------------ | --------------------------------------------- |
| TC-GF-001    | User Login with Valid Credentials             |
| TC-GF-002    | User Login with Invalid Credentials           |
| TC-GF-003    | User Performs Primary Action After Login      |
| TC-GF-004    | User Performs Multiple Actions in One Session |
| TC-GF-005    | User Navigates Between Pages                  |

These test cases represent:
* Authentication validation
* Core workflow execution
* Session continuity
* Navigation integrity
* Error handling

# Design Principles Applied
This framework demonstrates:
* Use of Playwright Test Runner
* Page Object Model implementation
* Assertion best practices using `expect()`
* Clear naming conventions tied to manual test cases
* Separation between test logic and page interactions
* Reusable action methods
* Clean test structure for scalability

# Testing Approach
This repository is not intended to validate a production deployment of Kairos, but rather to demonstrate:
* Practical application of functional test automation
* Alignment between manual test cases and automated scripts
* Understanding of test structure and execution flow
* Industry-standard automation architecture
The automation layer is structured to be adaptable to a live environment with minimal configuration changes.

# How to Run Tests
1. Install dependencies:
npm install
2. Install browsers:
npx playwright install
3. Run tests:
npx playwright test
4. Run with HTML report:
npx playwright test --reporter=html

# Related Repository
Manual test design, system testing, and defect reporting are documented in:

`kairos-software-testing-portfolio`


# Author
## **Renata Briajraj**
ISTQB CTFL Certified
Aspiring Software Tester | Quality Advocate
ISTQB CTFL Certified
Aspiring Software Tester | Quality Advocate
