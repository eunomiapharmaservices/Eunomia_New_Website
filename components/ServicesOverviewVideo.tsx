"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import styles from "./ServicesOverviewVideo.module.css";

type Props = { src?: string; poster?: string; label?: string; title?: string; caption?: string };
export function ServicesOverviewVideo({
 src = "/videos/eunomia-services-overview-closeup.mp4", poster = "/videos/eunomia-services-overview-closeup-poster.jpg",
 label = "Eunomia healthcare compliance services overview, in English with embedded captions",
 title = "Compliance support, explained.", caption = "44-second introduction · English · Captions included",
}: Props = {}) {
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
          width={540}
          height={840}
          controls
          playsInline
          preload="none"
          poster={poster}
          aria-label={label}
          onPlay={() => setPlaying(true)}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support this video. <a href={src}>Watch the video</a>.
        </video>
        {!playing && (
          <button className={styles.play} type="button" onClick={playVideo} aria-label={`Play ${title}`}>
            <Play aria-hidden="true" fill="currentColor" />
          </button>
        )}
      </div>
      <figcaption className={styles.caption}>
        <strong>{title}</strong>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}
