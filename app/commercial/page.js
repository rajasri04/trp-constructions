import PageHero from '../../components/PageHero';

export default function CommercialPage() {
  return (
    <main>
      <PageHero
        title="Commercial Construction"
        subtitle="Smart, scalable commercial infrastructure with architecture-led planning and dependable delivery."
      />
      <section className="container section prose">
        <p>
          TRP Construction helps clients build commercial projects with strong architecture, modern
          execution methods, and practical building management support.
        </p>
        <p>
          From retail and office spaces to institutional projects, we focus on quality standards,
          timeline control, and value-driven outcomes.
        </p>
      </section>
    </main>
  );
}
