import useNavigation from "../hooks/use-navigation";
export default function Router({ to, children }) {
  const { currentPath } = useNavigation();
  if (currentPath === to) {
    return children;
  }
  return null;
}
