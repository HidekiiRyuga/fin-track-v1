import React, { useContext } from 'react';
import { Record } from './Record';

import { GlobalContext } from '../context/GlobalState';

export const RecordList = () => {
  const { records } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {records.map(record => (<Record key={record.id} record={record} />))}
      </ul>
    </>
  )
}
