// Pas deze gegevens aan met jouw eigen informatie.
// Dit is het enige bestand dat je nodig hebt om de basisinstellingen van de site te wijzigen.

export const siteConfig = {
  name: 'Marc Scheepers',
  tagline: 'Campagnecoördinator & Organisator',
  description:
    'Campagnecoördinator en organisator gespecialiseerd in politieke campagnes, bewegingsopbouw en operationele uitvoering.',
  url: 'https://jouwdomein.nl',
  email: 'hallo@jouwdomein.nl',
  linkedInUrl: 'https://www.linkedin.com/in/jouwprofiel',

  // Zet op false om de "open to work"-badge te verbergen.
  openToWork: true,

  locales: ['nl', 'en'] as const,
  defaultLocale: 'nl' as const
};

export type SiteConfig = typeof siteConfig;
