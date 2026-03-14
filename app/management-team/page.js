import PageHero from '@/components/PageHero';
import { managementTeam } from '@/lib/siteData';

export default function ManagementTeamPage() {
  return (
    <main>
      <PageHero
        title="Management Team"
        subtitle="Experienced professionals across civil, interior, plumbing, painting, carpentry, and project execution."
      />
      <section className="container section cards">
        {managementTeam.map((member) => (
          <article className="card" key={member.name}>
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p>{member.experience}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
