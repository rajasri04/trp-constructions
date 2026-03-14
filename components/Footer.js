import { brands, company } from '../lib/siteData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <h4>{company.name}</h4>
          <p>{company.description}</p>
          <p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>
        <div>
          <h4>Office</h4>
          <p>{company.registeredOffice}</p>
          <p>{company.branchOffice}</p>
        </div>
        <div>
          <h4>Brand Partners</h4>
          <ul className="brandList">
            {brands.map((brand) => (
              <li key={brand}>{brand}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} TRP Construction. All rights reserved.</p>
    </footer>
  );
}
