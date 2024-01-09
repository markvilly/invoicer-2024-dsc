import React from "react";

export default function ClientDetails({ clientName, clientAddress }) {
  return (
    <div>
      {/* Clients details */}
      <section className="mt-5">
        <h2 className="text-xl">{clientName}</h2>
        <p>{clientAddress}</p>
      </section>
      {/* end of client details */}
    </div>
  );
}
