"use client";

import { useEffect, useState, useCallback } from "react";
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

  return (
    <div className={styles.title}>
      <div className={`${styles.mai} ${sans.className}`}>{title}</div>
    </div>
  );
}

// return (
// <div className={styles.ai}>
//       <div>
//         {messages.map((m) => (
//           <div className={styles.mai} key={m.id}>
//             <div className={sans.className}>
//               <span>{m.content}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     <div className={styles.ai}>
//       <input
//         value={input}
//         onChange={(event) => {
//           setInput(event.target.value);
//         }}
//         onKeyDown={async (event) => {
//           if (event.key === "Enter") {
//             append({ content: input, role: "user" });
//           }
//         }}
//       />

//       {messages.map((m) => (
//         <div className={`${styles.mai} ${sans.className}`} key={m.id}>
//           {m.content}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function AI() {
//   const { messages, append } = useChat({
//     api: "/api/lead-header",
//   });

//   const handleSubmit = useCallback(
//     (
//       // e: React.FormEvent<HTMLFormElement>,
//       { options, functions, function_call }: ChatRequestOptions = {},
//       metadata?: Object
//     ) => {
//       // e.preventDefault();
//       append(
//         {
//           content: "Respond: ",
//           role: "user",
//           createdAt: new Date(),
//         },
//         { options, functions, function_call }
//       );
//     },
//     [append]
//   );

//   useEffect(() => {
//     append({
//       role: "system",
//       content: "",
//     });

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div className={styles.ai}>
//       <div>
//         {messages.map((m) => (
//           <div className={styles.mai} key={m.id}>
//             <div className={sans.className}>
//               <span>{m.content}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
