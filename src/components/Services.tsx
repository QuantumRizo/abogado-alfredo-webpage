import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AutoCarousel from './AutoCarousel';

// Imágenes para el carrusel de Servicios (Casos de éxito)
const SUCCESS_STORIES_IMAGES = [
  { id: 1, url: "/caso1.jpg", alt: "Visa Aprobada Caso 1" },
  { id: 2, url: "/caso2.jpg", alt: "Visa Aprobada Caso 2" },
  { id: 3, url: "/caso3.jpg", alt: "Visa Aprobada Caso 3" },
  { id: 4, url: "/caso4.jpg", alt: "Visa Aprobada Caso 4" },
  { id: 5, url: "/caso5.jpg", alt: "Visa Aprobada Caso 5" },
];

// Historias de Instagram = Nuestros Servicios
const SERVICE_STORIES = [
  { id: 1, src: "/historia1.png", alt: "¿Qué ofrecemos?", label: "¿Qué ofrecemos?" },
  { id: 2, src: "/historia2.png", alt: "Visas", label: "Visas" },
  { id: 3, src: "/historia3.png", alt: "Programas para viajeros", label: "Programas" },
  { id: 4, src: "/historia4.png", alt: "Pasaporte mexicano", label: "Pasaporte" },
  { id: 5, src: "/historia5.png", alt: "Campamentos de verano", label: "Campamentos" },
  { id: 6, src: "/historia6.png", alt: "Preguntas frecuentes", label: "FAQ" },
  { id: 7, src: "/historia7.png", alt: "Contacto", label: "Contacto" },
];

export function Services() {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('.story-card')?.clientWidth || 280;
    el.scrollBy({ left: direction === 'left' ? -cardWidth - 24 : cardWidth + 24, behavior: 'smooth' });
  };

  // Keyboard navigation in modal
  useEffect(() => {
    if (selectedStory === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedStory(null);
      if (e.key === 'ArrowRight') setSelectedStory(prev => prev !== null && prev < SERVICE_STORIES.length - 1 ? prev + 1 : 0);
      if (e.key === 'ArrowLeft') setSelectedStory(prev => prev !== null && prev > 0 ? prev - 1 : SERVICE_STORIES.length - 1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedStory]);

  return (
    <section className="py-24 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">

        {/* === SECCIÓN USA + CARRUSEL === */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              USA: Vive el sueño, viaja la emoción.
              <span className="block text-accent mt-2">Tu próxima gran historia empieza aquí.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "Viajar a Estados Unidos nunca ha estado tan al alcance de tu historia. Permítenos acompañarte en cada paso para que disfrutes un viaje seguro, emocionante y hecho completamente a tu estilo."
            </p>
          </div>
          <div className="w-full">
            <AutoCarousel images={SUCCESS_STORIES_IMAGES} height="300px" />
            <p className="text-center text-sm text-muted-foreground mt-4 italic">
              Casos de éxito y visas aprobadas de nuestros clientes
            </p>
          </div>
        </div>

        {/* === SERVICIOS CON HISTORIAS === */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Especializados en derecho migratorio con experiencia, dedicación y cercanía
            </p>
          </div>

          {/* Carousel container with navigation */}
          <div className="relative group">
            {/* Left arrow */}
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-12 h-12 rounded-full bg-white/90 shadow-xl border border-border flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
            )}

            {/* Right arrow */}
            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-12 h-12 rounded-full bg-white/90 shadow-xl border border-border flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>
            )}

            {/* Fade edges */}
            {canScrollLeft && (
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted to-transparent z-[5] pointer-events-none" />
            )}
            {canScrollRight && (
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted to-transparent z-[5] pointer-events-none" />
            )}

            {/* Stories horizontal scroll */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-6 px-2 snap-x snap-mandatory scrollbar-hide"
            >
              {SERVICE_STORIES.map((story, index) => (
                <button
                  key={story.id}
                  onClick={() => setSelectedStory(index)}
                  className="story-card flex-shrink-0 w-[220px] md:w-[260px] group/card cursor-pointer snap-center"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ring-1 ring-border/50 hover:ring-accent/50">
                    {/* Aspect ratio container 9:16 */}
                    <div className="aspect-[9/16]">
                      <img
                        src={story.src}
                        alt={story.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#354E66]/70 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="text-white font-semibold text-lg drop-shadow-lg">
                        {story.label}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-2 italic">
              Haz clic en cualquier imagen para ver más detalles
            </p>
          </div>
        </div>

        {/* Story Viewer Modal */}
        {selectedStory !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm"
            onClick={() => setSelectedStory(null)}
          >
            <div
              className="relative max-w-sm w-full max-h-[90vh] animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Progress bar */}
              <div className="absolute top-3 left-3 right-3 flex gap-1 z-10">
                {SERVICE_STORIES.map((_, i) => (
                  <div
                    key={i}
                    className={`h-[3px] flex-1 rounded-full transition-all duration-300 ${
                      i === selectedStory ? 'bg-white' : i < selectedStory ? 'bg-white/60' : 'bg-white/25'
                    }`}
                  />
                ))}
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-5 right-4 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white/90 hover:text-white hover:bg-black/60 flex items-center justify-center text-lg font-bold transition-all"
              >
                ✕
              </button>

              {/* Story image */}
              <img
                src={SERVICE_STORIES[selectedStory].src}
                alt={SERVICE_STORIES[selectedStory].alt}
                className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              />

              {/* Navigation areas */}
              <button
                className="absolute left-0 top-0 w-1/3 h-full"
                aria-label="Anterior"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedStory(selectedStory > 0 ? selectedStory - 1 : SERVICE_STORIES.length - 1);
                }}
              />
              <button
                className="absolute right-0 top-0 w-1/3 h-full"
                aria-label="Siguiente"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedStory(selectedStory < SERVICE_STORIES.length - 1 ? selectedStory + 1 : 0);
                }}
              />

              {/* Story counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white/90 text-xs px-3 py-1 rounded-full">
                {selectedStory + 1} / {SERVICE_STORIES.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}