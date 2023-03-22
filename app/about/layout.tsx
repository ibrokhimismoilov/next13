import classes from "./style.module.css";

export const metadata = {
  title: "About page",
  description: "About page description",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About Navbar</nav>
      <main className={classes.main}>{children}</main>
    </>
  );
}
