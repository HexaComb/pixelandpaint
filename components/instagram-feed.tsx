"use client";

import BeholdWidget from "@behold/react";

const INSTAGRAM_URL = "https://www.instagram.com/_pixelandpaint/";

export default function InstagramFeed() {
  const feedId = process.env.NEXT_PUBLIC_BEHOLD_FEED_ID?.trim();

  if (!feedId) {
    return (
      <div className="flex min-h-[16rem] items-center justify-center border-[3px] border-ink-navy bg-brand-yellow/40 px-6 py-10 text-center shadow-[8px_8px_0_0_#102A43]">
        <p className="max-w-md text-base leading-7 text-ink-navy/80">
          Workshop photos live on Instagram.{" "}
          <a
            className="font-extrabold underline decoration-brand-pink decoration-4 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-navy"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Follow @_pixelandpaint
          </a>{" "}
          to see the latest.
        </p>
      </div>
    );
  }

  return (
    <div className="instagram-feed min-h-[16rem] w-full border-[3px] border-ink-navy bg-canvas-cream shadow-[8px_8px_0_0_#102A43] sm:min-h-[20rem]">
      <BeholdWidget feedId={feedId} />
    </div>
  );
}
