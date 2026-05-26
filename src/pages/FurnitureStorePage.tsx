import { Helmet } from 'react-helmet-async';
import { PageLayout } from '../components/templates/PageLayout';
import { Navbar } from '../components/organisms/Navbar';
import { HeroSection } from '../components/organisms/HeroSection';
import { TrustBar } from '../components/organisms/TrustBar';
import { FeaturedProducts } from '../components/organisms/FeaturedProducts';
import { ShopGrid } from '../components/organisms/ShopGrid';
import { BrandStory } from '../components/organisms/BrandStory';
import { ProcessSection } from '../components/organisms/ProcessSection';
import { B2BSection } from '../components/organisms/B2BSection';
import { TestimonialsSection } from '../components/organisms/TestimonialsSection';
import { ContactSection } from '../components/organisms/ContactSection';
import { Footer } from '../components/organisms/Footer';

export function FurnitureStorePage() {
  return (
    <PageLayout>
      <Helmet>
        <title>Inicio</title>
        <meta name="description" content="Muebles artesanales de cedro, roble y maderas alternativas tallados a mano por maestros bolivianos. Sofás, comedores, mesas y sillones con calidad de autor. Colcapirhua, Cochabamba." />
      </Helmet>
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <TrustBar />
        <FeaturedProducts />
        <ShopGrid />
        <BrandStory />
        <ProcessSection />
        <B2BSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </PageLayout>
  );
}
