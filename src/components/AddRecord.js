import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddRecord = () => {
  const [text, setText] = useState('');
  const [value, setValue] = useState(0);

  const { addRecord } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newRecord = {
      id: Math.floor(Math.random() * 100000000),
      text,
      value: +value
    }

    addRecord(newRecord);
  }

  return (
    <>
      <h3>Add new record</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="value"
            >Value <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter value..." />
        </div>
        <button className="btn">Add record</button>
      </form>
    </>
  )
}
