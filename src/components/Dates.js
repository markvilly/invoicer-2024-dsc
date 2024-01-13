import React from "react";

export default function Dates({ invoiceNumber, invoiceDate, dueDate }) {
  return (
    <div>
      {/* Dates*/}

      <article className="mt-10 mb-10 flex  items-end justify-between">
        <ul className="grid grid-cols-3 gap-10">
          <div className="">
            <span className=" font-bold text-gray-400 italic">
              Invoice number
            </span>
            <div>{invoiceNumber}</div>
          </div>
          <div>
            <span className=" font-bold text-gray-400 italic">
              Invoice date
            </span>
            <li className="p-1">{invoiceDate}</li>
          </div>
          <div>
            <span className=" font-bold text-gray-400 italic">Due date </span>
            <li className="p-1">{dueDate}</li>
          </div>
        </ul>
      </article>
      {/* End of dates */}
    </div>
  );
}
