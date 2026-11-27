import Image from "next/image";

import { BlurShimmerText } from "@/components/blur-shimmer-text";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col py-8">
      <div className="flex items-center gap-4">
        <Image
          src="/images/avatar.jpg"
          alt="Naveen Hemanth"
          width={55}
          height={55}
          quality={90}
          priority
          className="rounded-full object-cover ring-1 ring-accent select-none dark:ring-0"
        />
        <div>
          <h1 className="font-sans text-lg font-normal tracking-[-0.04em]">
            Naveen Hemanth
          </h1>
          <BlurShimmerText
            texts={["AI Engineer", "Full-Stack", "Open to work"]}
            blur={4}
            interval={2}
            className="font-sans tracking-[-0.04em] text-muted-foreground"
          />
        </div>
      </div>
    </div>
  );
}
