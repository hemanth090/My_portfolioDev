import { SITE_CONFIG } from "@/config/site";
import GitHubStars from "@/components/github-stars";

export default function NavItemGitHub() {
  return <GitHubStars href={SITE_CONFIG.links.github} />;
}
