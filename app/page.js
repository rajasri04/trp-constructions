import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { company, services, testimonials } from '@/lib/siteData';

const highlights = [
  { label: 'Years of Experience', value: '35+' },
  { label: 'Residential Projects', value: '500+' },
  { label: 'Commercial Projects', value: '128+' },
  { label: 'Client Satisfaction Focus', value: '100%' }
];

export default function HomePage() {
  return (
    <main>
      <PageHero
        title="Building trust through quality construction."
        subtitle="Professional construction, interior design, and ceramic services from a legacy team in Neyveli, Tamil Nadu."
      />

      <section className="container section">
        <div className="introCard">
          <h2>Welcome to {company.name}</h2>
          <p>{company.description}</p>
          <p>
            Founded by <strong>{company.founder}</strong> in {company.established}, TRP was built on one
            principle: deliver a superior and transparent client experience from planning to handover.
          </p>
          <div className="buttonRow">
            <Link className="btn primary" href="/aboutus">
              Explore About Us
            </Link>
            <Link className="btn" href="/contact">
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="container section compactGrid">
        {highlights.map((item) => (
          <article className="stat" key={item.label}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="container section">
        <h2>Our Services</h2>
        <div className="cards">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <Link href={service.href}>Learn more →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>What Our Clients Think</h2>
        <div className="cards">
          {testimonials.map((item) => (
            <blockquote className="card testimonial" key={item.author}>
              <p>“{item.quote}”</p>
              <cite>{item.author}</cite>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}
