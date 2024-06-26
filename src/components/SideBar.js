import Link from "./Link";

export default function SideBar({ className }) {
  const links = [
    { label: "Main", to: "/" },
    { label: "Currency Converter", to: "/globalCurrency" },
    { label: "Crypto Currency", to: "/cryptoCurrency" },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.to}>
        {link.label}
      </Link>
    );
  });
  return <div className={className}>{renderedLinks}</div>;
}
