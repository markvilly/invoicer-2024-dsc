import React from "react";

export default function Footer({ name, email, address, branch, website }) {
  return (
    <div>
      {/* footer */}
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Your name:</span>
            {name}
          </li>
          <li>
            <span className="font-bold">Your email: </span>
            {email}
          </li>
          <li>
            <span className="font-bold">Bank</span>
          </li>
          <li>
            <span className="font-bold">Account holder:</span> {name}
          </li>
          <li>
            <span className="font-bold">Account number:</span> 123 456 789
          </li>
          <li>
            <span className="font-bold">Branch:</span> {branch}
          </li>
          <li>
            <span className="font-bold">Website: </span>
            <a href={website} target="_blank" rel="noopenner noreferrer">
              {website}
            </a>
          </li>
        </ul>
      </footer>
      {/* End of footer */}
    </div>
  );
}
