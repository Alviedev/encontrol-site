import IconLinks, { type IconMap } from "./IconLinks";
import { FaSteam, FaXbox, FaPlaystation, FaGlobe } from "react-icons/fa";
import {
  SiGogdotcom,
  SiItchdotio,
  SiNintendoswitch,
  SiKickstarter,
} from "react-icons/si";

// Add a store here and it becomes a valid key
export const storeIcons = {
  steam: ["Steam", FaSteam],
  gog: ["GOG", SiGogdotcom],
  itch: ["itch.io", SiItchdotio],
  playstation: ["PlayStation", FaPlaystation],
  xbox: ["Xbox", FaXbox],
  switch: ["Nintendo Switch", SiNintendoswitch],
  kickstarter: ["Kickstarter", SiKickstarter],
  website: ["Sitio web", FaGlobe],
} satisfies IconMap<string>;

export type StoreLinks = Partial<Record<keyof typeof storeIcons, string>>;

function StoreIcons({
  store,
  className,
}: {
  store: StoreLinks;
  className?: string;
}) {
  return <IconLinks links={store} icons={storeIcons} className={className} />;
}

export default StoreIcons;
