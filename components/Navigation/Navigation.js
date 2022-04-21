import { useState } from "react";
import NavItem from "./NavItem";
import styles from "./Navigation.module.scss";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    !isOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  };
  const mobileMenuVisibility = isOpen ? "translate-x-0" : "translate-x-full";

  return (
    <>
      <header
        className={`mx-auto py-9 px-8 font-inter text-secondary-text md:px-20 lg:px-28 xl:px-10 `}
      >
        <div className="trans mx-auto flex h-full max-w-[90rem] items-center justify-between">
          <div className="flex cursor-pointer items-center gap-2 text-primary-green transition-all duration-150 ease-in hover:transition-all hover:duration-200 hover:ease-in-out">
            <svg
              className="hover:fill-primary-green-tint"
              width="39"
              height="44"
              viewBox="0 0 39 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8455 1L1.34546 11.2667V32.2667L19.8455 43L38.3455 32.7333V11.7333L19.8455 1Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M23.6218 18.152L10.6048 17.0364L10.2655 20.8349L11.858 20.9714L12.0458 18.8686L21.8778 19.7113L21.69 21.814L23.2825 21.9505L23.6218 18.152ZM23.1186 25.3486L21.3737 25.1991C21.108 25.9873 20.6268 26.5841 19.9301 26.9891C19.2327 27.4032 18.4223 27.5707 17.4992 27.4916L14.9927 27.2767C14.0418 27.1952 13.2597 26.8913 12.6462 26.3648C12.0319 25.8474 11.6591 25.1775 11.5279 24.3552L9.82465 24.2092C9.98471 25.1251 10.2946 25.9263 10.7542 26.6127C11.2046 27.2984 11.7791 27.8443 12.4778 28.2505C13.1664 28.6649 13.9538 28.9101 14.84 28.986L17.3465 29.2009C18.6944 29.3164 19.8727 29.0392 20.8813 28.3693C21.8808 27.6985 22.6265 26.6916 23.1186 25.3486Z"
                fill="currentColor"
              />
              <path
                d="M16.84 18.1802L29.857 17.0645L30.1962 20.863L28.6037 20.9995L28.4159 18.8968L18.584 19.7395L18.7718 21.8422L17.1792 21.9787L16.84 18.1802ZM17.3432 25.3768L19.088 25.2272C19.2657 25.7588 19.5381 26.2048 19.9052 26.5652C20.2814 26.9248 20.7281 27.1873 21.2453 27.3525C21.7716 27.517 22.344 27.5728 22.9626 27.5197L25.4691 27.3049C26.1061 27.2503 26.6691 27.0972 27.1583 26.8457C27.6475 26.5942 28.0455 26.2593 28.3524 25.8412C28.6592 25.423 28.853 24.937 28.9338 24.3833L30.6371 24.2374C30.477 25.1533 30.1672 25.9545 29.7075 26.6409C29.2571 27.3266 28.6826 27.8724 27.984 28.2787C27.2953 28.6931 26.5079 28.9383 25.6217 29.0142L23.1153 29.2291C21.7674 29.3446 20.5891 29.0674 19.5804 28.3974C18.581 27.7267 17.8352 26.7198 17.3432 25.3768Z"
                fill="currentColor"
              />
              <path
                d="M25.53 23.7503C26.0475 23.7503 26.467 23.3393 26.467 22.8323C26.467 22.3253 26.0475 21.9143 25.53 21.9143C25.0124 21.9143 24.5929 22.3253 24.5929 22.8323C24.5929 23.3393 25.0124 23.7503 25.53 23.7503Z"
                fill="currentColor"
              />
              <path
                d="M14.8205 23.7435C15.338 23.7435 15.7576 23.3325 15.7576 22.8255C15.7576 22.3185 15.338 21.9075 14.8205 21.9075C14.303 21.9075 13.8834 22.3185 13.8834 22.8255C13.8834 23.3325 14.303 23.7435 14.8205 23.7435Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <nav>
            <ul
              data-type="mobile__nav"
              className={`${styles.navList} ${mobileMenuVisibility} md:translate-x-0`}
            >
              <NavItem name="Blog" link="#blog" variant="standard" />
              <NavItem name="About Me" link="#about" variant="standard" />
              <NavItem name="My Work" link="#mywork" variant="standard" />
              <NavItem name="Contact" link="#contact" variant="standard" />
              <NavItem name="Resume" link="#href" variant="cta" />
            </ul>
          </nav>
          <button
            aria-expanded={Boolean(isOpen)}
            onClick={handleMenuClick}
            className={`${styles.menuButton} absolute top-10 right-8 z-30 md:right-20 md:hidden`}
          ></button>
          {/* <div
            className={`${mobileMenuVisibility} fixed top-0 left-0 z-20 hidden h-full w-full overflow-hidden backdrop-blur-sm`}
          ></div> */}
        </div>
      </header>
    </>
  );
}
