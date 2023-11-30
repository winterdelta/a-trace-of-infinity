"use client";

import styles from "./page.module.css";
import { IBM_Plex_Sans } from "next/font/google";
import { Cognitive, Microscope, SendFilled } from "@carbon/icons-react";
import { useChat } from "ai/react";
import { usePathname } from "next/navigation";

const ibm = IBM_Plex_Sans({
	subsets: ["latin"],
	weight: ["200", "500", "700"],
});

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit, setInput } =
		useChat();

	const path = usePathname().substring(1).split("/")[1];

	return (
		<div className={styles.chat}>
			<div className={styles.messages}>
				<div className={styles.conversation}>
					{path !== "99034458529" ? (
						<div className={styles.message}>
							<span className={styles.messageBot}>
								<div className={styles.messageBoti}>
									<Cognitive size={16} />
								</div>
							</span>
							<div className={styles.messageBody}>
								<div className={styles.mIDb}>Atheno</div>
								<div className={styles.messageTextb}>
									Ask anything you want about the Winterdelta, the Nort-3 or
									anything else.
								</div>
							</div>
						</div>
					) : (
						<>
							<div className={styles.message}>
								<span className={styles.messageBot}>
									<div className={styles.messageBoti}>
										<Cognitive size={16} />
									</div>
								</span>
								<div className={styles.messageBody}>
									<div className={styles.mIDb}>Atheno</div>
									<div className={styles.messageTextb}>
										The following has been contextually pre-loaded:
									</div>
								</div>
							</div>
							<div className={styles.docs}>
								<div className={styles.doc}>
									<div className={styles.doct}>CV / PDF</div>
								</div>
								<div className={styles.doc}>
									<div className={styles.doct}>
										OpenAI Account Engineer - London / Job Advert
									</div>
								</div>
							</div>
						</>
					)}

					{messages.map((m) => (
						<div className='mb-4' key={m.id}>
							{m.role === "user" ? (
								<div className={styles.message}>
									<div className={styles.messageHuman}>
										<div className={styles.messageHumani}>
											<Microscope size={16} />
										</div>
										<div className={styles.messageBodyH}>
											<div className={styles.mID}>You</div>
											<div className={styles.messageText}>{m.content}</div>
										</div>
									</div>
								</div>
							) : (
								<div className={styles.message}>
									<span className={styles.messageBot}>
										<div className={styles.messageBoti}>
											<Cognitive size={16} />
										</div>
									</span>
									<div className={styles.messageBody}>
										<div className={styles.mIDb}>Atheno</div>
										<div className={styles.messageTextb}>{m.content}</div>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
			{!messages.length && (
				<div className={styles.AIHelperContainer}>
					<button
						onClick={() =>
							setInput(
								path === "99034458529"
									? "Critically evaluate the candidate"
									: "What are your products?"
							)
						}
						className={styles.AIHelper}
					>
						<div className={ibm.className}>
							{path === "99034458529"
								? "Critically evaluate the candidate"
								: "What are your products?"}
						</div>
						<div className={styles.AIHelperi}>
							<Microscope size={16} />
						</div>
					</button>
				</div>
			)}
			<form onSubmit={handleSubmit} className={styles.userInput}>
				<input
					type='text'
					value={input}
					onChange={handleInputChange}
					placeholder='Message...'
					className={`${styles.textarea} ${ibm.className}`}
				/>
				<button type='submit' className={styles.submit}>
					<SendFilled size={16} />
				</button>
			</form>
		</div>
	);
}
