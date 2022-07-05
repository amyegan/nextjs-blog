import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./layout.module.css";

export function NavLink({ href, exact = false, children, ...props }) {
  console.log("href", href);
  console.log("link props", props);
  console.log("exact", exact);
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className = styles.active;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
