import React, { FC } from "react";
import Container from "./Container";
import CardProject from "./CardProject";
import Image from "next/image";
import Ayam from "../assets/images/Ayam.png";
import SchoolPayment from "../assets/images/SchoolPayment.png";
interface Iproject {
  name: string;
  description?: string;
  image?: any;
}

const Project = () => {
  const projects: Iproject[] = [
    {
      name: "Ayam Bakar",
      description: "Ayam bakar bla bla bla bla",
      image: (
        <Image
          src={Ayam}
          width={400}
          height={400}
          className="rounded-xl"
          alt="Picture of Ayam Bakar"
        />
      ),
    },

    {
      name: "School Payment",
      description: "School Payments bla bla bla bla",
      image: (
        <Image
          src={SchoolPayment}
          className="rounded-xl"
          width={400}
          height={400}
          alt="Picture of School Payment"
        />
      ),
    },
    {
      name: "Ayam Bakar",
      description: "Ayam bakar bla bla bla bla",
      image: (
        <Image
          src={Ayam}
          width={400}
          height={400}
          className="rounded-xl"
          alt="Picture of Ayam Bakar"
        />
      ),
    },
  ];
  return (
    <div className="py-16">
      <Container>
        <div className="flex flex-col justify-center items-center py-16 gap-4">
          <h1 className=" text-6xl text-slate-100 font-semibold">Projects</h1>
          <span className="text-xl">List of Project what i build</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8 sm:grid-cols-2 justify-center sm:px-4">
          {projects.map((project, index) => (
            <CardProject project={project} key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Project;
