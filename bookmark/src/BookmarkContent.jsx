import React, { useState, useEffect } from "react";

import { getBookmark, clearBookmark } from "./bookmark.js";

export default function BookmarkContent() {
  const [items, setItems] = useState([]);



  return (
    <>
      <div className="grid grid-cols-4 gap-5 my-10">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <div>{item.name}</div>
            
          </React.Fragment>
        ))}
        <div></div>
        <div></div>
        <div></div>
        
      </div>
      {items.length > 0 && (
        <div className="flex mb-10">
          <div className="flex-grow">
            <button
              className="px-5 py-2 text-sm text-green-800 bg-white border border-green-800 rounded-md"
              onClick={clearBookmark}
            >
              Clear bookmark
            </button>
          </div>
          <div className="flex-end">
            <button
              className="px-5 py-2 text-sm text-white bg-green-900 rounded-md"
              onClick={clearBookmark}
            >
              View
            </button>
          </div>
        </div>
      )}
    </>
  );
}
