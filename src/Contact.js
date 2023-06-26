import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact" id="contact">
      <h3>Get in touch</h3>
      <div className="text-center">
        <h3 className="email">taliberlin@gmail.com</h3>
        <ul className="d-flex justify-content-center">
          <li>
            <a
              href="https://www.linkedin.com/in/taliberlin/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/taliberlin"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="mailto:taliberlin@gmail.com">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
