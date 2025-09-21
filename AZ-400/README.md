````markdown
# Skunkworks AZ-400 DevOps Accelerator

<!-- Banner (SVG below in /AZ-400/assets) -->
<p align="center">
  <img src="./AZ-400/assets/course-banner.svg" alt="Skunkworks AZ-400 DevOps Accelerator" width="820" />
</p>

<p align="center">
  <a href="https://skunkworks-academy.github.io/Microsoft/AZ-400/"><img alt="Website" src="https://img.shields.io/badge/site-live-0ea5e9?logo=githubpages&logoColor=white"></a>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-15-000?logo=next.js" />
  <img alt="React" src="https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=000" />
  <img alt="Carbon" src="https://img.shields.io/badge/IBM%20Carbon-Design%20System-161616?logo=ibm&logoColor=fff" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=fff" />
  <img alt="License" src="https://img.shields.io/badge/license-MIT-34d399" />
</p>

> **Enterprise-ready, hands-on learning path for AZ-400**. Build real CI/CD pipelines using Azure DevOps and GitHub Actions with production-grade practices, accessible on desktop and mobile.

---

## 🎯 Course Overview

**Skunkworks AZ-400 DevOps Accelerator** is a self-paced, instructor-supported program that combines theory, live demos, and labs. The course is structured into **3 modules**, each with escalating **6 levels** (Foundations → Capstone). Learners earn XP and badges as they progress.

- **Audience:** Devs, SREs, QA, Platform & Release Engineers  
- **Prereqs:** Basic Git, Node/JS familiarity, Azure subscription access (or free trial)  
- **Outcomes:**
  - Design and implement CI/CD pipelines on Azure DevOps & GitHub Actions
  - Integrate testing, quality gates, and security scanning
  - Release safely with blue/green, canary, and approvals
  - Instrument pipelines for reliability, cost, and speed

<p align="center">
  <img src="./AZ-400/assets/module-badges.svg" alt="Modules" width="820" />
</p>

---

## 🧭 Curriculum (Modules & Levels)

> Each level contains: lesson, interactive activities, and a hands-on lab.

| Module | Focus | Levels |
|---|---|---|
| **1** | CI/CD Foundations | Foundations • Comprehension • Application • Analysis • Evaluation • Capstone |
| **2** | Environments & Release | Foundations • Comprehension • Application • Analysis • Evaluation • Capstone |
| **3** | Observability & Governance | Foundations • Comprehension • Application • Analysis • Evaluation • Capstone |

<details>
<summary><strong>Detailed Outline</strong></summary>

### Module 1 — CI/CD Foundations
- **Foundations:** CI basics, branch strategies, runners/agents  
- **Comprehension:** Test pyramid, caching, artifacts, packages  
- **Application:** GitHub Actions / Azure Pipelines build  
- **Analysis:** Flakiness, parallelism, matrix builds  
- **Evaluation:** Quality gates (lint, coverage, SAST)  
- **Capstone:** Full CI pipeline with caching + tests + artifacts  

### Module 2 — Environments & Release
- **Foundations:** Deploy targets, infra as code basics  
- **Comprehension:** Environments, approvals, secrets  
- **Application:** Blue/green & canary with gates  
- **Analysis:** Rollback strategies, feature flags  
- **Evaluation:** Change failure rate, MTTR, DORA  
- **Capstone:** Multi-stage CD with approvals and targeted rollouts  

### Module 3 — Observability & Governance
- **Foundations:** Logs, metrics, traces for pipelines and apps  
- **Comprehension:** Dashboards, alerts, SLIs/SLOs  
- **Application:** Cost & performance guardrails  
- **Analysis:** Compliance, artifact provenance, SBOM  
- **Evaluation:** Policy as code (OPA/GitHub rulesets)  
- **Capstone:** Governance dashboard + policy-enforced release  

</details>

<p align="center">
  <img src="./AZ-400/assets/agenda-timeline.svg" alt="Course timeline" width="820" />
</p>

---

## 🧪 Labs (Hands-On)

- **Lab 1.1:** Create CI with tests & cache (GitHub Actions or Azure Pipelines)  
- **Lab 1.3:** Publish artifacts & SBOM  
- **Lab 2.2:** Staged deployments with approvals  
- **Lab 2.4:** Canary rollout + feature flags  
- **Lab 3.1:** Instrument CI/CD metrics (duration, success rate)  
- **Lab 3.5:** Policy as code enforcing quality gates  

> See `/AZ-400/labs` and in-app level pages for exact steps.

---

## 🚀 Getting Started (Dev)

```bash
# from repo root
cd AZ-400/web
npm i
npm run dev
# open http://localhost:3000/course
````

**Production (GitHub Pages):** a workflow (see below) builds static HTML with `DEPLOY_TARGET=gh-pages` so the site serves under `/Microsoft/AZ-400`.

---

## 📦 Tech Stack

* **Next.js 15 (App Router)** + **React 18** + **TypeScript**
* **IBM Carbon Design System** (responsive, accessible)
* **MDX** content, **Zustand** client state
* **Playwright** e2e, **Vitest** unit testing

```mermaid
flowchart LR
  A[MDX Lessons] --> C[Next.js Pages]
  B[JSON Activities] --> C
  C --> D(IBM Carbon UI)
  D --> E{Static Export}
  E -->|GitHub Actions| F[GitHub Pages]
```

---

## 📈 Roadmap

* [ ] Replace placeholder content with client-approved syllabus
* [ ] Add Leaderboard (Supabase adapter)
* [ ] Accessibility audit against WCAG 2.2 AA
* [ ] Add scenario & comparator widgets

---

## 💼 Commercials

| Package               |  Duration | Format          |           Price | Notes                           |
| --------------------- | --------: | --------------- | --------------: | ------------------------------- |
| **Self-paced**        | 2–4 weeks | Asynchronous    | \$X per learner | Includes forum support, updates |
| **Cohort (virtual)**  |    3 days | Live + labs     | \$X per learner | Min 15 learners, live Q\&A      |
| **Enterprise onsite** |  2–3 days | Onsite workshop |         \$X/day | Custom labs, NDA option         |

> Volume discounts available. Contact: **[hello@skunkworksacademy.com](mailto:hello@skunkworksacademy.com)**

---

## 📚 Resources

* Course site: `/Microsoft/AZ-400/`
* Labs: `/AZ-400/labs/`
* Support: Issues tab or email above

---

## 🔧 GitHub Pages Deploy (CI)

```yaml
# .github/workflows/az400-pages.yml
name: Deploy AZ-400 Site
on:
  push:
    branches: [ main ]
    paths: [ 'AZ-400/**', '.github/workflows/az400-pages.yml' ]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    env:
      DEPLOY_TARGET: gh-pages
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - name: Install
        run: npm ci
        working-directory: AZ-400/web
      - name: Build
        run: npm run build
        working-directory: AZ-400/web
      - uses: actions/upload-pages-artifact@v3
        with: { path: AZ-400/web/out }
      - uses: actions/deploy-pages@v4
```

---

## ✍️ Contributing

Issues and PRs welcome. Please include screenshots or a brief Loom for UI changes.

---

© Skunkworks Academy. All rights reserved.
::contentReference[oaicite:0]{index=0}
```
