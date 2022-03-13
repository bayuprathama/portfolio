export default function SideBarItem({ link, children }) {
  return (
    <a
      href={link}
      className="p-2 text-secondary-text transition duration-200 ease-out hover:-translate-y-[1px] hover:text-primary-green hover:transition hover:duration-200 hover:ease-in"
    >
      {children}
    </a>
  );
}
