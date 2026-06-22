// Pas hier je werkervaring, opleiding, vaardigheden en aanbevelingen aan.

export type TimelineEntry = {
  period: string;
  title: string;
  organization: string;
  description: string;
};

export const experience: TimelineEntry[] = [
  {
    period: '2024 — heden',
    title: 'Campagnecoördinator & Organisator',
    organization: 'PvdA Partijbureau / PRO (Progressief Nederland)',
    description:
      'Coördinatie van landelijke print- en campagnecampagnes, bewegingsopbouw en operationele uitvoering tijdens de fusie tot PRO.'
  },
  {
    period: '2021 — 2024',
    title: 'Campagnemedewerker',
    organization: 'PvdA Partijbureau',
    description:
      'Opzet en uitvoering van de printcampagne voor gemeenteraadsverkiezingen, inclusief leveranciersbeheer en afdelingsondersteuning.'
  }
];

export const education: TimelineEntry[] = [
  {
    period: '2017 — 2021',
    title: 'Bachelor Communicatie',
    organization: 'Naam Hogeschool',
    description: 'Specialisatie in organisatiecommunicatie en bedrijfsverbetering.'
  }
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  { category: 'Campagnestrategie', skills: ['Bewegingsopbouw', 'Organizing', 'Canvassing', 'Volunteer management'] },
  { category: 'Operaties', skills: ['Projectmanagement', 'Leveranciersbeheer', 'Budgetbeheer', 'Procesoptimalisatie'] },
  { category: 'Digitaal', skills: ['Notion', 'Slack', 'Excel/Sheets', 'Automatisering'] },
  { category: 'Talen', skills: ['Nederlands (moedertaal)', 'Engels (vloeiend)'] }
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Wie tijdens een fusie van twee partijorganisaties de printcampagne soepel laat verlopen, kan alles. Een onmisbare operationele kracht.',
    name: 'Collega Naam',
    title: 'Campagneleider'
  },
  {
    quote:
      'Combineert strategisch inzicht in organizing met de discipline om 250 afdelingen tegelijk operationeel te ondersteunen.',
    name: 'Collega Naam',
    title: 'Teamlead Partijbureau'
  }
];
