import Link from "./Link";

export default function SideBar({ className }) {
  const links = [
    { label: "Main", to: "/Currency-Converter-Crypto-Currency/" },
    {
      label: "Currency Converter",
      to: "/Currency-Converter-Crypto-Currency/globalCurrency",
    },
    {
      label: "Crypto Currency",
      to: "/Currency-Converter-Crypto-Currency/cryptoCurrency",
    },
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
