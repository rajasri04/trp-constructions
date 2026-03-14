export default function PageHero({ title, subtitle }) {
  return (
    <section className="pageHero">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
