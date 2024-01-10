import React from "react";

export default function Table({ description }) {
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
            <td className="text-center">2</td>
            <td className="text-center">686440.68</td>
            <td className="text-center">{686440.68 * 2}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
