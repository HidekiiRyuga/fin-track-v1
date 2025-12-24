# 📈 FinTrack — High-Integrity Personal Ledger System

[![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Context-API](https://img.shields.io/badge/State-Context--API-ff4081?style=for-the-badge)](#)
[![Design](https://img.shields.io/badge/UI-Glassmorphism-00d1ff?style=for-the-badge)](#)

FinTrack is a specialized frontend financial management tool engineered for real-time liquidity tracking. Built with a focus on **State Immutability** and **Modular Architecture**, it transforms basic expense logging into a structured data-flow experience.

Rather than a generic tracker, FinTrack emphasizes **visual hierarchy** and **atomic state updates**, bridging the gap between simple CRUD logic and professional-grade dashboard design.

---

## 💎 Product Philosophy

### The Glass-Aether UI
FinTrack utilizes a custom **Glassmorphic interface** designed to reduce cognitive load. By using blurred backdrops and a high-contrast Emerald/Rose color palette, the system ensures that financial health is readable at a glance.

The intent is deliberate: 
Provide a high-fidelity, desktop-class experience that makes financial discipline feel modern and intuitive.

---

## 🛠️ Engineering Highlights

- **Centralized State Orchestration** Implemented a robust Global Store using the **React Context API**, eliminating prop-drilling and ensuring a single source of truth for financial data.
- **Flux-Pattern Reducer Logic** Utilizes the `useReducer` hook to manage state transitions, ensuring predictable data updates and clean separation of concerns.
- **Atomic Component Architecture** The codebase is structured into specialized layers (Layout vs. Engine), mirroring the folder patterns used in enterprise-scale React applications.
- **Dynamic Data Computation** Algorithmic calculation of net balance and cash flow summaries that react instantly to changes in the underlying data store.

---

## 🧱 Tech Stack

- **Library:** React 18 (Functional Components)
- **State Management:** Context API + useReducer (Flux Architecture)
- **Styling:** CSS3 with Glassmorphism & Responsive Flexbox
- **Icons/Fonts:** Inter Typeface & Dynamic Hex Scaling

---

## 📂 Project Architecture

fin-track-v1/
├── src/
│   ├── components/
│   │   ├── layout.js          # High-level UI wrappers & Navigation
│   │   ├── transactions.js    # Logic-gate for RecordList & AddRecord
│   │   ├── Balance.js         # Real-time liquidity calculator
│   │   └── IncomeExpenses.js  # Categorized cash-flow summary
│   ├── context/
│   │   ├── GlobalState.js     # Centralized Data Provider
│   │   └── AppReducer.js      # State transition logic (Action/Dispatch)
│   ├── App.js                 # Application Root
│   └── App.css                # Global Theme & Glassmorphic definitions

---

## 🚀 Quick Start

1. **Clone & Install**
   npm install

2. **Environment Setup**
   Ensure Node.js v18+ is installed. For legacy environments, the system includes an OpenSSL fallback.

3. **Launch**
   npm start

---

## 📝 Author

Designed and engineered by **Stuti**. Focused on scalable frontend systems, intuitive state management, and high-fidelity UI/UX.