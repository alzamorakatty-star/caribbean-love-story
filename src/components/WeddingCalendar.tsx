import * as React from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Calendar as ShadCalendar } from "@/components/ui/calendar";
import watercolorFlower from "@/assets/watercolor-flower-cool.png";

type EventItem = {
  date: Date;
  label: string;
};

const EVENTS: EventItem[] = [
  { date: new Date(2026, 0, 27), label: "Llegada" },
  { date: new Date(2026, 1, 6), label: "Guacherna" },
  { date: new Date(2026, 1, 7), label: "Wedding Day" },
  { date: new Date(2026, 1, 14), label: "Batalla de flores" },
  { date: new Date(2026, 1, 15), label: "Gran Parada" },
  { date: new Date(2026, 1, 16), label: "Gran Parada de Fantasía" },
  { date: new Date(2026, 1, 17), label: "Joselito Carnaval" },
];

const eventMap = new Map<string, string>(
  EVENTS.map((e) => [format(e.date, "yyyy-MM-dd"), e.label])
);

const eventDates = EVENTS.map((e) => e.date);

function DayContent({ date }: { date: Date }) {
  const key = format(date, "yyyy-MM-dd");
  const label = eventMap.get(key);
  const isOutside = date.getMonth() !== 1; // 1 = February

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-1",
        "font-playfair"
      )}
    >
      <span
        className={cn(
          "text-base sm:text-lg leading-none",
          isOutside ? "text-muted-foreground/60" : "text-foreground"
        )}
      >
        {format(date, "d")}
      </span>
      {label && (
        <span
          className={cn(
            "px-1 py-0.5 text-[10px] sm:text-xs leading-tight uppercase tracking-wide rounded",
            "font-playfair"
          )}
          style={{
            backgroundColor: "hsl(var(--accent) / 0.18)",
            color: "hsl(var(--foreground))",
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

export default function WeddingCalendar() {
  return (
    <section
      aria-label="Wedding Calendar – February 2026"
      className="relative overflow-hidden rounded-2xl border border-border bg-background/80 p-4 sm:p-6"
    >
      <div
        className="pointer-events-none absolute inset-0 z-[-1] min-h-full w-full opacity-20"
        style={{
          backgroundImage: `url(${watercolorFlower})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <header className="mb-4 text-center">
        <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-primary">
          Wedding Calendar — February 2026
        </h2>
      </header>

      <div className="overflow-x-auto">
        <div className="mx-auto max-w-full">
          <ShadCalendar
            locale={enGB}
            month={new Date(2026, 1, 1)}
            fixedWeeks
            showOutsideDays
            components={{ DayContent }}
            className={cn("p-3 pointer-events-auto")}
            classNames={{
              caption_label: "text-xl sm:text-2xl font-playfair",
              head_cell:
                "text-muted-foreground font-playfair w-12 sm:w-16 text-[0.8rem]",
              table: "w-full border-collapse",
              row: "flex w-full mt-2",
              cell:
                "relative h-20 w-14 sm:h-24 sm:w-20 p-0 text-center text-sm",
              day:
                "h-full w-full p-0 font-normal aria-selected:opacity-100 flex",
            }}
            modifiers={{ event: eventDates }}
            modifiersClassNames={{ event: "bg-accent/20" }}
          />
        </div>
      </div>
    </section>
  );
}
