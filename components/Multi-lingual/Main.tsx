"use client";

import { useState } from "react";
import Languages from "./Languages";
import Player from "./Player";

export default function Main() {
  const [play, setPlay] = useState(false);

  return (
    <div>
      <Languages />
      <Player play_status={play} play_ctrl={setPlay} />
    </div>
  );
}
