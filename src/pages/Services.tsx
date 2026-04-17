"use client";

import { motion } from 'motion/react';
import { Building2, Hammer, Ruler, Layout, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { cn } from '@/lib/utils';

const detailedServices = [
  {
    id: "construction",
    title: "Construction de bâtiments",
    icon: Building2,
    description: "Nous réalisons vos projets du terrassement à la livraison clé en main. Une expertise technique pour des structures solides et durables.",
    items: ["Maisons individuelles", "Immeubles résidentiels", "Bâtiments commerciaux", "Hangars & structures industrielles"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "renovation",
    title: "Rénovation & réhabilitation",
    icon: Hammer,
    description: "Donnez une seconde vie à vos bâtiments. Nous intervenons pour transformer, agrandir ou remettre à neuf vos espaces existants.",
    items: ["Réfection complète", "Modernisation des espaces", "Extension de bâtiments", "Amélioration esthétique"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "architecture",
    title: "Architecture & étude",
    icon: Ruler,
    description: "Un projet réussi commence par une étude minutieuse. Nous vous accompagnons dans la conception technique et budgétaire.",
    items: ["Conception de plans 2D/3D", "Devis détaillés", "Conseils techniques", "Optimisation des coûts"],
    image: "https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "carrelage",
    title: "Carrelage professionnel (Justin Carrelage)",
    icon: Layout,
    description: "La finition est notre signature. Nos artisans carreleurs réalisent des poses millimétrées pour un rendu esthétique irréprochable.",
    items: ["Carrelage sols & murs", "Faïence (cuisine & bain)", "Terrasses & dalles extérieures", "Pose de placo & finitions", "Pierre naturelle"],
    image: "https://images.unsplash.com/photo-1502005075163-5240c9689445?q=80&w=1770&auto=format&fit=crop"
  },
  {
    id: "immobilier",
    title: "Vente & location immobilière",
    icon: HomeIcon,
    description: "Trouver le bon terrain ou la maison idéale ne doit plus être un parcours du combattant. Nous facilitons vos transactions.",
    items: ["Mise en relation", "Accompagnement administratif", "Conseil investissement", "Gestion locative"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-brand-dark py-24 text-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            light
            badge="Expertise"
            title="Nos Services Détaillés"
            subtitle="EPJE Construction propose une large gamme de services pour répondre à tous vos besoins en bâtiment au Cameroun."
          />
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-32">
            {detailedServices.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                  idx % 2 === 1 && "lg:flex-row-reverse"
                )}
              >
                <div className={cn(idx % 2 === 1 && "lg:order-2")}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white">
                      <service.icon size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-brand-dark">{service.title}</h2>
                  </div>
                  <p className="text-brand-secondary text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-brand-orange shrink-0" />
                        <span className="text-brand-anthracite font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="rounded-xl border-brand-blue/20">
                    Demander un devis pour ce service
                  </Button>
                </div>

                <div className={cn(
                  "relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl group",
                  idx % 2 === 1 && "lg:order-1"
                )}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement CTA */}
      <section className="py-24 bg-white border-t border-brand-lightgray">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Un besoin spécifique ?</h2>
            <p className="text-brand-secondary mb-10 max-w-2xl mx-auto">
                Nous étudions chaque cas de manière personnalisée pour offrir la solution la plus adaptée à vos besoins et à votre budget.
            </p>
            <div className="flex justify-center gap-4">
                <Button variant="secondary" size="lg" className="rounded-xl px-12" onClick={() => window.open('https://wa.me/237694538117', '_blank')}>
                    Discuter de mon projet
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
