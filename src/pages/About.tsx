"use client";

import { motion } from 'motion/react';
import SectionHeading from '@/components/common/SectionHeading';
import { Target, Eye, ShieldCheck, Zap, Users, Trophy } from 'lucide-react';
import Image from "next/image";

const values = [
  {
    title: "Professionnalisme",
    desc: "Une équipe d'artisans qualifiés et rigoureux dans chaque geste.",
    icon: Users
  },
  {
    title: "Rigueur",
    desc: "Le respect des normes de sécurité et de construction en vigueur.",
    icon: ShieldCheck
  },
  {
    title: "Transparence",
    desc: "Des devis clairs et une communication honnête sur l'avancement.",
    icon: Zap
  },
  {
    title: "Respect des délais",
    desc: "Le temps est précieux ; nous mettons tout en œuvre pour livrer à temps.",
    icon: Trophy
  }
];

export default function About() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="bg-brand-dark py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
            <SectionHeading 
                light
                centered
                badge="À propos"
                title="Bâtir l'avenir du Cameroun"
                subtitle="EPJE Construction est une entreprise spécialisée dans le secteur du bâtiment, fondée sur l'expertise et la passion."
            />
        </div>
        <div className="absolute inset-0 opacity-10 bg-[url('/images/realisations-4.jpg')] bg-cover bg-center pointer-events-none" />
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-brand-dark leading-tight">
                Notre histoire & notre engagement
              </h2>
              <p className="text-brand-secondary text-lg leading-relaxed">
                EPJE Construction est née d'une volonté simple : apporter un souffle de modernité et de rigueur dans le paysage du bâtiment au Cameroun. Conscients des défis de la construction locale, nous avons bâti une entreprise qui place la satisfaction client au-dessus de tout.
              </p>
              <p className="text-brand-secondary text-lg leading-relaxed">
                Que ce soit pour une résidence privée ou un bâtiment commercial, nous traitons chaque brique avec la même attention aux détails. De la fondation aux finitions de carrelage (notre spécialité reconnue avec Justin Carrelage), l'excellence est notre seul standard.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mt-12 transition-transform hover:-translate-y-2">
                <Image
                  src="/images/realisations-1.jpg"
                  alt="Chantier"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transition-transform hover:-translate-y-2">
                <Image
                  src="/images/equipe.jpg"
                  alt="Architecture"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-lightgray/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-brand-lightgray"
            >
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-brand-dark">Notre Mission</h3>
              <p className="text-brand-secondary text-lg leading-relaxed">
                Offrir des constructions solides, esthétiques et durables, avec un service fiable et transparent pour chaque client, quel que soit l'ampleur du projet.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-brand-blue p-12 rounded-3xl shadow-xl text-white"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6">Notre Vision</h3>
              <p className="text-brand-lightgray/80 text-lg leading-relaxed">
                Devenir la référence incontournable en construction et finition haut de gamme au Cameroun, reconnue pour sa qualité d'exécution et son intégrité.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            centered
            badge="Valeurs"
            title="Ce qui nous définit"
            subtitle="Nos valeurs ne sont pas de simples mots, ce sont les fondations sur lesquelles nous bâtissons chaque projet."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {values.map((v, i) => (
                <div key={i} className="text-center group">
                    <div className="w-20 h-20 bg-brand-offwhite rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange/10 group-hover:rotate-12 transition-all duration-300">
                        <v.icon size={32} className="text-brand-blue group-hover:text-brand-orange" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-brand-dark">{v.title}</h4>
                    <p className="text-brand-secondary text-sm leading-relaxed">{v.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
