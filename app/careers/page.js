import PageHero from '@/components/PageHero';

export default function CareersPage() {
  return (
    <main>
      <PageHero
        title="Careers"
        subtitle="Build your career with a people-centric team focused on training, growth, and construction excellence."
      />
      <section className="container section prose">
        <h2>HR Philosophy</h2>
        <p>
          The driving force behind TRP Construction’s growth is its committed workforce across Tamil
          Nadu. We cultivate a collaborative culture where initiative and accountability are valued.
        </p>
        <p>
          Continuous training and development are core to our work model, helping team members build
          practical knowledge and long-term career potential.
        </p>
      </section>

      <section className="container section">
        <div className="introCard">
          <h2>Come Work With Us</h2>
          <p>Open roles include Supervisor, Site Engineer, and Manager tracks.</p>
          <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="First Name" required />
            <input placeholder="Last Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />
            <select defaultValue="">
              <option value="" disabled>
                Choose Position Level
              </option>
              <option>Freshers</option>
              <option>Intermediate</option>
              <option>Experienced</option>
            </select>
            <button type="submit" className="btn primary">
              Apply Now
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
