// import React from "react"
import Item from "./Item";

const List = ({ listData, del, status }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { id, note, date, time } = item;
        return <Item key={id} id={id} n={note} d={date} t={time} del={del} status={status}/>;
      })}
    </div>
  );
};
export default List;
