"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import styles from "./ServicesOverviewVideo.module.css";

export function ServicesOverviewVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  async function playVideo() {
    try {
      await videoRef.current?.play();
    } catch {
      // Native controls remain available if browser playback is interrupted.
    }
  }

  return (
    <figure className={styles.figure}>
      <div className={styles.frame}>
        <video
          ref={videoRef}
          className={styles.video}
          width={1280}
          height={720}
          controls
          playsInline
          preload="none"
          poster="/videos/eunomia-services-overview-landscape-poster.jpg"
          aria-label="Eunomia healthcare compliance services overview, in English with embedded captions"
          onPlay={() => setPlaying(true)}
        >
          <source src="/videos/eunomia-services-overview-landscape.mp4" type="video/mp4" />
          Your browser does not support this video. <a href="/videos/eunomia-services-overview-landscape.mp4">Watch the services overview</a>.
        </video>
        {!playing && (
          <button className={styles.play} type="button" onClick={playVideo} aria-label="Play Eunomia services overview video">
            <Play aria-hidden="true" fill="currentColor" />
          </button>
        )}
      </div>
      <figcaption className={styles.caption}>
        <strong>Compliance support, explained.</strong>
        <span>44-second introduction · English · Captions included</span>
      </figcaption>
    </figure>
  );
}
