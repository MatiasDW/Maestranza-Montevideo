import { motion } from 'framer-motion';
import mapfreLogo from '../../assets/logos/mapfre.svg';
import hdiLogo from '../../assets/logos/hdi.png';
import fidLogo from '../../assets/logos/fid.svg';
import bciLogo from '../../assets/logos/bci.svg';
import consorcioLogo from '../../assets/logos/consorcio.webp';
import suraLogo from '../../assets/logos/sura.svg';
import zurichLogo from '../../assets/logos/zurich.svg';
import realeLogo from '../../assets/logos/reale.png';
import andinaLogo from '../../assets/logos/andina.png';
import kdmLogo from '../../assets/logos/kdm.png';
import dimensionLogo from '../../assets/logos/dimension.png';
import walmartLogo from '../../assets/logos/walmart.svg';

const Brands = () => {
  const insuranceClients = [
    { name: 'Mapfre Seguros', logo: mapfreLogo, logoAlt: 'Logo Mapfre Seguros' },
    { name: 'HDI Seguros', logo: hdiLogo, logoAlt: 'Logo HDI Seguros' },
    { name: 'FID Seguros', logo: fidLogo, logoAlt: 'Logo FID Seguros' },
    { name: 'BCI Seguros', logo: bciLogo, logoAlt: 'Logo BCI Seguros' },
    { name: 'Consorcio', logo: consorcioLogo, logoAlt: 'Logo Consorcio' },
    { name: 'SURA', logo: suraLogo, logoAlt: 'Logo SURA' },
    { name: 'Zurich Seguros', logo: zurichLogo, logoAlt: 'Logo Zurich Seguros' },
    { name: 'Reale Seguros Chile', logo: realeLogo, logoAlt: 'Logo Reale Seguros Chile' },
  ];

  const privateClients = [
    { name: 'Andina Refrescos', logo: andinaLogo, logoAlt: 'Logo Andina Refrescos' },
    { name: 'KDM', logo: kdmLogo, logoAlt: 'Logo KDM' },
    { name: 'Dimensión', logo: dimensionLogo, logoAlt: 'Logo Dimensión' },
    { name: 'LTS Walmart', logo: walmartLogo, logoAlt: 'Logo Walmart' },
    { name: 'Entre otros', logo: null, logoAlt: '' },
  ];

  const insuranceTrack = [...insuranceClients, ...insuranceClients, ...insuranceClients];
  const privateTrack = [...privateClients, ...privateClients, ...privateClients];

  return (
    <section id="brands" className="py-16 md:py-20 bg-gray-50 text-slate-800 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary font-semibold uppercase tracking-wider text-sm text-center block"
        >
          Clientes Actualizados
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mt-2 text-slate-900 text-center"
        >
          Nuestros <span className="text-secondary">Clientes</span>
        </motion.h2>

        <p className="text-gray-600 mt-4 leading-relaxed text-center max-w-3xl mx-auto">
          Trabajamos con compañías de seguros y empresas particulares que confían en nuestra experiencia para reparaciones y fabricación especializada.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
            <p className="text-sm uppercase tracking-wider font-semibold text-primary">
              Compañías de seguros
            </p>
          </div>
          <motion.div
            animate={{ x: [0, '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
            className="flex gap-4 w-max px-4 relative"
          >
            {insuranceTrack.map((client, index) => (
              <article
                key={`${client.name}-${index}`}
                className="w-[280px] bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex-shrink-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-24 rounded-xl bg-white border border-gray-200 flex items-center justify-center px-2">
                    <img
                      src={client.logo}
                      alt={client.logoAlt}
                      className="max-h-8 w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">{client.name}</h3>
                    <p className="text-[11px] uppercase tracking-wider text-secondary font-semibold">
                      Seguros
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent" />
        </div>

        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
            <p className="text-sm uppercase tracking-wider font-semibold text-primary">
              Clientes particulares
            </p>
          </div>
          <motion.div
            animate={{ x: ['-50%', 0] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 26 }}
            className="flex gap-4 w-max px-4"
          >
            {privateTrack.map((client, index) => (
              <article
                key={`${client.name}-${index}`}
                className="w-[280px] bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex-shrink-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  {client.logo ? (
                    <div className="h-12 w-24 rounded-xl bg-white border border-gray-200 flex items-center justify-center px-2">
                      <img
                        src={client.logo}
                        alt={client.logoAlt}
                        className="max-h-8 w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="h-12 w-24 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 font-bold text-lg">+</span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">{client.name}</h3>
                    <p className="text-[11px] uppercase tracking-wider text-secondary font-semibold">
                      Particular
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
