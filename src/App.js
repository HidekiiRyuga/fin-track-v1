/**
 * FinTrack Application Entry Point
 * * This component serves as the high-level orchestrator, wrapping the 
 * application in the GlobalProvider to ensure atomic state access 
 * across the dashboard and transaction engine.
 */
import React, { useContext } from 'react';
import { GlobalProvider } from './context/GlobalState';
import { AppLayout } from './components/layout';
import { TransactionEngine } from './components/transactions';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <AppLayout>
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionEngine />
        </div>
      </AppLayout>
    </GlobalProvider>
  );
}

export default App;