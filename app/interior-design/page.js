import PageHero from '../../components/PageHero';

export default function InteriorDesignPage() {
  return (
    <main>
      <PageHero
        title="Interior Design"
        subtitle="Living rooms, dining areas, modular kitchens, bedrooms, wardrobes, and complete style-driven interiors."
      />
      <section className="container section prose">
        <p>
          Our interior services deliver luxurious and functional spaces through a transparent,
          customer-focused design process.
        </p>
        <p>
          With a strong eye for detail and material quality, we create personalized interiors that
          align with your lifestyle, budget, and long-term utility.
        </p>
      </section>
    </main>
  );
}
