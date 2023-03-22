import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>NextJS 13</h2>
      <br />
      <nav>
        <Link href={"/about"}>About Page</Link>
        <Link href={"/users"}>Users Page</Link>
        <Link href={"/users-static"}>Users Static page</Link>
      </nav>
    </main>
  );
}
