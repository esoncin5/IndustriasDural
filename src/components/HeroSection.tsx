
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Factory, Users } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">Líderes en Fundición de Aluminio</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Fundición de Aluminio por Inyección de Alta Precisión
            </h1>
            <p className="text-lg text-muted-foreground">
              Más de 25 años de experiencia en la fabricación de piezas de aluminio de alta calidad 
              para las industrias más exigentes. Tecnología de punta y compromiso con la excelencia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToContact} className="group">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                const element = document.getElementById('servicios');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}>
                Ver Servicios
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop"
                alt="Fundición de aluminio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="flex items-start space-x-4 p-6 rounded-lg bg-card border">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Factory className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">25+ Años</h3>
              <p className="text-sm text-muted-foreground">De experiencia en el sector</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 rounded-lg bg-card border">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">500+ Clientes</h3>
              <p className="text-sm text-muted-foreground">Satisfechos en todo el mundo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
