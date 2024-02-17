"use client";

import { useChat } from "ai/react";
import { useEffect, useCallback } from "react";
import styles from "./Copy.module.css";
import { ChatRequestOptions } from "ai";
import { IBM_Plex_Serif, IBM_Plex_Sans } from "next/font/google";

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

const fetcher = (url: RequestInfo | URL) => fetch(url).then((r) => r.json());

export default function AI() {
  const { messages, append } = useChat({
    api: "/api/lead-header",
  });

  const handleSubmit = useCallback(
    (
      // e: React.FormEvent<HTMLFormElement>,
      { options, functions, function_call }: ChatRequestOptions = {},
      metadata?: Object
    ) => {
      // e.preventDefault();
      append(
        {
          content: "Respond: ",
          role: "user",
          createdAt: new Date(),
        },
        { options, functions, function_call }
      );
    },
    [append]
  );

  useEffect(() => {
    append({
      role: "system",
      content: "",
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.ai}>
      <div>
        {messages.map((m) => (
          <div className={styles.mai} key={m.id}>
            <div className={sans.className}>
            <span>{m.content}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
