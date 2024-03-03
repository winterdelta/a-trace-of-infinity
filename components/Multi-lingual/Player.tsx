"use client";

import { PlayFilledAlt } from "@carbon/icons-react";
import styles from "./Player.module.css";
import { PauseFilled } from "@carbon/icons-react";
import { IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const en = IBM_Plex_Mono({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["300"],
});

interface PlayerProps {
  play_status: boolean;
  play_ctrl: (value: boolean) => void;
  languages: { name: string; font: string }[];
  currentAudioSource: string;
}

export default function Player({
  play_status,
  currentAudioSource,
  play_ctrl,
}: PlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [recordingStatus, setRecordingStatus] = useState<String>("inactive");
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);

  // Inside the Player component
  const handleClick = () => {
    // Save the current time before pausing or playing
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }

    if (!play_status) {
      play_ctrl(true);
      if (audioRef.current) {
        audioRef.current
          .play()
          .catch((error) => console.log("Playback failed due to", error));
      }
    } else {
      play_ctrl(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  };

  React.useEffect(() => {
    if (audioRef.current) {
      const previousDuration = duration;
      const previousCurrentTime = currentTime;
      const relativePosition =
        previousDuration > 0 ? previousCurrentTime / previousDuration : 0;

      audioRef.current.src = currentAudioSource;
      audioRef.current.load();

      audioRef.current.onloadedmetadata = () => {
        const newDuration = audioRef.current?.duration || 0;
        setDuration(newDuration);
        const newCurrentTime = newDuration * relativePosition;
        setCurrentTime(newCurrentTime);

        if (audioRef.current) {
          audioRef.current.currentTime = newCurrentTime;
          if (play_status) {
            audioRef.current
              .play()
              .catch((error) => console.log("Playback failed due to", error));
          }
        }
      };

      // Update the current time when the audio is playing
      audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
      };

      if (play_status) {
        audioRef.current.currentTime = currentTime;
        audioRef.current
          .play()
          .catch((error) => console.log("Playback failed due to", error));
      }
      // Set the duration when the audio source changes
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current?.duration || 0);
      };
      // Update the current time when the audio is playing
      audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
      };
    }
  }, [currentAudioSource, play_status]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (recordingStatus === "recording") {
      if (startTime === 0) {
        setStartTime(performance.now());
      }
      intervalId = setInterval(() => {
        const elapsedMilliseconds = performance.now() - startTime;
        setElapsedTime(elapsedMilliseconds);
      }, 1);
    }

    return () => clearInterval(intervalId);
  }, [recordingStatus, startTime]);

  useEffect(() => {
    if (recordingStatus === "inactive") {
      setElapsedTime(0);
      setStartTime(0);
    }
  }, [recordingStatus]);

  function formatTime(
    currentTime: number,
    duration: number
  ): {
    minutesString: string;
    secondsString: string;
    remainingMilliseconds: string;
    totalRemainingSeconds: number;
  } {
    const remainingTime = duration - currentTime;
    const totalRemainingSeconds = Math.floor(remainingTime);
    const now = new Date(remainingTime * 1000);
    const minutesString = now.getUTCMinutes().toString().padStart(2, "0");
    const secondsString = now.getUTCSeconds().toString().padStart(2, "0");
    const remainingMilliseconds = now
      .getUTCMilliseconds()
      .toString()
      .padStart(3, "0");
    return {
      minutesString,
      secondsString,
      remainingMilliseconds,
      totalRemainingSeconds,
    };
  }

  const {
    minutesString,
    secondsString,
    remainingMilliseconds,
    totalRemainingSeconds,
  } = formatTime(currentTime, duration);

  return (
    <div className={styles.player}>
      <audio ref={audioRef}>
        <source src={currentAudioSource} type="audio/mpeg" />
      </audio>
      <button
        onClick={handleClick}
        onEnded={() => play_ctrl(false)}
        className={`${play_status ? styles.playing : styles.play_btn} ${
          !play_status && styles.animate_rotate_clockwise
        }`}
      >
        <div
          className={`${styles.icon} ${
            !play_status && styles.animate_rotate_anti_clockwise
          }`}
        >
          {!play_status ? (
            <PlayFilledAlt size={24} />
          ) : (
            <PauseFilled size={24} />
          )}
        </div>
      </button>
      <div className={styles.time}>
        <div className={en.className}>
          {minutesString}
          <span className={styles.cursor}>
            <span
              className={`${
                play_status && totalRemainingSeconds % 2 === 0
                  ? styles.cursor_on
                  : styles.cursor_off
              }`}
            >
              :
            </span>
          </span>
          {secondsString}
        </div>
      </div>
      <div className={styles.di}>
        <div className={styles.faviD}>
          <Image
            src={"/dolby-icon-grey.svg"}
            className={styles.imageD}
            alt=""
            fill={true}
            quality={100}
            style={{
              objectFit: "cover",
              overflow: "hidden",
            }}
            sizes="(max-width: 768px) 250px, 400px"
          />
        </div>
        <div className={styles.dolby}>Dolby Enhance</div>
      </div>
    </div>
  );
}
