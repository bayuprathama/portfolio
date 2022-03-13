export default function NavItem({ name, link }) {
  return (
    <>
      <li>
        <a
          className=" block border-b border-b-transparent p-1 transition-all duration-200 ease-in-out hover:border-primary-green  hover:text-primary-text hover:transition-all hover:duration-200 hover:ease-in-out"
          href={link}
        >
          {name}
        </a>
      </li>
    </>
  );
}
