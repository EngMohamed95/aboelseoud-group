import groupLogo from "../مجموعة ابو السعود/10.png";
import groupLogoWhite from "../مجموعة ابو السعود/10-2.png";
import meatLogo from "../ابو السعود للحوم المجمدة/9.png";
import petroleumLogo from "../ابو السعود للمواد البترولية/ابو-السعود-لنقل-المواد-البترولية (1).png";
import cementLogo from "../جبل/80.png";

export type BrandKey = "group" | "maritime" | "meat" | "cement";

export interface BrandTheme {
  key: BrandKey;
  logo: string;
  logoOnDark?: string;
  primary: string;
  secondary: string;
  accent: string;
  soft: string;
  dark: string;
}

export const brandThemes: Record<BrandKey, BrandTheme> = {
  group: {
    key: "group",
    logo: groupLogo,
    logoOnDark: groupLogoWhite,
    primary: "#1bb6e8",
    secondary: "#0f172a",
    accent: "#39c8f0",
    soft: "rgba(27, 182, 232, 0.1)",
    dark: "#0f172a",
  },
  maritime: {
    key: "maritime",
    logo: petroleumLogo,
    primary: "#174f49",
    secondary: "#ff6b00",
    accent: "#ff8a1d",
    soft: "rgba(255, 107, 0, 0.1)",
    dark: "#103c37",
  },
  meat: {
    key: "meat",
    logo: meatLogo,
    primary: "#76c900",
    secondary: "#6f7275",
    accent: "#93df19",
    soft: "rgba(118, 201, 0, 0.12)",
    dark: "#285d14",
  },
  cement: {
    key: "cement",
    logo: cementLogo,
    primary: "#e9e86f",
    secondary: "#050505",
    accent: "#f0ef86",
    soft: "rgba(233, 232, 111, 0.16)",
    dark: "#242408",
  },
};

export function getBrandForPath(pathname: string): BrandTheme {
  if (pathname.startsWith("/sectors/maritime")) return brandThemes.maritime;
  if (pathname.startsWith("/sectors/meat")) return brandThemes.meat;
  if (pathname.startsWith("/sectors/cement")) return brandThemes.cement;
  return brandThemes.group;
}
