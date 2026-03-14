import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'TRP Construction | Professional Construction Company in Neyveli',
  description:
    'TRP Construction offers residential, commercial, interior design, and ceramic solutions across Neyveli, Vadalur, and surrounding Tamil Nadu regions.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
