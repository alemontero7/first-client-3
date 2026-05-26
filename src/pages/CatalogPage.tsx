import { Helmet } from 'react-helmet-async';
import { CatalogTemplate } from '../components/templates/CatalogTemplate';

export function CatalogPage() {
  return (
    <>
      <Helmet>
        <title>Catálogo</title>
        <meta name="description" content="Catálogo completo de muebles artesanales: sofás, comedores, mesas, sillas y sillones. Cedro, roble y maderas alternativas talladas a mano en Cochabamba, Bolivia." />
      </Helmet>
      <CatalogTemplate />
    </>
  );
}
