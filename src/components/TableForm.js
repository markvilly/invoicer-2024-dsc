import React from "react";

export default function TableForm({ description, setDescription }) {
  return (
    <div>
      <div className="flex flex-col mt-10">
        <label htmlFor="decription">Item Description</label>
        <input
          type="text"
          name="description"
          id="decription"
          placeholder="item description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
