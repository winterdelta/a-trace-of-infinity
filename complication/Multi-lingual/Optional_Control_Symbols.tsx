"use client";

import { useState } from "react";
import styles from "@/components/Multi-lingual/Player.module.css";
import Languages from "./Languages";
import Player from "./Player";
import { Repeat } from "@carbon/icons-react";

export default function Controls() {
  return (
    <div className={styles.icon}>
      <Repeat size={16} />
    </div>
  );
}
