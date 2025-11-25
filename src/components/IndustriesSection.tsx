
import { Card, CardContent } from '@/components/ui/card';
import { Car, Plane, Cpu, Lightbulb, Building2, Wrench } from 'lucide-react';

export default function IndustriesSection() {
  const industries = [
    {
      icon: Car,
      name: 'Automotriz',
      description: 'Componentes de motor, transmisión, sistemas eléctricos y estructurales para vehículos.',
      examples: ['Carcasas de motor', 'Soportes estructurales', 'Componentes de transmisión'],
    },
    {
      icon: Plane,
      name: 'Aeroespacial',
      description: 'Piezas ligeras y de alta resistencia para aplicaciones aeronáuticas y espaciales.',
      examples: ['Componentes estructurales', 'Soportes de equipos', 'Carcasas de instrumentos'],
    },
    {
      icon: Cpu,
      name: 'Electrónica',
      description: 'Disipadores de calor, carcasas y componentes para equipos electrónicos.',
      examples: ['Disipadores térmicos', 'Carcasas de equipos', 'Conectores especiales'],
    },
    {
      icon: Lightbulb,
      name: 'Iluminación',
      description: 'Carcasas y componentes para sistemas de iluminación LED y convencional.',
      examples: ['Carcasas de luminarias', 'Reflectores', 'Soportes de montaje'],
    },
    {
      icon: Building2,
      name: 'Construcción',
      description: 'Herrajes, accesorios y componentes arquitectónicos de aluminio.',
      examples: ['Herrajes de ventanas', 'Accesorios de fachadas', 'Componentes decorativos'],
    },
    {
      icon: Wrench,
      name: 'Maquinaria Industrial',
      description: 'Componentes para equipos industriales, hidráulicos y neumáticos.',
      examples: ['Válvulas', 'Conectores', 'Carcasas de bombas'],
    },
  ];

  return (
    <section id="sectores" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sectores Industriales</h2>
          <p className="text-lg text-muted-foreground">
            Soluciones especializadas para las industrias más exigentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{industry.description}</p>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground">Ejemplos:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {industry.examples.map((example, i) => (
                      <li key={i}>• {example}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
