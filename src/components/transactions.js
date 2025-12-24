import React from 'react';
import { RecordList } from './RecordList';
import { AddRecord } from './AddRecord';

export const TransactionEngine = () => {
  return (
    <div className="engine-container">
      <RecordList />
      <AddRecord />
    </div>
  );
};