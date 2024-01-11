import React from "react";

export default function Table({ list, total }) {
  let salesTax = total * (18 / 118);
  let taxRatio = 18 / 118;
  let subTotal = total - salesTax;
  return (
    <div>
      <article className="w-100% bg-black mb-5">
        <h2 className="client-name font-bold italic text-white text-center">
          Services
        </h2>
      </article>
      <table width="100%" className="mb-20">
        <thead>
          <tr className="border-black bg-orange-400 italic">
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
                <td className="text-center">
                  {(rate - rate * taxRatio).toFixed(2)}
                </td>
                <td className="text-center">
                  {(amount = rate * quantity).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      <table className="flex align-end justify-end">
        <tbody>
          <tr>
            <td className="text-center pr-5">Sub-total</td>
            <td className="text-center">{subTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="text-center">Sales Tax</td>
            <td className="text-center">{salesTax.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div className="mb-10 border-gray-300 w-40%">
        <h2 className="flex items-end justify-end font-bold text-4xl text-gray-800 border-t-2 ">
          Tshs. {total.toLocaleString()}
        </h2>
      </div>
    </div>
  );
}
