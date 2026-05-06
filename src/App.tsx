/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Equipos from './pages/Equipos';
import Proyectos from './pages/Proyectos';
import Blog from './pages/Blog';
import SoporteExpress from './pages/SoporteExpress';
import Contacto from './pages/Contacto';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/equipos" element={<Equipos />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/soporte-express" element={<SoporteExpress />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
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
    </Router>
  );
}

