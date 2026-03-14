import PageHero from '@/components/PageHero';

const projectTypes = [
  'Premium residences and villas',
  'Commercial complexes and office spaces',
  'Institutional and public-use buildings',
  'Interior modernization and remodeling',
  'Ceramic and finishing packages'
];

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        title="Our Projects"
        subtitle="A portfolio-led approach that combines engineering quality, functional design, and client-first execution."
      />
      <section className="container section prose">
        <p>
          Our body of work spans residential and commercial construction with integrated fit-out and
          finishing services.
        </p>
        <ul>
          {projectTypes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
