import React from "react";

export default function Footer() {
  return (
    <div>
      {/* footer */}
      <footer className="footer  pt-5">
        <article className="w-100% bg-orange-400 mb-5">
          <h2 className="client-name font-bold italic  text-center">
            Bank Details
          </h2>
        </article>
        <div>
          <table width="100%" className="table-auto border-collapse">
            <tbody className="font-bold italic">
              <tr>
                <td className="border border-gray-400 pl-2">Bank Name</td>
                <td className="border border-gray-400 pl-2">CRDB</td>
              </tr>
              <tr>
                <td className="border border-gray-400 pl-2">Account Number</td>
                <td className="border border-gray-400 pl-2">0150687077500</td>
              </tr>
              <tr>
                <td className="border border-gray-400 pl-2">Branch Name</td>
                <td className="border border-gray-400 pl-2">
                  Palm Beach Premier
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 pl-2">Swift Code</td>
                <td className="border border-gray-400 pl-2">CORUTZTZ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </footer>
      {/* End of footer */}
    </div>
  );
}
