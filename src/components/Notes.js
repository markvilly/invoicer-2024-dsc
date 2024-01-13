import React from "react";

export default function Notes() {
  return (
    <div>
      {/* Notes */}

      <section className="mt-10 mb-5 flex grid grid-cols-1">
        {/* text area */}
        <p className="lg:w-1/2 sm:w-1/2 text-justify">
          The fee stated is inclusive of taxes. Please pay this invoice at the
          bank. No cash must be given to any staff of the company.
          <b> Please put your child(ren)’s name(s) as a reference</b>. The proof
          of payment paid directly into the bank via bank transfer, cash
          deposit, mobile money or Selcom gateway must be provided in order to
          have a receipt issued in lieu of the payment.
        </p>
      </section>
      {/* End of notes */}
    </div>
  );
}
