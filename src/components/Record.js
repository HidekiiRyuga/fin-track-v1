import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Record = ({ record }) => {
  const { deleteRecord } = useContext(GlobalContext);

  const sign = record.value < 0 ? '-' : '+';

  return (
    <li className={record.value < 0 ? 'minus' : 'plus'}>
      {record.text} <span>{sign}{moneyFormatter(record.value)}</span><button onClick={() => deleteRecord(record.id)} className="delete-btn">x</button>
    </li>
  )
}
