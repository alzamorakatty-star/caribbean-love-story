import { Calendar } from "@/components/ui/calendar";
import { es } from 'date-fns/locale';
import watercolorFlower from '@/assets/watercolor-flower-cool.png';

interface WeddingCalendarProps {
  isSpanish?: boolean;
}

const WeddingCalendar = ({ isSpanish = false }: WeddingCalendarProps) => {
  // Events for February 2026 Carnaval
  const events = [
    { date: new Date(2026, 0, 27), label: isSpanish ? "Llegada" : "Arrival" },
    { date: new Date(2026, 1, 6), label: "Guacherna" },
    { date: new Date(2026, 1, 7), label: isSpanish ? "Día de la Boda" : "Wedding Day" },
    { date: new Date(2026, 1, 14), label: isSpanish ? "Batalla de flores" : "Battle of Flowers" },
    { date: new Date(2026, 1, 15), label: isSpanish ? "Gran Parada" : "Grand Parade" },
    { date: new Date(2026, 1, 16), label: isSpanish ? "Gran Parada de Fantasía" : "Fantasy Parade" },
    { date: new Date(2026, 1, 17), label: isSpanish ? "Joselito Carnaval" : "Joselito Carnaval" },
  ];

  const getEventForDate = (date: Date) => {
    return events.find(
      event =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Watercolor background */}
      <div 
        className="absolute inset-0 z-[-1] min-h-full w-full opacity-15"
        style={{ 
          backgroundImage: `url(${watercolorFlower})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-border">
        <h3 className="text-2xl font-playfair font-semibold text-primary text-center mb-6">
          {isSpanish ? "Febrero 2026 - Carnaval de Barranquilla" : "February 2026 - Barranquilla Carnival"}
        </h3>
        
        <Calendar
          mode="single"
          month={new Date(2026, 1, 1)} // February 2026
          locale={isSpanish ? es : undefined}
          showOutsideDays={true}
          className="font-playfair"
          classNames={{
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center mb-4",
            caption_label: "text-lg font-playfair font-semibold text-primary",
            nav: "space-x-1 flex items-center",
            nav_button: "h-8 w-8 bg-transparent p-0 text-primary hover:bg-accent",
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-primary rounded-md w-12 font-playfair font-semibold text-sm uppercase",
            row: "flex w-full mt-2",
            cell: "relative h-auto w-12 text-center text-sm p-0 focus-within:relative focus-within:z-20",
            day: "h-12 w-12 p-0 font-playfair font-normal hover:bg-accent/50 rounded-md transition-colors",
            day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
            day_today: "bg-accent text-accent-foreground font-semibold",
            day_outside: "text-muted-foreground opacity-40",
            day_disabled: "text-muted-foreground opacity-50",
          }}
          components={{
            DayContent: ({ date, ...props }) => {
              const event = getEventForDate(date);
              return (
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <span className="font-playfair text-sm">{date.getDate()}</span>
                  {event && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 bg-accent/20 rounded px-2 py-1 border border-border">
                      <p className="text-[0.65rem] font-playfair uppercase text-center text-foreground whitespace-nowrap overflow-hidden text-ellipsis">
                        {event.label}
                      </p>
                    </div>
                  )}
                </div>
              );
            },
          }}
        />
        
        {/* Event legend */}
        <div className="mt-12 space-y-2">
          {events.map((event, idx) => (
            <div key={idx} className="flex items-center gap-3 text-sm">
              <span className="font-playfair font-semibold text-primary">
                {event.date.toLocaleDateString(isSpanish ? 'es-ES' : 'en-US', { 
                  month: 'short', 
                  day: 'numeric' 
                })}:
              </span>
              <span className="font-playfair text-foreground">{event.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingCalendar;
