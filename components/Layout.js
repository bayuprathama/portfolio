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
          <p className="w-24">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quaerat necessitatibus non ipsam tenetur a ullam
            mollitia cupiditate eius eligendi nobis odit, molestias, modi ad
            ipsum! Nihil corporis consequatur fugiat harum, ducimus, atque
            debitis voluptate quia minus perspiciatis eligendi veritatis! Cum
            quis recusandae eius accusantium voluptatibus autem similique
            doloribus molestias.
          </p>
        </div>
      </main>
    </>
  );
}

Layout.defaultProps = {
  title: "Bayu Prathama",
};
