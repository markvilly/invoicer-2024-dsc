import React from "react";

export default function Table({ description, quantity, rate, amount }) {
  return (
    <div>
      <table width="100%">
        <thead>
          <tr className="bg-blue-100 ">
            <th>Item Descsription</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{description}</td>
            <td className="text-center">{quantity}</td>
            <td className="text-center">{rate}</td>
            <td className="text-center">{(amount = rate * quantity)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
