import { BlurShimmerText } from "@/registry/components/blur-shimmer-text";

export default function BlurShimmerTextDemo() {
  return (
    <BlurShimmerText
      texts={["AI Engineer", "Full-Stack", "Open to Work"]}
      className="text-center text-2xl font-medium"
    />
  );
}
