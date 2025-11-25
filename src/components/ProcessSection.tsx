
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Hammer, Zap, Cog, CheckCircle, Package } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      icon: FileText,
      title: 'Diseño y Planificación',
      description: 'Análisis de requerimientos, diseño CAD/CAM y simulación del proceso de fundición.',
    },
    {
      icon: Hammer,
      title: 'Fabricación de Moldes',
      description: 'Construcción de moldes de precisión con aceros especiales de alta durabilidad.',
    },
    {
      icon: Zap,
      title: 'Fundición por Inyección',
      description: 'Inyección de aluminio fundido a alta presión en moldes precalentados.',
    },
    {
      icon: Cog,
      title: 'Mecanizado y Acabado',
      description: 'Operaciones de mecanizado CNC y aplicación de tratamientos superficiales.',
    },
    {
      icon: CheckCircle,
      title: 'Control de Calidad',
      description: 'Inspección dimensional, pruebas de resistencia y certificación de calidad.',
    },
    {
      icon: Package,
      title: 'Empaque y Entrega',
      description: 'Empaque especializado y logística para entrega segura y puntual.',
    },
  ];

  return (
    <section id="proceso" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proceso de Fabricación</h2>
          <p className="text-lg text-muted-foreground">
            Un proceso controlado y eficiente que garantiza la máxima calidad en cada pieza
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 ml-8">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
