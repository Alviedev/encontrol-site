import { formatDate, parseDate } from "./common";
import { DISCORD_INVITE } from "./socials";

export type EventLocation =
  | { type: "online"; platform: string; url: string }
  | { type: "inperson"; venue: string; city: string };

export type Event = {
  title: string;
  description: string;
  // "YYYY-MM-DD" moves the event to "past" automatically once the day is over.
  // Free text ("TBD", "Los miercoles 7:00 PM") is shown as-is and always counts as upcoming.
  date: string;
  time?: string;
  imageUrl?: string;
  location: EventLocation;
  registerUrl?: string; // shown while upcoming
  recap?: string; // shown once past, instead of the description
};

export const events: Event[] = [
  {
    title: "Meetup 001",
    description: "Nuestro primer meetup!",
    date: "2023-05-19",
    location: {
      type: "inperson",
      venue: "Nombre del lugar",
      city: "Monterrey, NL",
    },
    recap: "Juntada de networking!.",
    imageUrl: "/events/Meetup01.jpg",
  },
  {
    title: "Cowork",
    description:
      "Juntadas virtuales semanales para trabajar, compartir espacios, noticias de la comunidad, y mas.",
    date: "Los miercoles 7:00 PM",
    location: {
      type: "online",
      platform: "Discord",
      url: "discord.com",
    },
    registerUrl: "https://encontrol.dev",
    imageUrl: "events/Meetup08_poster.png",
  },
  {
    title: "Byte",
    description: "Byte en un cafe!!",
    date: "2023-12-20",
    location: {
      type: "inperson",
      venue: "Cafe",
      city: "Monterrey, NL",
    },
    recap: "juntada en un cafe de chill.",
    imageUrl: "events/Byte.png",
  },
  {
    title: "EnControl en Ladweek",
    description:
      "Espacio para compartir trabajo, recibir retroalimentación y hacer networking.",
    date: "2026-03-14",
    location: {
      type: "inperson",
      venue: "Campus Tec, Expo Estudios.",
      city: "Monterrey, NL",
    },
    imageUrl: "/events/Ladweek.jpg",
    recap:
      "Participacion en el area de Expo de Studios, haciendo difusion de proyectos locales e invitando a miembros nuevos.",
  },
  {
    title: "Meetup 002",
    description: "Nuestro segundo meetup!",
    date: "2023-09-26",
    location: {
      type: "inperson",
      venue: "Wam House",
      city: "Monterrey, NL",
    },
    recap: "Juntada de networking!.",
    imageUrl: "/events/Meetup02.jpg",
  },
  {
    title: "Meetup 003",
    description: "Nuestro Tercer meetup!",
    date: "2023-10-21",
    location: {
      type: "inperson",
      venue: "Apex Systems",
      city: "Monterrey, NL",
    },
    recap: "Juntada de networking!.",
    imageUrl: "/events/Meetup03.jpg",
  },
  {
    title: "Meetup 004",
    description: "Nuestro Cuarto meetup!",
    date: "2024-02-02",
    location: {
      type: "inperson",
      venue: "",
      city: "Monterrey, NL",
    },
    recap: "Juntada de networking!.",
    imageUrl: "events/Meetup04_poster.png",
  },
  {
    title: "Meetup 005",
    description: "Nuestro Quinto meetup!",
    date: "2024-07-17",
    location: {
      type: "inperson",
      venue: "XP Facultad de Videojuegos",
      city: "Monterrey, NL",
    },
    recap: "Juntada de networking!.",
    imageUrl: "/events/Meetup05.jpg",
  },
  {
    title: "Meetup 006",
    description: "Nuestro Sexto meetup!",
    date: "2024-10-17",
    location: {
      type: "inperson",
      venue: "",
      city: "Monterrey, NL",
    },
    recap: "Juntada de networking!.",
    imageUrl: "events/Meetup06_poster.png",
  },
  {
    title: "Meetup 007",
    description: "Nuestro Septimo meetup!",
    date: "2025-02-23",
    location: {
      type: "inperson",
      venue: "",
      city: "Monterrey, NL",
    },
    recap: "Juntada de networking!.",
    imageUrl: "/events/Meetup07.jpg",
  },
  {
    title: "Meetup 008",
    description: "Nuestro Octavo meetup!",
    date: "2025-04-20",
    location: {
      type: "inperson",
      venue: "",
      city: "Monterrey, NL",
    },
    recap: "Juntada de networking!.",
    imageUrl: "events/Meetup08_poster.png",
  },
  {
    title: "Meetup 009",
    description: "Nuestro Noveno meetup!",
    date: "2025-12-02",
    location: {
      type: "inperson",
      venue: "",
      city: "Monterrey, NL",
    },
    recap: "Juntada de networking!.",
    imageUrl: "/events/Meetup09.JPG",
  },
  {
    title: "Iniciativa LOOT - DROP MARZO",
    description:
      "DROP es un espacio bimestral de 4hrs del programa LOOT que buscar darle continuidad a los proyectos de videojuegos fortalecido habilidades diversas.",
    date: "2026-03-29",
    location: {
      type: "inperson",
      venue: "Innovaction GYM - Tec de Monterrey Campus Monterrey",
      city: "Monterrey, NL",
    },
    imageUrl: "/events/dropMarzo2026.png",
    recap:
      "Nuestros amigos de la iniciativa LOOT arrancaron su trayectoria, dando apoyo, seguimiento y liderazgo a desarrolladores y proyectos locales.",
  },
  {
    title: "Meetup (011)",
    description: "🗣️ ÚNETE A FESTEJAR NUESTRO 3ER ANIVERSARIO!",
    date: "2026-04-25",
    location: {
      type: "inperson",
      venue:
        "Casa de la Cultura de Nuevo León, ubicada en Av. Colón 400 Ote. Centro",
      city: "Monterrey, NL",
    },
    imageUrl: "/events/Meetup11_poster.png",
    recap: "Junta de netowrking. Edicion aniversario!",
  },
  {
    title: "Meetup (012)",
    description: "Ven a una edicion cinematica en la Casa de la Cultura!",
    date: "2026-06-27",
    time: "4-8pm",
    location: {
      type: "inperson",
      venue:
        "Casa de la Cultura de Nuevo León, ubicada en Av. Colón 400 Ote. Centro",
      city: "Monterrey, NL",
    },
    imageUrl: "/events/Meetup12_poster.png",
    recap:
      "Nuestra juntada de networking mas numerosa. De nuevo en Casa de la Cultura!",
  },
  {
    title: "Meetup (013)",
    description: "Ven a una edicion flexible en la UDEM!",
    date: "2026-08-22",
    time: "4-8pm",
    location: {
      type: "inperson",
      venue: "UDEM",
      city: "Monterrey, NL",
    },
    imageUrl: "/events/Meetup13_poster.jpg",
    recap: "Mostrando flexibilidad en la comunidad. En la UDEM!",
  },
  {
    title: "Meetup (014)",
    description: "Ven a una edicion identificadora en el TEC!",
    date: "2026-09-29",
    time: "4-8pm",
    location: {
      type: "inperson",
      venue: "TEC",
      city: "Monterrey, NL",
    },
    imageUrl: "/events/Meetup14_poster.jpg",
    registerUrl: "https://forms.gle/ASF55CzTCVEcarLK8",
  },
  {
    title: "EnControl Showcase!",
    description: "Showcase de juegos de la comunidad! Detalles TBD",
    date: "TBD",
    location: {
      type: "inperson",
      venue: "TBD",
      city: "Monterrey, NL",
    },
    imageUrl: "/events/Meetup12_poster.png",
    registerUrl: DISCORD_INVITE,
  },
];

const isoDate = /^\d{4}-\d{2}-\d{2}$/;

export function isPast(event: Event): boolean {
  if (!isoDate.test(event.date)) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return parseDate(event.date) < today;
}

export function formatEventDate(event: Event): string {
  const date = isoDate.test(event.date) ? formatDate(event.date) : event.date;
  return event.time ? `${date} · ${event.time}` : date;
}

export function formatLocation(location: EventLocation): string {
  switch (location.type) {
    case "online":
      return `Online · ${location.platform}`;
    case "inperson":
      return `${location.venue} · ${location.city}`;
  }
}
