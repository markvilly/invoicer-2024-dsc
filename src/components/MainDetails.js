import React from "react";

export default function MainDetails({ name, address }) {
  return (
    <div>
      {/* your details */}
      <section className="flex grid grid-cols-2 items-end justify-end ">
        <div>
          <img
            width="200px"
            src="\DSC LOGO PNG 1.png"
            alt="Logo of an orange fish with white spots surrounded in a bluish background"
            srcset=""
            className=""
          />
        </div>
        <div className="mb-auto flex flex-col items-end justify-end ">
          <h2 className="font-bold md:text4l text-xl uppercase">{name}</h2>
          <p className="h-auto text-right">
            Sandvik Street, Off Chole Road, Masaki <br /> Dar es Salaam, TZ
            11201 TZ
            <br />
            admin@dsccompanyltd.co.tz <br />
            <a
              href="http:// www.dsccompanyltd.co.tz"
              rel="noopenner noreferrer"
              target="_blank"
            >
              www.dsccompanyltd.co.tz
            </a>
            <br /> Govt. UID TIN: 157-185-616
          </p>
        </div>
      </section>
      {/* End of details */}
    </div>
  );
}
