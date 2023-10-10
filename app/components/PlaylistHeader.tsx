import Image from "next/image";
import React from "react";
import Ayam from "../assets/images/Ayam.png";

const PlaylistHeader = () => {
  return (
    <div className="w-full flex items-center gap-4">
      <Image alt="Music Playlist" src={Ayam} height={500} width={500} />
    </div>
  );
};

export default PlaylistHeader;
