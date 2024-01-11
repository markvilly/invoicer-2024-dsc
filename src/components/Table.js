import React from "react";

export default function Table({ list }) {
  return (
    <div>
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
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
}
