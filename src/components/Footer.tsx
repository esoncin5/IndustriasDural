
'use client';

import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open('https://wa.me/5491136586982', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:industriasduralsrl@yahoo.com.ar';
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">ID</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Industrias Dural</h3>
                <p className="text-xs text-muted-foreground">Fundición de Aluminio</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Líderes en fundición de aluminio por inyección con más de 25 años de experiencia.
            </p>
            <div className="flex space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 hover:text-[#25D366]"
                onClick={handleWhatsApp}
              >
                <WhatsAppIcon className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={handleEmail}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Fundición por Inyección</li>
              <li>Mecanizado CNC</li>
              <li>Diseño de Moldes</li>
              <li>Ingeniería y Prototipado</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Sectores</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Automotriz</li>
              <li>Aeroespacial</li>
              <li>Electrónica</li>
              <li>Iluminación</li>
              <li>Construcción</li>
              <li>Maquinaria Industrial</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="font-medium text-foreground">Ubicación:</li>
              <li>Rodolfo López 1627, B1878 Quilmes, Provincia de Buenos Aires, Argentina</li>
              <li className="font-medium text-foreground mt-3">Teléfono:</li>
              <li>1136586982</li>
              <li className="font-medium text-foreground mt-3">Email:</li>
              <li>industriasduralsrl@yahoo.com.ar</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Industrias Dural SRL. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
