import { useState } from 'react';
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import RSVPForm from "@/components/RSVPForm";
import { Calendar, MapPin, Languages } from 'lucide-react';
import watercolorFlower from '@/assets/watercolor-flower-cool.png';

const WeddingPage = () => {
  const [showRSVP, setShowRSVP] = useState(false);
  const [isSpanish, setIsSpanish] = useState(false);

  const translations = {
    en: {
      saturday: "Saturday",
      untilSpecialDay: "Until Our Special Day",
      confirmAttendance: "Confirm Attendance",
      quote: "In this life, we've decided to build a present full of shared dreams, where every moment becomes a celebration of our identity and love. We are Caribbean, and that's why we wanted to create a moment that transports us to the essence of our land: intense flavors, vibrant aromas, bright colors, festive sounds, and the magic born from the water and earth around us.",
      excitement: "We're so excited to share this moment with you. You'll soon receive your official invitation with more details. Get ready to celebrate!",
      date: "February 7, 2026"
    },
    es: {
      saturday: "Sábado",
      untilSpecialDay: "Hasta Nuestro Día Especial",
      confirmAttendance: "Confirmar Asistencia",
      quote: "En esta vida, hemos decidido construir un presente lleno de sueños compartidos, donde cada instante se convierte en una celebración de nuestra identidad y amor. Somos Caribe, y por eso quisimos crear un momento que nos transporte a la esencia de nuestra tierra: los sabores intensos, los aromas vibrantes, los colores vivos, los sonidos festivos y la magia que nace del agua y la tierra que nos rodea.",
      excitement: "¡Estamos muy emocionados de compartir este momento contigo! Pronto recibirás tu invitación oficial con más detalles. ¡Prepárate para celebrar!",
      date: "7 de febrero de 2026"
    }
  };

  const t = isSpanish ? translations.es : translations.en;

  const scrollToRSVP = () => {
    setShowRSVP(true);
    setTimeout(() => {
      document.getElementById('rsvp-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background - white with floral watermark */}
      <div className="fixed inset-0 z-0 bg-background">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `url(${watercolorFlower})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      </div>

      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={() => setIsSpanish(!isSpanish)}
          variant="outline"
          size="sm"
          className="bg-background/80 backdrop-blur-sm border-border text-foreground hover:bg-accent"
        >
          <Languages className="w-4 h-4 mr-2" />
          {isSpanish ? 'EN' : 'ES'}
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative z-20 mx-auto max-w-[50%] min-w-[320px]">
        <section className="min-h-screen flex items-center justify-center p-6">
          <div className="text-center">
            {/* Vertical Save the Date */}
            <div className="flex flex-col items-center mb-8">
              <h1 className="text-4xl font-playfair font-bold text-primary tracking-[0.3em]">
                SAVE
              </h1>
              <h2 className="text-2xl font-dancing text-primary">the</h2>
              <h1 className="text-4xl font-playfair font-bold text-primary tracking-[0.3em]">
                DATE
              </h1>
            </div>

            <h2 className="text-2xl font-playfair font-semibold text-primary tracking-[0.2em] uppercase">
              KATTY ALZAMORA & CHRISTIAN HEINS
            </h2>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-10 px-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-playfair font-semibold text-primary">
              {t.saturday}
            </h3>
            <div className="text-lg text-foreground">
              <Calendar className="inline w-5 h-5 mr-2 text-primary" />
              <span className="font-playfair">{t.date}</span>
            </div>
            <div className="text-lg text-foreground">
              <MapPin className="inline w-5 h-5 mr-2 text-primary" />
              <span className="font-playfair tracking-wide uppercase">BARRANQUILLA</span>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-10 px-6">
          <blockquote className="text-lg leading-relaxed text-foreground font-playfair italic text-center max-w-xl mx-auto">
            "{t.quote}"
          </blockquote>
        </section>

        {/* Countdown */}
        <section className="py-10 px-6 text-center">
          <h3 className="text-2xl font-playfair font-semibold text-primary mb-4">
            {t.untilSpecialDay}
          </h3>
          <CountdownTimer />
        </section>

        {/* RSVP Button */}
        <section className="py-10 px-6 text-center">
          <Button
            onClick={scrollToRSVP}
            variant="elegant"
            size="lg"
            className="text-lg px-8 py-4 font-playfair"
          >
            {t.confirmAttendance}
          </Button>
        </section>

        {/* RSVP Form */}
        {showRSVP && (
          <section id="rsvp-section" className="py-10 px-6">
            <div className="max-w-xl mx-auto">
              <RSVPForm />
            </div>
          </section>
        )}

        {/* Excitement Text */}
        <section className="py-10 px-6 text-center">
          <div className="bg-secondary rounded-xl p-6 border border-border">
            <p className="text-lg text-foreground font-playfair">
              {t.excitement}
            </p>
          </div>
        </section>

        <footer className="py-6 text-center">
          <span className="text-foreground font-playfair">Katty Alzamora & Christian Heins • {t.date}</span>
        </footer>
      </div>
    </div>
  );
};

export default WeddingPage;