import { XIcon as X } from "./assets/XIcon";
import { InstagramIcon as Instagram } from "./assets/InstagramIcon";
import { GithubIcon as GitHub } from "./assets/GithubIcon";
import { LinkedInIcon as LinkedIn } from "./assets/LinkedInIcon";
import type { JSX, SVGProps } from "react";

type SocialLink = {
    name: string,
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element,
    ariaLabel: string,
    href: string
}

export const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        icon: GitHub,
        ariaLabel: "Link to Sarah Dole's GitHub profile",
        href: "https://github.com/sarahdole",
    },
    {
        name: "LinkedIn",
        icon: LinkedIn,
        ariaLabel: "Link to Sarah Dole's LinkedIn profile",
        href: "https://www.linkedin.com/in/sarahdole",
    },
     {
        name: "Instagram",
        icon: Instagram,
        ariaLabel: "Link to Sarah Dole's Instagram profile",
        href: "https://www.instagram.com/sarahdole",
    },
    {
        name: "X",
        icon: X,
        ariaLabel: "Link to Sarah Dole's X profile",
        href: "https://x.com/sarahdole"
    },
]