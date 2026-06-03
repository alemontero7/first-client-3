import { Helmet } from 'react-helmet-async';
import { CatalogTemplate } from '../components/templates/CatalogTemplate';

export function CatalogPage() {
  return (
    <>
      <Helmet>
        <title>Catálogo</title>
        <meta name="description" content="Catálogo completo de muebles artesanales: sofás, comedores, mesas, sillas, sillones y camas. Roble, cedro, mara macho y maderas selectas de zonas tropicales de Bolivia." />
      </Helmet>
      <CatalogTemplate />
    </>
  );
}
