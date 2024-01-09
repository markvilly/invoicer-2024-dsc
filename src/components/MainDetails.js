import React from "react";

export default function MainDetails({ name, address }) {
  return (
    <div>
      {/* your details */}
      <section className="flex flex-col items-end justify-end ">
        <h2 className="font-bold md:text4l text-xl uppercase">{name}</h2>
        <p>{address}</p>
      </section>
      {/* End of details */}
    </div>
  );
}
