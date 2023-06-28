import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact" id="contact">
      <div className="text-center">
        <h3 className="email">taliberlin@gmail.com</h3>
        <ul className="d-flex justify-content-center">
          <li>
            <a
              href="https://www.linkedin.com/in/taliberlin/"
              target="_blank"
              rel="noreferrer"
              title="View Tali Berlin's LinkedIn profile"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/taliberlin"
              target="_blank"
              rel="noreferrer"
              title="View Tali Berlin's GitHub profile"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="mailto:taliberlin@gmail.com"
              title="Send Tali Berlin an email"
            >
              <i class="fa-solid fa-envelope"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.shecodes.io/graduates/56921-tali-berlin"
              title="View Tali Berlin's SheCodes profile"
            >
              <i class="fa-solid fa-laptop-code"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
