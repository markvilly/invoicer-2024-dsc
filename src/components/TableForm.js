import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function TableForm({
  description,
  setDescription,
  quantity,
  setQuantity,
  rate,
  setRate,
  amount,
  list,
  setList,
  setAmount,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItems = {
      id: uuidv4(),
      description,
      quantity,
      rate,
      amount,
    };
    setDescription("");
    setQuantity("");
    setRate("");
    setAmount("");
    setList([...list, newItems]);
    console.log(list);
  };

  //Edit function
  //Delete function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id));
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button
          type="submit"
          className="mt-5 mb-10 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        >
          Add Table Item
        </button>
      </form>

      {/* Table items */}

      <label htmlFor="preview" className="mt-20">
        Preview
      </label>
      <table width="100%" className="mb-20">
        <thead>
          <tr className="bg-blue-100 ">
            <th>Item Descsription</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, rate, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>{description}</td>
                <td className="text-center">{quantity}</td>
                <td className="text-center">{rate}</td>
                <td className="text-center">{(amount = rate * quantity)}</td>
                <td>
                  <button onClick={() => deleteRow(id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
}
