import React from "react";
import { Metadata } from "next";
import Container from "../components/Container";
import Separator from "../components/Separator";
import Image from "next/image";
import Ayam from "../assets/images/Ayam.png";
import SchoolPayment from "../assets/images/SchoolPayment.png";

export const metadata: Metadata = {
  title: "Blog Page",
};

const Blogs = () => {
  const getFormattedDate = () => {
    const monthNames = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const today = new Date();

    const dd = String(today.getDate());
    const mm = monthNames[today.getMonth()];
    const yyyy = today.getFullYear();

    const formattedDate = mm + " " + dd + ", " + yyyy;

    return formattedDate;
  };
  const date = getFormattedDate();
  return (
    <Container className="px-4 py-10 min-h-full flex space-y-12 flex-col flex-1">
      <div className="space-y-12">
        <h1 className="font-semibold text-5xl">Blog Posts</h1>
        <Separator />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="flex flex-col space-y-2">
          <Image
            className="rounded-lg"
            src={Ayam}
            width={500}
            height={500}
            alt="Ayam Bakar Bu Ratna Blogs"
          />
          <h1 className="font-semibold text-2xl">
            Lorem ipsum dolor sit amet.
          </h1>
          <span className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            mollitia unde minima earum illo. Obcaecati, minus? Repellat officia
            minima laboriosam.
          </span>
          <span>{date}</span>
        </div>
        <div className="flex flex-col space-y-2">
          <Image
            className="rounded-lg"
            src={SchoolPayment}
            width={500}
            height={500}
            alt="School Payment"
          />
          <h1 className="font-semibold text-2xl">
            Lorem ipsum dolor sit amet.
          </h1>
          <span className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            mollitia unde minima earum illo. Obcaecati, minus? Repellat officia
            minima laboriosam.
          </span>
          <span>{date}</span>
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
