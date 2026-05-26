import { useEffect, useState, type MouseEvent } from 'react';
import { Icon } from '../atoms/Icon';
import { NavLink } from '../atoms/NavLink';
import { useLocation, useNavigate } from 'react-router-dom';

const scrollTo = (id: string) => {
  requestAnimationFrame(() => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#muebles');

  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isCatalog = location.pathname === '/catalogo';
  const isServicios = location.pathname === '/servicios';

  useEffect(() => {
    if (!isHome) {
      setActiveHref('');
      return;
    }

    const sectionMap: Record<string, string> = {
      novedades: '#muebles',
      muebles: '#muebles',
      'nuestra-historia': '#sobre-nosotros',
      contacto: '#contacto',
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visible.length > 0) {
          const mapped = sectionMap[visible[0].target.id];

          if (mapped) {
            setActiveHref(mapped);
          }
        }
      },
      {
        rootMargin: '-80px 0px -45% 0px',
        threshold: 0,
      },
    );

    Object.keys(sectionMap).forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isHome]);

  const handleNavigateToSection = async (
    e: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    href: string,
  ) => {
    e.preventDefault();

    setActiveHref(href);
    setMobileOpen(false);

    if (!isHome) {
      navigate('/');

      setTimeout(() => {
        scrollTo(sectionId);
      }, 100);

      return;
    }

    scrollTo(sectionId);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-card border-b border-border"
      style={{
        animation:
          'navSlideDown 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      }}
    >
      {/* Main bar */}
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-6 h-20">
        <button
          type="button"
          onClick={() => {
            navigate('/');
            setMobileOpen(false);
          }}
          className="flex items-center active:scale-95 transition-transform"
        >
          <img
            src="/logo.svg"
            alt="Amara Muebles"
            className="h-10 w-auto"
          />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-12">
          <NavLink
            href="#muebles"
            active={activeHref === '#muebles'}
            onClick={(e: MouseEvent<HTMLAnchorElement>) =>
              handleNavigateToSection(
                e,
                'muebles',
                '#muebles',
              )
            }
          >
            Muebles
          </NavLink>

          <NavLink
            href="#sobre-nosotros"
            active={activeHref === '#sobre-nosotros'}
            onClick={(e: MouseEvent<HTMLAnchorElement>) =>
              handleNavigateToSection(e, 'nuestra-historia', '#sobre-nosotros')
            }
          >
            Sobre Nosotros
          </NavLink>

          <NavLink
            href="#contacto"
            active={activeHref === '#contacto'}
            onClick={(e: MouseEvent<HTMLAnchorElement>) =>
              handleNavigateToSection(e, 'contacto', '#contacto')
            }
          >
            Contáctanos
          </NavLink>

          <NavLink
            href="/servicios"
            active={isServicios}
            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              setMobileOpen(false);
              navigate('/servicios');
            }}
          >
            Servicios
          </NavLink>
        </div>

        <div className="flex items-center space-x-4">
          {/* Desktop CTA */}
          <button
            type="button"
            onClick={() => navigate('/catalogo')}
            className={`hidden md:block px-6 py-2.5 uppercase tracking-widest text-xs font-medium transition-all duration-500 active:scale-95 ${
              isCatalog
                ? 'bg-cx-walnut text-white'
                : 'bg-muted text-cx-walnut hover:opacity-70'
            }`}
          >
            Ver Catálogo
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-foreground hover:opacity-70 transition-opacity min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden absolute top-full left-0 right-0 overflow-hidden bg-card border-t border-border transition-[opacity,transform] duration-300 ease-out"
        style={{
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen ? 'scaleY(1)' : 'scaleY(0)',
          transformOrigin: 'top',
          visibility: mobileOpen ? 'visible' : 'hidden',
        }}
      >
        <div className="flex flex-col px-6 py-6 space-y-6">
          <NavLink
            href="#muebles"
            active={activeHref === '#muebles'}
            onClick={(e: MouseEvent<HTMLAnchorElement>) =>
              handleNavigateToSection(
                e,
                'muebles',
                '#muebles',
              )
            }
          >
            Muebles
          </NavLink>

          <NavLink
            href="#sobre-nosotros"
            active={activeHref === '#sobre-nosotros'}
            onClick={(e: MouseEvent<HTMLAnchorElement>) =>
              handleNavigateToSection(e, 'nuestra-historia', '#sobre-nosotros')
            }
          >
            Sobre Nosotros
          </NavLink>

          <NavLink
            href="#contacto"
            active={activeHref === '#contacto'}
            onClick={(e: MouseEvent<HTMLAnchorElement>) =>
              handleNavigateToSection(
                e,
                'contacto',
                '#contacto',
              )
            }
          >
            Contáctanos
          </NavLink>

          <NavLink
            href="/servicios"
            active={isServicios}
            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              setMobileOpen(false);
              navigate('/servicios');
            }}
          >
            Servicios
          </NavLink>

          <button
            type="button"
            onClick={() => {
              navigate('/catalogo');
              setMobileOpen(false);
            }}
            className={`py-3 uppercase tracking-widest text-xs font-medium w-full transition-opacity ${
              isCatalog
                ? 'bg-cx-walnut text-white'
                : 'bg-muted text-cx-walnut hover:opacity-70'
            }`}
          >
            Ver Catálogo
          </button>
        </div>
      </div>
    </nav>
  );
}
