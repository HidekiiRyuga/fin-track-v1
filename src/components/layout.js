import React, { useContext } from 'react';
import { Header } from './Header';

export const AppLayout = ({ children }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};