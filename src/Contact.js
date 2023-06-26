import React from "react";

export default function Contact() {
  return (
    <div className="Contact">
      <h3>Get in touch!</h3>
      <div className="text-center">
        <ul className="d-flex justify-content-evenly">
          <li>
            <a href="https://www.linkedin.com/in/taliberlin/" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/taliberlin" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="mailto:taliberlin@gmail.com">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
        <h3>taliberlin@gmail.com</h3>
      </div>
    </div>
  );
}
