// Voeg hier je eigen projecten toe of pas de bestaande aan.
// Elk project is één object in deze lijst.

export type Project = {
  title: string;
  description: string;
  category: string;
  year: string;
  url?: string;
};

export const projects: Project[] = [
  {
    title: 'GR2026 Printcampagne',
    description:
      'Landelijke coördinatie van de printcampagne voor de gemeenteraadsverkiezingen: van portal-inrichting tot facturatie voor 250+ afdelingen.',
    category: 'Campagne-operaties',
    year: '2026'
  },
  {
    title: 'PRO Huisstijl & Rebranding',
    description:
      'Coördinatie van de uitrol van nieuwe merkmaterialen naar lokale afdelingen na de fusie tot Progressief Nederland.',
    category: 'Merkstrategie',
    year: '2026'
  },
  {
    title: 'Bewegingsopbouw Strategiesessie',
    description:
      'Onderzoek en presentatie over bewegingsopbouw-frameworks voor de interne strategie van PRO, gebaseerd op internationale organizing-praktijken.',
    category: 'Strategie',
    year: '2026'
  },
  {
    title: 'Campagneroute Lelystad Airport',
    description:
      'Opzet en uitvoering van een eendaagse campagneroute voor een Tweede Kamerlid gericht op een actueel dossier.',
    category: 'Campagne-operaties',
    year: '2025'
  }
];
