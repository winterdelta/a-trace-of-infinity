"use client";

import { useEffect, useState } from "react";
import styles from "./Copy.module.css";
import { IBM_Plex_Serif, IBM_Plex_Sans } from "next/font/google";
import { useChat } from "@ai-sdk/react";

const serif_font = IBM_Plex_Serif({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["200", "400"],
});

const mono = IBM_Plex_Serif({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["200"],
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500"],
});

export default function Copy() {
  const [title, setTitle] = useState<string | null>(null);
  const { messages, setMessages, append } = useChat({
    api: "/api/lead-header",
  });

  useEffect(() => {
    setMessages([]);
    append({
      role: "system",
      content: "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const allMessagesContent_title = messages.map((m) => m.content).join("\n");
    setTitle(allMessagesContent_title);
  }, [messages]);

  return <div className={styles.title}>{title}</div>;
}
