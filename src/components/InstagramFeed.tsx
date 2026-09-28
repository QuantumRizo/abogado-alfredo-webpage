import { Instagram, ArrowRight } from 'lucide-react';

const INSTAGRAM_PROFILE = "https://www.instagram.com/mgr.miranda?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";
const INSTAGRAM_EMBED = "https://www.instagram.com/mgr.miranda/embed";

export function InstagramFeed() {
  return (
    <section className="py-20 px-4" style={{ background: 'hsl(207 33% 30%)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-full p-[2px]"
              style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #bc1888, #833ab4)' }}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{ background: 'hsl(207 33% 30%)' }}
              >
                <Instagram className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              @mgr.miranda
            </h2>
          </div>
          <p className="text-base text-white/50 max-w-xl mx-auto mb-6">
            Síguenos en Instagram para consejos legales, casos de éxito y novedades en derecho migratorio.
          </p>
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #bc1888)',
            }}
          >
            <Instagram className="w-5 h-5" />
            Seguir en Instagram
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Instagram Embed — clipped with gradient fade */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ maxHeight: '480px' }}>
          <iframe
            src={INSTAGRAM_EMBED}
            className="w-full border-0"
            style={{ height: '600px' }}
            loading="lazy"
            allowTransparency
            title="Instagram feed de @mgr.miranda"
          />
          {/* Gradient fade at the bottom to blend into dark background */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '120px',
              background: 'linear-gradient(to bottom, transparent, hsl(207 33% 30%))',
            }}
          />
        </div>
      </div>
    </section>
  );
}
