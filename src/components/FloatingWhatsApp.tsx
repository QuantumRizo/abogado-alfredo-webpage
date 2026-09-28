import { MessageCircle, Instagram } from "lucide-react";

const FloatingButtons = () => {
  const whatsappUrl = "https://wa.me/522222933552?text=Hola,%20me%20gustaría%20agendar%20una%20cita";
  const instagramUrl = "https://www.instagram.com/mgr.miranda?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Instagram */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-fade-in"
        aria-label="Síguenos en Instagram"
      >
        <Instagram className="w-7 h-7 text-white" />
      </a>
      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-fade-in"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
};

export default FloatingButtons;