import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <Container className="px-4">
      <div className="flex justify-between items-center py-2 text-gray-500">
        <span className="text-sm tracking-wide">&copy; Maulana Ikhsan</span>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-moon-filled"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"
              stroke-width="0"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
    </Container>
  );
};

export default Footer;
