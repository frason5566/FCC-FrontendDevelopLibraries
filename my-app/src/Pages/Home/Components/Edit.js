import { useState } from "react";
import { v4 } from "uuid";
// import React from "react"

const Edit = ({ add, status }) => {
  const [note, setNote] = useState("");

  function noteChange(s) {
    setNote(s.target.value);
  }

  const [date, setDate] = useState("");

  function dateChange(d) {
    setDate(d.target.value);
  }
  const [time, setTime] = useState("");

  function timeChange(t) {
    setTime(t.target.value);
  }

  function addItem() {
    status.current = true
    add(function (prevData) {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
  }

  return (
    <div className="main">
      <h1>Memo App</h1>
      <p>Title: </p>
      <input type="text" value={note} onChange={noteChange} />
      <p>Date: </p>
      <input type="date" value={date} onChange={dateChange} />
      <p>Time: </p>
      <input type="time" value={time} onChange={timeChange} />
      <button className="add" onClick={addItem}>
        New
      </button>
    </div>
  );
};
export default Edit;
