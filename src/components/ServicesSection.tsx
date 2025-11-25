
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Cog, Sparkles, Wrench, Ruler } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Zap,
      title: 'Fundición por Inyección a Alta Presión',
      description: 'Proceso de fundición de aluminio con presiones de hasta 4,500 PSI para piezas complejas y de alta precisión.',
    },
    {
      icon: Cog,
      title: 'Mecanizado CNC',
      description: 'Servicios de mecanizado de precisión con centros CNC de 3, 4 y 5 ejes para acabados perfectos.',
    },
    {
      icon: Sparkles,
      title: 'Tratamientos Superficiales',
      description: 'Anodizado, pintura en polvo, cromado y otros acabados para protección y estética superior.',
    },
    {
      icon: Wrench,
      title: 'Diseño y Fabricación de Moldes',
      description: 'Diseño CAD/CAM y fabricación de moldes de inyección con aceros de alta calidad y larga vida útil.',
    },
    {
      icon: Ruler,
      title: 'Ingeniería y Prototipado',
      description: 'Asesoría técnica, optimización de diseños y desarrollo de prototipos funcionales.',
    },
  ];

  return (
    <section id="servicios" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos soluciones integrales de fundición de aluminio, desde el diseño hasta el producto terminado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
