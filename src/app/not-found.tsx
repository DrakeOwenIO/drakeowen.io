import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-intro shell">
      <div className="eyebrow">404 / OFF THE MAP</div>
      <h1>This page isn’t here.</h1>
      <p>Let’s get you back to familiar ground.</p>
      <Link className="button primary" href="/">
        Back home
      </Link>
    </section>
  );
}
