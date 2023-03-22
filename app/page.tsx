import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Hello Next</h2>
      <Link href={"/about"}>About Page</Link>
      <Link href={"/users"}>Users Page</Link>
    </main>
  );
}
