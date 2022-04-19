import {
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  MailIcon,
  LinkedinIcon,
  ChevronIcon,
} from "./index";

export default function Icons({ name }) {
  switch (name) {
    case "GithubIcon":
      return <GithubIcon />;
    case "InstagramIcon":
      return <InstagramIcon />;
    case "LinkedinIcon":
      return <LinkedinIcon />;
    case "MailIcon":
      return <MailIcon />;
    case "TwitterIcon":
      return <TwitterIcon />;
    case "ChevronIcon":
      return <ChevronIcon />;
  }
}
