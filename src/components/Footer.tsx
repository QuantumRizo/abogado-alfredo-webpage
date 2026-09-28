import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Información de contacto */}
          <div>
            <img
              src="/logotipo_negativo.png"
              alt="Miranda Consultoría Legal Migratoria"
              className="h-10 mb-4"
            />
            <p className="text-primary-foreground/80 mb-4">
              Abogado especialista en derecho migratorio
            </p>
            {/* Redes sociales */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.instagram.com/mgr.miranda?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://wa.me/522222933552?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Contactar por WhatsApp"
              >
                <Phone className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contacto</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+52 222 293 3552</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>abgalfmiranda@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Puebla, Puebla</span>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Horario de Atención</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Lunes a Viernes: 9:00 - 18:00</p>
              <p>Sábados: 10:00 - 14:00</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {currentYear} Alfredo Miranda. Todos los derechos reservados.</p>
          <a 
            href="https://davidrizo.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] hover:text-muted-foreground transition-colors uppercase tracking-wider"
          >
            Created by David Rizo
          </a>
        </div>
      </div>
    </footer>
  );
}
