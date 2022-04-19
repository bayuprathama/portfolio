import styles from "./HeroContent.module.css";
export default function HeroContent() {
  return (
    <section className="min-h-screen pt-16 font-inter md:pt-24">
      <div className="space-y-5">
        <h4 className="pl-1 font-roboto-mono leading-relaxed text-primary-green">
          Halo, my name is
        </h4>
        <h2
          className={`text-6xl font-bold text-secondary-text ${styles.fontClamp}`}
        >
          Bayu Prathama🦉
        </h2>
        <h1
          className={`${styles.fontClamp} text-7xl font-bold leading-tight text-primary-text md:max-w-3xl lg:max-w-none`}
        >
          I build things for the web 🚀
        </h1>
        <h3 className="max-w-lg text-lg leading-normal text-secondary-text">
          I&apos;m a front end web engineer based on Bali, currently focusing on
          building network and helping small business create their{" "}
          <span className="text-primary-green">awesome website!</span>
        </h3>
      </div>

      <div className="mt-12">
        <a
          className={`inline-block cursor-pointer rounded-md border border-accent-pink-darker py-4 px-8 font-roboto-mono text-sm font-medium uppercase tracking-widest text-primary-text duration-200 hover:border-accent-pink hover:bg-accent-pink-tint hover:transition-all`}
        >
          <div className="flex items-center gap-5">
            My work{" "}
            <div className="inline-block">
              <svg
                width="20"
                height="20"
                viewBox="0 0 38 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.0607 13.0607C37.6464 12.4749 37.6464 11.5251 37.0607 10.9393L27.5147 1.3934C26.9289 0.807609 25.9792 0.80761 25.3934 1.3934C24.8076 1.97918 24.8076 2.92893 25.3934 3.51472L33.8787 12L25.3934 20.4853C24.8076 21.0711 24.8076 22.0208 25.3934 22.6066C25.9792 23.1924 26.9289 23.1924 27.5147 22.6066L37.0607 13.0607ZM1.31134e-07 13.5L36 13.5L36 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
