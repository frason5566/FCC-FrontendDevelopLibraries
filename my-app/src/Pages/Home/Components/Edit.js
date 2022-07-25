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
      <h1>備忘錄</h1>
      <p>記事：</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期：</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間：</p>
      <input type="time" value={time} onChange={timeChange} />
      <button className="add" onClick={addItem}>
        新增
      </button>
    </div>
  );
};
export default Edit;
