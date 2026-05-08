"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("@lottielab/lottie-player/react"), {
  ssr: false,
});

export function LottiePlayer({
  src,
  className,
  ariaLabel,
}: {
  src: string;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <div
      className={className}
      role="img"
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      <Lottie src={src} autoplay loop />
    </div>
  );
}
