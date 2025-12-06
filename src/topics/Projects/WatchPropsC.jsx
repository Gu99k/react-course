import React from "react";

function WatchPropsC({ time, color}) {
  return (
    <div className="pt-10">
      <span
        style={{ color: color }}
        className="text-2xl bg-gray-900 p-4 rounded-2xl text-amber-50"
      >
        {time}
      </span>
      {/* <span className="ml-7 p-3 rounded-2xl text-3xl bg-amber-500">Id:{ todos.id + ' ' }Title: {' ' + todos.title }</span> */}

      <div className="text-center ml-16 p-8">
        
      </div>
    </div>
  );
}

export default WatchPropsC;
