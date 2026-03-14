import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { services } from '@/lib/siteData';

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Services"
        subtitle="Integrated construction and design capabilities for residential, commercial, interior, and ceramic requirements."
      />
      <section className="container section cards">
        {services.map((service) => (
          <article className="card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            <Link href={service.href}>Visit service page →</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
