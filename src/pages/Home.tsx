"use client";

import { motion } from 'motion/react';
import { Phone, ArrowRight, CheckCircle2, Hammer, Ruler, Building2, Layout, Diamond } from 'lucide-react';
import { MotionButton as Button } from '@/components/common/Button';
import SectionHeading from '@/components/common/SectionHeading';
import Link from "next/link";
import Image from "next/image";
import { cn } from '@/lib/utils';

const services = [
  {
    title: "Construction de bâtiments",
    description: "Réalisation complète de maisons, immeubles et structures professionnelles.",
    icon: Building2,
    href: "/services",
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Rénovation & réhabilitation",
    description: "Modernisation de vos espaces, remise à neuf et transformation.",
    icon: Hammer,
    href: "/services",
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Architecture & conseils",
    description: "Plans, devis détaillés et accompagnement technique sécurisé.",
    icon: Ruler,
    href: "/services",
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    title: "Carrelage professionnel",
    description: "Spécialiste des finitions : marbre, faïence, pierres naturelles.",
    icon: Layout,
    href: "/services",
    color: "bg-amber-500/10 text-amber-600"
  }
];

const reasons = [
  "Travail rapide et bien fini",
  "Équipe expérimentée",
  "Respect strict des délais",
  "Finitions de qualité professionnelle",
  "Un seul prestataire pour tout gérer",
  "Devis clairs et transparents"
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
        {/* Background Overlay with Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/realisations-1.jpg"
            alt="Construction" 
            fill
            priority
            sizes="100vw"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
          
          {/* Decorative geometric lines */}
          <div className="absolute top-1/4 right-0 w-96 h-96 border border-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] border-l border-t border-white/5 -rotate-12 translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-[0.2em] mb-8">
                L'Excellence du Bâtiment
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-tight">
                Construction <span className="text-brand-orange">&</span> Rénovation <br />
                <span className="text-white/60">Professionnelle.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-lightgray/70 mb-10 max-w-2xl leading-relaxed">
                EPJE Construction vous accompagne de A à Z dans vos projets au Cameroun : plans, construction, finitions et aménagements. Travail rapide, solide et durable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="px-10 h-16 rounded-2xl group" onClick={() => window.open('https://wa.me/23753483397', '_blank')}>
                  <Phone className="mr-3" size={20} />
                  Appeler Maintenant
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-10 h-16 rounded-2xl border-white/20 text-white hover:bg-white/10 group"
                  onClick={() => {
                    window.location.href = "/services";
                  }}
                >
                  Découvrir nos services
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-brand-orange rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Presentation Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10"
              >
                <Image
                  src="/images/equipe.jpg"
                  alt="Architecture" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-blue/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 bg-brand-blue p-8 rounded-3xl text-white shadow-xl max-w-[240px] hidden md:block z-20">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-xs font-medium uppercase tracking-widest opacity-80">Années d'expérience au Cameroun</p>
              </div>
            </div>

            <div>
              <SectionHeading 
                badge="À propos de nous"
                title="Une entreprise de construction fiable et expérimentée"
                subtitle="EPJE Construction est spécialisée dans la construction de bâtiments, la rénovation et les travaux de finition haut de gamme."
              />
              <div className="space-y-4 mb-10">
                {[
                  "Respect rigoureux des délais",
                  "Qualité supérieure des matériaux",
                  "Exécution propre et professionnelle",
                  "Devis clairs et sans surprises"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={16} className="text-brand-blue" />
                    </div>
                    <span className="text-brand-anthracite font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-brand-secondary leading-relaxed mb-8">
                Avec nous, vous avez un seul interlocuteur pour tous vos travaux, sans stress. Nous transformons vos visions en réalités tangibles et durables.
              </p>
              <Link href="/about">
                <Button variant="outline" className="rounded-2xl border-brand-blue/20">
                  En savoir plus sur nous
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-brand-lightgray/30">
        <div className="container mx-auto px-6">
          <SectionHeading 
            centered
            badge="Services"
            title="Nos domaines d'intervention"
            subtitle="Nous maîtrisons chaque étape de votre projet, de la conception architecturale aux finitions les plus délicates."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-brand-lightgray flex flex-col group transition-all duration-300"
              >
                <div className={cn("w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-transform group-hover:scale-110", service.color)}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-dark group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-secondary text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <Link href={service.href} className="flex items-center gap-2 text-brand-blue text-sm font-bold group/link">
                  <span>En savoir plus</span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/services">
              <Button size="lg" className="rounded-2xl">
                Voir tous nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading 
                light
                badge="Engagement"
                title="Pourquoi choisir EPJE Construction ?"
                subtitle="Nous allions savoir-faire artisanal et gestion de projet moderne pour garantir votre satisfaction."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reasons.map((reason, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5"
                  >
                    <CheckCircle2 size={20} className="text-brand-orange shrink-0" />
                    <span className="text-sm font-medium">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-card">
                 <Image
                  src="/images/carreaux-1.jpg"
                  alt="Quality work" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              {/* Badge */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-brand-orange p-8 rounded-full shadow-2xl hidden lg:flex flex-col items-center justify-center w-40 h-40">
                <Diamond size={32} className="mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-center">Qualité Premium</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Showcase (Simplified) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading 
            centered
            badge="Portfolio"
            title="Quelques réalisations"
            subtitle="Découvrez nos derniers chantiers : de la structure brute aux finitions les plus élégantes."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               "/images/realisations-2.jpg",
               "/images/realisations-3.jpg",
               "/images/realisations-4.jpg"
             ].map((url, idx) => (
               <motion.div 
                 key={idx}
                 whileHover={{ scale: 1.02 }}
                 className="group relative h-80 rounded-3xl overflow-hidden shadow-lg"
               >
                 <Image
                   src={url}
                   alt={`Réalisation ${idx + 1}`}
                   fill
                   sizes="(max-width: 768px) 100vw, 33vw"
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                   <p className="text-white font-bold">Projet de Résidence</p>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <SectionHeading 
            light
            centered
            badge="Contact"
            title="Un projet ? Parlons-en dès maintenant"
            subtitle="Un simple appel suffit pour démarrer votre projet de rêve. Nos experts sont à votre écoute."
          />
          
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-8 text-2xl md:text-3xl font-bold font-display">
              <a href="tel:+237694538117" className="hover:text-brand-orange transition-colors">+237 694 538 117</a>
              <a href="tel:+237653483397" className="hover:text-brand-orange transition-colors">+237 653 483 397</a>
            </div>
            
            <Button 
               variant="secondary" 
               size="xl" 
               className="rounded-2xl px-12 h-20 group"
               onClick={() => window.open('https://wa.me/23753483397', '_blank')}
            >
              <MessageCircle size={24} className="mr-3" />
              Démarrer sur WhatsApp
            </Button>
          </div>
        </div>
        
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-[120px]" />
      </section>
    </div>
  );
}

const MessageCircle = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
  </svg>
);
