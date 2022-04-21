export default function NavItem({ name, link, variant }) {
  const itemVariants = {
    standard: "p-1 hover:text-primary-text",
    cta: "rounded border border-primary-green px-6 py-2 text-primary-green hover:bg-primary-green-tint focus:bg-primary-green-tint ",
  };
  return (
    <>
      <li>
        <a
          className={`text-base font-medium hover:transition-all hover:duration-150 hover:ease-in-out ${itemVariants[variant]}`}
          href={link}
        >
          {name}
        </a>
      </li>
    </>
  );
}
