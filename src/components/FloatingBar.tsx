// FloatingDockDemo.tsx
import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandX, // Twitter (X)
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-8 w-8 dark:text-neutral-300" />, // bigger
      href: "https://github.com/Ayon203008",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-8 w-8 dark:text-neutral-300" />,
      href: "https://www.linkedin.com/in/abidayon/",
    },
    {
      title: "Facebook",
      icon: <IconBrandFacebook className="h-8 w-8 dark:text-neutral-300" />,
      href: "https://www.facebook.com/ayon.ayon.583234",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-8 w-8  dark:text-neutral-300" />,
      href: "https://twitter.com/your-username",
    },
  ];

  return (
    <div className="flex justify-center mt-6 md:mt-8">
      <FloatingDock
        mobileClassName="translate-y-6"
        items={links}
        className="scale-125" // ⬅️ makes the whole dock bigger
      />
    </div>
  );
}
