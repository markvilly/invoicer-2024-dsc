import React from "react";

export default function Notes({ notes }) {
  return (
    <div>
      {/* Notes */}

      <section className="mt-20 mb-5">
        {/* text area */}
        <p className="lg:w-1/2 text-justify">{notes}</p>
      </section>
      {/* End of notes */}
    </div>
  );
}
