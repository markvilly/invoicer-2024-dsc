import React from "react";

export default function TableForm({
  description,
  setDescription,
  quantity,
  setQuantity,
  rate,
  setRate,
  amount,
  setAmount,
}) {
  return (
    <div>
      <div className="flex flex-col mt-10">
        <label htmlFor="description">Item Description</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="item description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>

      <article className="md:grid grid-cols-3 gap-10">
        <div className="flex flex-col">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="text"
            name="quantity"
            id="quantity"
            placeholder="item quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="rate">Rate</label>
          <input
            type="text"
            name="rate"
            id="rate"
            placeholder="item rate"
            value={rate}
            onChange={(e) => {
              setRate(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="amount">Amount</label>
          <p>{(amount = rate * quantity)}</p>
        </div>
      </article>
    </div>
  );
}
