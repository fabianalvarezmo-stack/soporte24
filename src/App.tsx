/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Catalog from './components/Catalog';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Catalog />
        <QuoteForm />
      </main>
      <Footer />
      
      {/* Search Metadata (JSON-LD) - Integrated for SEO as requested */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Arriendo de Equipos Tecnológicos Soporte 24 Horas",
          "provider": {
            "@type": "Organization",
            "name": "Soporte 24 Horas",
            "url": "https://soporte24horas.cl"
          },
          "areaServed": "CL",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Catálogo de Arriendo",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Arriendo de Notebooks"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Arriendo de Pantallas LED"
                }
              }
            ]
          }
        })}
      </script>
    </div>
  );
}

