import IconLinks, { type IconMap } from "./IconLinks";
import {
  FaInstagram,
  FaFacebook,
  FaGlobe,
  FaSteam,
  FaDiscord,
  FaYoutube,
  FaMastodon,
  FaReddit,
} from "react-icons/fa";
import {
  FaBluesky,
  FaXTwitter,
  FaLinkedin,
  FaVimeoV,
  FaTiktok,
  FaPatreon,
} from "react-icons/fa6";
import { SiItchdotio, SiLinktree, SiWebtoon } from "react-icons/si";

// Add a platform here and it becomes a valid key
export const socialIcons = {
  website: ["Sitio web", FaGlobe],
  instagram: ["Instagram", FaInstagram],
  facebook: ["Facebook", FaFacebook],
  twitter: ["Twitter", FaXTwitter],
  bluesky: ["Bluesky", FaBluesky],
  mastodon: ["Mastodon", FaMastodon],
  youtube: ["YouTube", FaYoutube],
  vimeo: ["Vimeo", FaVimeoV],
  linkedin: ["LinkedIn", FaLinkedin],
  discord: ["Discord", FaDiscord],
  itch: ["itch.io", SiItchdotio],
  steam: ["Steam", FaSteam],
  linktree: ["Linktree", SiLinktree],
  tiktok: ["TikTok", FaTiktok],
  webtoon: ["Webtoon", SiWebtoon],
  patreon: ["Patreon", FaPatreon],
  reddit: ["Reddit", FaReddit],
} satisfies IconMap<string>;

export type TeamLinks = Partial<Record<keyof typeof socialIcons, string>>;

function SocialIcons({
  links,
  className,
}: {
  links: TeamLinks;
  className?: string;
}) {
  return <IconLinks links={links} icons={socialIcons} className={className} />;
}

export default SocialIcons;
