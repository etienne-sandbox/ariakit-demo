import { AppleLogo, DiscordLogo, FigmaLogo, RedditLogo, SlackLogo, TwitterLogo, XLogo } from "@phosphor-icons/react";
import { Select, TSelectItem } from "./Select";

const ITEMS: TSelectItem[] = [
  { value: "figma", title: "Figma", icon: <FigmaLogo /> },
  { value: "reddit", title: "Reddit", icon: <RedditLogo /> },
  { value: "discord", title: "Discord", icon: <DiscordLogo /> },
  { value: "slack", title: "Slack", icon: <SlackLogo /> },
  { value: "apple", title: "Apple", icon: <AppleLogo /> },
  { value: "twitter", title: "Twitter", icon: <TwitterLogo />, disabled: true },
  { value: "x", title: "X", icon: <XLogo /> },
];

export function App() {
  return (
    <div className="p-4 flex gap-4">
      <Select label="Company" items={ITEMS} />
    </div>
  );
}
