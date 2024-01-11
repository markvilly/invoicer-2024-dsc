import React from "react";

export default function ClientDetails({
  clientName,
  clientAddress,
  clientEmail,
  phone,
}) {
  return (
    <div>
      <article className="w-100% bg-black">
        <h2 className="client-name font-bold italic text-white text-center">
          Bill to
        </h2>
      </article>
      {/* Clients details */}
      <article className="mt-5 mb-10  flex md:grid grid-cols-2">
        <div>
          <span className="font-bold text-gray-600 ">Name </span>
          <p className="text-lg">{clientName}</p>
        </div>
        <div>
          <span className="font-bold text-gray-600 ">Address </span>
          <p className="text-lg">{clientAddress}</p>
        </div>
      </article>

      <article className="mt-5 mb-10  flex md:grid grid-cols-2">
        <div>
          <span className="font-bold text-gray-600 ">Email </span>
          <p className="text-lg">{clientEmail}</p>
        </div>
        <div>
          <span className="font-bold text-gray-600 ">Phone No </span>
          <p className="text-lg">{phone}</p>
        </div>
      </article>
      {/* end of client details */}
    </div>
  );
}
