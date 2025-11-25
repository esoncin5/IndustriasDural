
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function CapabilitiesSection() {
  const capabilities = {
    machinery: [
      { name: 'Prensas de Inyección', specs: '250 - 1,600 toneladas' },
      { name: 'Centros de Mecanizado CNC', specs: '3, 4 y 5 ejes' },
      { name: 'Hornos de Fusión', specs: 'Capacidad 2,000 kg/hora' },
    ],
    materials: [
      'A380 (Alta fluidez)',
      'A383 (Excelente resistencia)',
      'A360 (Alta resistencia mecánica)',
      'A413 (Alta conductividad térmica)',
      'ADC12 (Estándar japonés)',
      'Aleaciones personalizadas',
    ],
    tolerances: [
      { parameter: 'Dimensional', value: '±0.05 mm' },
      { parameter: 'Espesor de pared', value: '1.5 - 6 mm' },
      { parameter: 'Rugosidad superficial', value: 'Ra 1.6 - 3.2 μm' },
      { parameter: 'Peso de piezas', value: '0.05 - 15 kg' },
    ],
  };

  return (
    <section id="capacidades" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Capacidades Técnicas</h2>
          <p className="text-lg text-muted-foreground">
            Tecnología de vanguardia y procesos certificados para garantizar la excelencia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Maquinaria y Equipos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {capabilities.machinery.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-sm text-muted-foreground">{item.specs}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aleaciones de Aluminio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {capabilities.materials.map((material, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {material}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Tolerancias y Especificaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {capabilities.tolerances.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">{item.parameter}</span>
                    <span className="text-sm text-primary font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
