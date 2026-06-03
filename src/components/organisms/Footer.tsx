import { Reveal } from '../atoms/Reveal';
import { Icon } from '../atoms/Icon';

const locations = [
  {
    city: 'Colcapirhua',
    address: 'Km 9 Blanco Galindo Norte, Calle Hilarión Daza',
    hours: 'Lun–Vie 9:00–12:00 · 14:00–18:00',
    phone: '+591 79785827',
    mapsUrl:
      'https://www.google.com/maps?q=-17.3852235,-66.241508&z=17&hl=es',
  }
];

// Facebook SVG path (official f logo)
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.885v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="w-full bg-cx-wild-sand border-t border-border">

      {/* Craftsman closing line */}
      <Reveal direction="none">
        <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-12 border-b border-border">
          <p className="font-semibold text-foreground italic leading-snug mb-3"
            style={{ fontSize: 'clamp(18px, 2.2vw, 26px)' }}>
            "El arte en tu hogar"
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-cx-rolling-stone">
            Amara Muebles · Cochabamba, Bolivia
          </p>
        </div>
      </Reveal>

      {/* Main grid */}
      <Reveal direction="none" className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand + social */}
        <div>
          <div className="text-lg font-semibold text-foreground mb-4">Amara Muebles</div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Artesanía en maderas nobles de Bolivia.<br />
            Hecho en Bolivia. Cada pieza tarda entre tres y seis semanas.
          </p>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-foreground mb-4 font-semibold">
              Síguenos
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/amaramuebles"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-cx-walnut transition-colors"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Ubicación */}
        {locations.map((s) => (
          <div key={s.city}>
            <p className="text-[10px] uppercase tracking-[0.25em] text-foreground mb-5 font-semibold">
              Fábrica · {s.city}
            </p>
            <div className="space-y-2 mb-5">
              <p className="text-sm text-muted-foreground">{s.address}</p>
              <p className="text-xs text-muted-foreground/70 italic">Atendemos desde fábrica · No contamos con tienda física</p>
              <p className="text-sm text-muted-foreground">{s.hours}</p>
              <a
                href={`tel:${s.phone.replace(/\s/g, '')}`}
                className="text-sm text-muted-foreground hover:text-cx-walnut transition-colors block"
              >
                {s.phone}
              </a>
            </div>
            <a
              href={s.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-cx-walnut hover:opacity-70 transition-opacity"
            >
              <Icon name="location_on" size="sm" />
              Cómo llegar
            </a>
          </div>
        ))}

      </Reveal>

      {/* Copyright */}
      <div className="max-w-[1200px] mx-auto px-6 pb-8 border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">
          © 2026 Amara Muebles.
        </p>
      </div>

    </footer>
  );
}
