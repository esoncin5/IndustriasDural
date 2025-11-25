
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  const handleAddressClick = () => {
    const address = 'Rodolfo López 1627, B1878 Quilmes, Provincia de Buenos Aires, Argentina';
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  const handlePhoneClick = (phone: string) => {
    const cleanPhone = phone.replace(/\s/g, '');
    const whatsappUrl = `https://wa.me/54${cleanPhone}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:industriasduralsrl@yahoo.com.ar';
  };

  return (
    <section id="contacto" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-lg text-muted-foreground">
            Estamos listos para ayudarte con tu proyecto de fundición de aluminio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Dirección</h3>
                  <p className="text-sm text-muted-foreground">
                    Rodolfo López 1627<br />
                    B1878 Quilmes<br />
                    Provincia de Buenos Aires<br />
                    Argentina
                  </p>
                </div>
                <Button 
                  onClick={handleAddressClick}
                  className="w-full"
                  variant="default"
                >
                  Ver en Google Maps
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Teléfonos</h3>
                  <p className="text-sm text-muted-foreground">
                    Celular: 1136586982<br />
                    Fijo: 11 6086-3620
                  </p>
                </div>
                <Button 
                  onClick={() => handlePhoneClick('1136586982')}
                  className="w-full"
                  variant="default"
                >
                  Contactar por WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground break-all">
                    industriasduralsrl@yahoo.com.ar
                  </p>
                </div>
                <Button 
                  onClick={handleEmailClick}
                  className="w-full"
                  variant="default"
                >
                  Enviar un Email
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Horario de Atención</h3>
                  <p className="text-sm text-muted-foreground">
                    De 8 a 16 hrs<br />
                    De lunes a viernes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
