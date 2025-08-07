import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  isSpanish?: boolean;
}

const CountdownTimer = ({ isSpanish = false }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-02-07T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeLabels = {
    en: {
      days: 'days',
      hours: 'hours', 
      minutes: 'minutes',
      seconds: 'seconds'
    },
    es: {
      days: 'días',
      hours: 'horas',
      minutes: 'minutos', 
      seconds: 'segundos'
    }
  };

  const labels = isSpanish ? timeLabels.es : timeLabels.en;

  return (
    <div className="flex justify-center space-x-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="text-3xl font-playfair font-bold text-primary">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm font-playfair uppercase tracking-wider text-muted-foreground">
            {labels[unit as keyof typeof labels]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;