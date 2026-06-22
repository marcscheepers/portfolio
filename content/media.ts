// Voeg hier vermeldingen in de media, publicaties of optredens toe.

export type MediaItem = {
  title: string;
  source: string;
  date: string;
  description: string;
  url: string;
};

export const mediaItems: MediaItem[] = [
  {
    title: 'Hoe lokale afdelingen een landelijke fusie verwerken',
    source: 'Voorbeeld Nieuwsplatform',
    date: '2026-03-12',
    description:
      'Interview over de praktische uitdagingen van het samenvoegen van twee partijorganisaties op afdelingsniveau.',
    url: 'https://example.com'
  },
  {
    title: 'Podcast: Campagnevoeren in tijden van verandering',
    source: 'Politiek Podcast NL',
    date: '2025-11-04',
    description: 'Gastoptreden over operationele lessen uit de GR2026-campagne.',
    url: 'https://example.com'
  }
];
