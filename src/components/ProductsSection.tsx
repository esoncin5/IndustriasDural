
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ProductsSection() {
  const products = [
    {
      name: 'Carcasas para Motores Eléctricos',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop',
      specs: ['Aleación A380', 'Tolerancia ±0.05mm', 'Peso: 0.5-5kg'],
      applications: ['Automotriz', 'Industrial'],
    },
    {
      name: 'Disipadores de Calor',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&h=400&fit=crop',
      specs: ['Aleación A413', 'Alta conductividad', 'Acabado anodizado'],
      applications: ['Electrónica', 'LED'],
    },
    {
      name: 'Componentes Estructurales',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&h=400&fit=crop',
      specs: ['Aleación A360', 'Alta resistencia', 'Peso ligero'],
      applications: ['Aeroespacial', 'Automotriz'],
    },
    {
      name: 'Carcasas de Iluminación',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&h=400&fit=crop',
      specs: ['Aleación A380', 'Acabado pulido', 'Diseño personalizado'],
      applications: ['Iluminación', 'Arquitectura'],
    },
    {
      name: 'Válvulas y Conectores',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
      specs: ['Aleación A383', 'Resistente a presión', 'Mecanizado CNC'],
      applications: ['Hidráulica', 'Neumática'],
    },
  ];

  return (
    <section id="productos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Catálogo de Productos</h2>
          <p className="text-lg text-muted-foreground">
            Fabricamos una amplia variedad de piezas de aluminio para diferentes industrias
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">{product.name}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-2">Especificaciones:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {product.specs.map((spec, i) => (
                        <li key={i}>• {spec}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Aplicaciones:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, i) => (
                        <Badge key={i} variant="secondary">{app}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
