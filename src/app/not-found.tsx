import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-intro shell">
      <div className="eyebrow">404 / PAGE NOT FOUND</div>
      <h1>This page isn’t here.</h1>
      <p>The link may be incorrect, or the page may have moved.</p>
      <Link className="button primary" href="/">
        Back home
      </Link>
    </section>
  );
}
