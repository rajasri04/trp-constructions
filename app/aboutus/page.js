import PageHero from '@/components/PageHero';

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About TRP Construction"
        subtitle="Legacy, trust, and engineering discipline that has powered projects across Tamil Nadu for over 35 years."
      />

      <section className="container section prose">
        <h2>Our Story</h2>
        <p>
          T.R. Pazhamalai founded TRP Construction in 1989 with one goal: to deliver a superior
          client experience through consistent performance and long-term satisfaction.
        </p>
        <p>
          Our leadership team brings technical understanding, practical field expertise, and a
          quality-driven mindset to every stage of execution. Over the years, this approach has
          helped us build enduring relationships with families, institutions, and businesses.
        </p>

        <h2>Vision</h2>
        <p>
          To create a dynamic, forward-thinking enterprise driven by transparency, integrity,
          professionalism, and service excellence.
        </p>

        <h2>Mission</h2>
        <p>
          To build a credible construction brand preferred for quality, aesthetics, innovation, and
          technology while supporting both short-term and long-term client success.
        </p>
      </section>
    </main>
  );
}
