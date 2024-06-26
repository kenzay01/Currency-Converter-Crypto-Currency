import useNavigation from "../hooks/use-navigation";

export default function Link({ to, children }) {
  const { navigate } = useNavigation();
  return (
    <a
      className={`link ${to === window.location.pathname ? "active" : ""}`}
      href={to}
      onClick={(event) => {
        event.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}
