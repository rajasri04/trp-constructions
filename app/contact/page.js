import PageHero from '@/components/PageHero';
import { company } from '@/lib/siteData';

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for residential, commercial, interior, and ceramic project requirements."
      />
      <section className="container section twoCol">
        <article className="card">
          <h2>Registered Office</h2>
          <p>{company.registeredOffice}</p>
          <h3>Branch Office</h3>
          <p>{company.branchOffice}</p>
          <p>
            <strong>Email:</strong> <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <p>
            <strong>Phone:</strong> {company.phones.join(', ')}
          </p>
        </article>

        <article className="card">
          <h2>Quick Enquiry</h2>
          <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />
            <select defaultValue="">
              <option value="" disabled>
                Service Interested In
              </option>
              <option>Commercial Construction</option>
              <option>Residential Construction</option>
              <option>Interior Design</option>
              <option>Ceramics</option>
            </select>
            <textarea placeholder="Project details" rows={5} />
            <button type="submit" className="btn primary">
              Submit Enquiry
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}
