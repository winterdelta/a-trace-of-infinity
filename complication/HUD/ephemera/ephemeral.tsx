import { Draw } from "@carbon/icons-react";
import { motion } from "framer-motion";
import styles from "./ephemeral.module.css";

export default function Ephemeral() {
  return (
    <div>
      <motion.div
        key="microphone"
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.2 }}
        className={styles.i}
      >
        <Draw size={16} />
      </motion.div>
    </div>
  );
}
