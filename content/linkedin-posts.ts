// HOE VOEG JE EEN NIEUWE LINKEDIN-POST TOE
// 1. Plaats een post op LinkedIn.
// 2. Wacht een paar dagen zodat er weergaven, likes en reacties binnenkomen.
// 3. Kopieer de tekst en kijk de statistieken na onder je post op LinkedIn.
// 4. Voeg hieronder een nieuw object toe BOVENAAN de lijst (nieuwste eerst).
// 5. Sla op, upload het gewijzigde bestand naar GitHub, Vercel bouwt de site automatisch opnieuw.

export type LinkedInPost = {
  text: string;
  date: string; // formaat: 'YYYY-MM-DD'
  url: string;
  views: number;
  likes: number;
  reactions: number;
  comments: number;
};

export const linkedInPosts: LinkedInPost[] = [
  {
    text: `Vandaag de laatste afdeling geholpen met de overgang naar onze nieuwe huisstijl.

250 afdelingen, 26 leveranciers-facturen en heel veel telefoontjes later: het staat.

Wat me opvalt is hoeveel geduld lokale vrijwilligers hebben tijdens een fusietraject als dit. Dank aan iedereen die meedacht.`,
    date: '2026-05-14',
    url: 'https://www.linkedin.com/in/jouwprofiel/posts/voorbeeld-1',
    views: 1840,
    likes: 96,
    reactions: 112,
    comments: 14
  },
  {
    text: `Bewegingsopbouw is meer dan een buzzword.

Het verschil tussen een partij die mensen mobiliseert voor één verkiezing en een partij die een duurzame beweging bouwt, zit in de structuur die je tussen de campagnes door opbouwt.

Deze week presenteerde ik onze aanpak hiervoor aan het team.`,
    date: '2026-04-02',
    url: 'https://www.linkedin.com/in/jouwprofiel/posts/voorbeeld-2',
    views: 2310,
    likes: 134,
    reactions: 151,
    comments: 22
  }
];
