import Head from "next/head";
import SideBar from "./SideBar";
import NavBar from "./NavBar/NavBar";
import HeroContent from "./HeroContent/HeroContent";
export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />

        <title>{title}</title>
        <meta
          name="description"
          content="Bayu Prathama front end web engineer portfolio and resume"
        />
        <meta
          name="keywords"
          content="front end, web engineer, portfolio, ui/ux, web designer, resume, bayu prathama"
        />
      </Head>
      <NavBar />
      <SideBar />

      <main className="min-h-screen px-8 md:px-20 lg:px-28 xl:px-52">
        <div className="mx-auto max-w-6xl text-secondary-text">
          <HeroContent />
          <h1 className="mb-8 bg-primary-green p-4 text-center text-xl font-bold text-primary-bg">
            !!!SITE IS UNDER CONSTRUCTION!!!
          </h1>
        </div>
      </main>
    </>
  );
}

Layout.defaultProps = {
  title: "Bayu Prathama",
};
