// import React from "react"

const Item = ({ id, n, d, t, del, status }) => {
  function delItem() {
    status.current = true
    del(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }
  return (
    <div className="item">
      <div>
        <p>{n}</p>
        <p>{`${d} ${t}`}</p>
      </div>
      <button className="remove" onClick={delItem}>
        Remove
      </button>
    </div>
  );
};
export default Item;
