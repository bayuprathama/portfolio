import { useState } from "react";
import SideBarItem from "./SideBarItem";
import styles from "./SideBar.module.css";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const sideBarLeftValue = isOpen ? "translate-x-0" : "-translate-x-full";
  const toggleSideBar = (e) => {
    e.preventDefault();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <>
      <div
        className={`icons fixed hidden h-screen transition-all duration-200 ease-in-out ${sideBarLeftValue} left-0 w-16 flex-col items-center justify-center text-secondary-text xl:flex`}
      >
        <nav className="flex flex-col gap-8">
          <SideBarItem link="#instagram">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_8_28)">
                <path
                  d="M14.1667 1.66665H5.83335C3.53217 1.66665 1.66669 3.53213 1.66669 5.83332V14.1666C1.66669 16.4678 3.53217 18.3333 5.83335 18.3333H14.1667C16.4679 18.3333 18.3334 16.4678 18.3334 14.1666V5.83332C18.3334 3.53213 16.4679 1.66665 14.1667 1.66665Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3333 9.47498C13.4362 10.1685 13.3177 10.8768 12.9948 11.4992C12.6719 12.1215 12.1609 12.6262 11.5347 12.9414C10.9084 13.2566 10.1987 13.3663 9.50647 13.2549C8.81425 13.1435 8.17478 12.8167 7.67901 12.321C7.18324 11.8252 6.85642 11.1857 6.74504 10.4935C6.63365 9.80128 6.74337 9.09156 7.05859 8.4653C7.3738 7.83903 7.87847 7.3281 8.5008 7.00519C9.12313 6.68227 9.83144 6.56381 10.525 6.66665C11.2324 6.77155 11.8874 7.1012 12.3931 7.60691C12.8988 8.11261 13.2284 8.76755 13.3333 9.47498Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5833 5.41665H14.5916"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_8_28">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </SideBarItem>
          <SideBarItem link="#github">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_81_6)">
                <path
                  d="M13.3334 18.3333V15.1083C13.3646 14.711 13.3109 14.3115 13.1759 13.9365C13.0408 13.5615 12.8275 13.2195 12.55 12.9333C15.1667 12.6417 17.9167 11.65 17.9167 7.1C17.9165 5.93652 17.4689 4.81766 16.6667 3.975C17.0466 2.95709 17.0197 1.83196 16.5917 0.833332C16.5917 0.833332 15.6084 0.541666 13.3334 2.06667C11.4234 1.54902 9.41001 1.54902 7.50002 2.06667C5.22502 0.541666 4.24169 0.833332 4.24169 0.833332C3.81367 1.83196 3.78681 2.95709 4.16669 3.975C3.35846 4.82391 2.91046 5.95288 2.91669 7.125C2.91669 11.6417 5.66669 12.6333 8.28335 12.9583C8.00918 13.2416 7.79774 13.5795 7.66278 13.9499C7.52782 14.3204 7.47236 14.7151 7.50002 15.1083V18.3333M7.50002 15.8333C3.33335 17.0833 3.33335 13.75 1.66669 13.3333L7.50002 15.8333Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_81_6">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </SideBarItem>
          <SideBarItem link="#linkedin">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3333 6.66667C14.6594 6.66667 15.9312 7.19346 16.8688 8.13114C17.8065 9.06882 18.3333 10.3406 18.3333 11.6667V17.5H15V11.6667C15 11.2246 14.8244 10.8007 14.5118 10.4882C14.1993 10.1756 13.7753 10 13.3333 10C12.8913 10 12.4674 10.1756 12.1548 10.4882C11.8422 10.8007 11.6666 11.2246 11.6666 11.6667V17.5H8.33331V11.6667C8.33331 10.3406 8.8601 9.06882 9.79778 8.13114C10.7355 7.19346 12.0072 6.66667 13.3333 6.66667V6.66667Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.00002 7.5H1.66669V17.5H5.00002V7.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.33335 5.00001C4.25383 5.00001 5.00002 4.25381 5.00002 3.33334C5.00002 2.41286 4.25383 1.66667 3.33335 1.66667C2.41288 1.66667 1.66669 2.41286 1.66669 3.33334C1.66669 4.25381 2.41288 5.00001 3.33335 5.00001Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SideBarItem>
          <SideBarItem link="#twitter">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_8_26)">
                <path
                  d="M19.1666 2.83333C18.3686 3.39622 17.4851 3.82675 16.55 4.10833C16.0481 3.53125 15.3811 3.12224 14.6392 2.9366C13.8973 2.75096 13.1162 2.79766 12.4017 3.07037C11.6872 3.34309 11.0737 3.82866 10.6441 4.46142C10.2146 5.09419 9.98973 5.84361 9.99998 6.60833V7.44166C8.53551 7.47963 7.08437 7.15484 5.77582 6.4962C4.46727 5.83756 3.34191 4.86552 2.49998 3.66666C2.49998 3.66666 -0.833354 11.1667 6.66665 14.5C4.95042 15.665 2.90594 16.2491 0.833313 16.1667C8.33331 20.3333 17.5 16.1667 17.5 6.58333C17.4992 6.35121 17.4769 6.11966 17.4333 5.89166C18.2838 5.0529 18.884 3.99392 19.1666 2.83333V2.83333Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_8_26">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.333328)"
                  />
                </clipPath>
              </defs>
            </svg>
          </SideBarItem>
          <SideBarItem link="#mail">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33335 3.99999H16.6667C17.5834 3.99999 18.3334 4.74999 18.3334 5.66666V15.6667C18.3334 16.5833 17.5834 17.3333 16.6667 17.3333H3.33335C2.41669 17.3333 1.66669 16.5833 1.66669 15.6667V5.66666C1.66669 4.74999 2.41669 3.99999 3.33335 3.99999Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.3334 5.66666L10 11.5L1.66669 5.66666"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SideBarItem>
        </nav>

        <div
          className={`${styles.chevIcon} absolute -right-10 text-primary-text transition-all duration-100 ease-in hover:translate-x-1 hover:text-primary-green`}
        >
          <button onClick={toggleSideBar} className="p-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
