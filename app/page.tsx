import { Metadata } from "next";
import Introduce from "./components/Introduce";
import Separator from "./components/Separator";
import Skill from "./components/Skill";
import Project from "./components/Project";

export const metadata: Metadata = {
  title: "Homepage",
};

export default function Home() {
  return (
    <>
      <Introduce />
      <Separator />
      <Skill />
      <Separator />
      <Project />
      <Separator />
    </>
  );
}
