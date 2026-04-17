"use client";

import { useState } from 'react';
import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '@/components/common/SectionHeading';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import Button from '@/components/common/Button';
import { cn } from '@/lib/utils';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here we would typically send the data to a backend or use an email service
    alert('Merci ! Votre message a été envoyé avec succès.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphones",
      details: ["+237 694 538 117", "+237 653 483 397"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["epjeconstruction@gmail.com"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      icon: MapPin,
      title: "Localisation",
      details: ["Douala / Yaoundé", "Cameroun"],
      color: "bg-emerald-500/10 text-emerald-600"
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-brand-dark py-20 text-white relative">
        <div className="container mx-auto px-6 text-center">
          <SectionHeading 
            light
            centered
            badge="Contact"
            title="Parlons de votre projet"
            subtitle="Vous avez une question ou un projet concret ? Notre équipe est prête à vous écouter et vous conseiller."
          />
        </div>
      </section>

      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-brand-lightgray group hover:shadow-md transition-shadow"
                >
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6", info.color)}>
                    <info.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-brand-dark">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-brand-secondary font-medium">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* WhatsApp Call to Action */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => window.open('https://wa.me/23753483397', '_blank')}
                className="bg-green-500 p-8 rounded-3xl shadow-lg text-white cursor-pointer hover:bg-green-600 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-4">
                    <MessageCircle size={32} />
                    <h3 className="text-xl font-bold italic">WhatsApp Express</h3>
                </div>
                <p className="text-white/80 text-sm mb-6">Le moyen le plus rapide de nous contacter pour un devis urgent.</p>
                <div className="flex items-center gap-2 font-bold group-hover:translate-x-2 transition-transform">
                    <span>Cliquez ici pour discuter</span>
                    <Send size={16} />
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-10 md:p-12 rounded-[2rem] shadow-xl border border-brand-lightgray relative overflow-hidden"
              >
                <h3 className="text-3xl font-bold mb-8 text-brand-dark">Envoyez-nous un message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-secondary">Nom Complet</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-6 py-4 rounded-xl bg-brand-offwhite border border-brand-lightgray focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all outline-none"
                        placeholder="Ex: Jean Dupont"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-secondary">Téléphone</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-6 py-4 rounded-xl bg-brand-offwhite border border-brand-lightgray focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all outline-none"
                        placeholder="+237 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-secondary">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-6 py-4 rounded-xl bg-brand-offwhite border border-brand-lightgray focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all outline-none"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-secondary">Sujet / Type de projet</label>
                    <select 
                      className="w-full px-6 py-4 rounded-xl bg-brand-offwhite border border-brand-lightgray focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all outline-none appearance-none"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option value="">Sélectionner un service</option>
                      <option value="construction">Construction de bâtiment</option>
                      <option value="renovation">Rénovation & Réhabilitation</option>
                      <option value="architecture">Architecture & Études</option>
                      <option value="carrelage">Travaux de carrelage</option>
                      <option value="immobilier">Immobilier</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-secondary">Message</label>
                    <textarea 
                      rows={5}
                      required
                      className="w-full px-6 py-4 rounded-xl bg-brand-offwhite border border-brand-lightgray focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all outline-none resize-none"
                      placeholder="Décrivez votre besoin ici..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <Button variant="primary" size="lg" className="w-full h-16 rounded-xl text-lg font-bold flex items-center gap-3">
                    <Send size={20} />
                    Envoyer ma demande
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-brand-lightgray relative grayscale hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 flex items-center justify-center text-brand-secondary">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 opacity-20" />
            <p className="font-medium">Carte Interactive - Services sur tout le territoire national</p>
            <p className="text-xs opacity-50 uppercase tracking-widest mt-2 font-bold">Douala • Yaoundé • Kribi • Limbe</p>
          </div>
        </div>
      </section>
    </div>
  );
}
