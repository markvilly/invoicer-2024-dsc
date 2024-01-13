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
          <tr className="border-blackened-tabl bg-orange-400 italic">
            <th className="border-blackened-tabl">Item Descsription</th>
            <th className="border-blackened-tabl">Quantity</th>
            <th className="border-blackened-tabl">Rate</th>
            <th className="border-blackened-tabl">Amount</th>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, rate, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td className="border-blackened-tabl">{description}</td>
                <td className=" border-blackened-tabl text-center">
                  {quantity}
                </td>
                <td className=" border-blackened-tabl text-center">
                  {(rate - rate * taxRatio).toFixed(2)}
                </td>
                <td className="border-blackened-tabl text-center">
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
      <div className="mb-10 ">
        <div className="flex w-1/2 ml-auto items-end justify-end font-bold text-4xl text-gray-800  border-blackened border-b-2 py-2 mt-2">
          TOTAL Tshs. {total.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
