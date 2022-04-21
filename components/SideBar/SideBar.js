import { useState } from "react";
import SideBarItem from "./SideBarItem";
import styles from "./SideBar.module.css";
import Icon from "./Icons/Icon";

export default function SideBar() {
  const socialMedia = [
    // icon value are matched from the icon component names
    {
      name: "Instagram",
      url: "https://www.instagram.com/bayemprathama/",
      icon: "InstagramIcon",
    },
    {
      name: "Mail",
      url: "mailto:dev.bayuprathama@gmail.com",
      icon: "MailIcon",
    },
    {
      name: "Github",
      url: "https://github.com/bayuprathama",
      icon: "GithubIcon",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/gdbayuprathama",
      icon: "TwitterIcon",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/i-gede-bayu-prathama-6568961b2/",
      icon: "LinkedinIcon",
    },
  ];

  // const [isOpen, setIsOpen] = useState(false);
  // const sideBarLeftValue = isOpen ? "translate-x-0" : "-translate-x-full";
  // const toggleSideBar = (e) => {
  //   e.preventDefault();
  //   setIsOpen((prevIsOpen) => !prevIsOpen);
  // };

  // conditional css props value for chevIcon
  // const chevIconOrientation = !isOpen ? "" : "-scale-x-100";
  // const chevAnimation = !isOpen
  //   ? "hover:translate-x-1"
  //   : "hover:-translate-x-1";

  return (
    <>
      <div
        className={`icons fixed -top-0 left-6 hidden h-screen w-16 flex-col items-center justify-center text-secondary-text xl:flex`}
      >
        <nav className="flex flex-col gap-8">
          {socialMedia.map((el, idx) => (
            <SideBarItem key={idx} link={el.url} icon={el.icon}>
              <Icon name={el.icon} />
            </SideBarItem>
          ))}
        </nav>
        {/* 
        <div
          className={`${styles.chevIcon} ${chevIconOrientation} ${chevAnimation} absolute -right-10 text-secondary-text transition-all duration-100 ease-in  hover:text-primary-green`}
        >
          <button onClick={toggleSideBar} className="p-2">
            <Icon name="ChevronIcon" />
          </button>
        </div> */}
      </div>
    </>
  );
}
