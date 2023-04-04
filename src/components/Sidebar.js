import Link from "./Link";

export default function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Button", path: "/button" },
    { label: "Accordion", path: "/accordion" },
    { label: "Modal", path: "/modal" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        className="mb-3"
        key={link.label}
        to={link.path}
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow-y-auto flex flex-col items-start">{renderedLinks}</div>
  );
}
