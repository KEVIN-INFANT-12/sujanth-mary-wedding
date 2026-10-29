import { WeddingConfig } from '../types/wedding';

export const weddingData: WeddingConfig = {
  couple: {
    groom: {
      fullName: 'N.D. Sujanth Roy',
      shortName: 'Sujanth Roy',
      parents: 'Mr. N.J. Devadoss & Mrs. N. Maria Goretti',
      nativePlace: 'Kilachery, Tiruvallur Dt',
    },
    bride: {
      fullName: 'I. Mary Princy',
      shortName: 'Mary Princy',
      parents: 'Mr. A.G. Irudhaya Arokia Arasu & Mrs. K. Baptista',
      prefixParents: 'D/o. ',
    },
    monogram: 'S & M',
  },
  bibleVerse: {
    text: "This is the Lord's doing; It is marvellous in our eyes",
    reference: 'Psalm 118:23',
  },
  invitationNote: {
    heading: 'WEDDING INVITATION',
    body: 'Hearty invite you to join us in celebrating the marriage of our son',
  },
  date: {
    display: 'Sunday, 15 November 2026',
    dayOfWeek: 'Sunday',
    day: '15',
    month: 'November',
    year: '2026',
    ceremonyTime: '10:45 AM',
    receptionTime: '12:30 PM',
    // 15 November 2026 at 10:45 AM IST (UTC+05:30)
    targetIso: '2026-11-15T10:45:00+05:30',
    timeZone: 'Asia/Kolkata',
  },
  ceremony: {
    id: 'ceremony',
    title: 'THE WEDDING CEREMONY',
    subtitle: 'Solemnization of Holy Matrimony',
    time: '10:45 AM',
    date: 'Sunday, 15 November 2026',
    venueName: 'SACRED HEART CHURCH',
    venueCity: 'Kilachery',
    venueState: 'Tamil Nadu',
    mapUrl: 'https://maps.app.goo.gl/6XaabqdPQz4d5h2x5',
    mapButtonText: 'VIEW CHURCH LOCATION',
    description: 'Join us as we exchange sacred vows and receive holy blessings at the historic Sacred Heart Church in Kilachery.',
  },
  reception: {
    id: 'reception',
    title: 'THE WEDDING RECEPTION',
    subtitle: 'Celebration of Joy & Feasting',
    time: '12:30 PM',
    date: 'Sunday, 15 November 2026',
    venueName: 'BRINDAVAN MAHAL',
    venueCity: 'Kilachery',
    venueState: 'Tamil Nadu',
    mapUrl: 'https://maps.app.goo.gl/4951P1Z6gEMirQ1Q6',
    mapButtonText: 'GET DIRECTIONS',
    description: 'Following the Holy Mass, please join our families for an afternoon of traditional feast, warm fellowship, and celebration.',
  },
  timeline: [
    {
      time: '10:45 AM',
      title: 'Wedding Ceremony',
      venue: 'Sacred Heart Church',
      location: 'Kilachery, Tamil Nadu',
      icon: 'church',
    },
    {
      time: '12:30 PM',
      title: 'Wedding Reception',
      venue: 'Brindavan Mahal',
      location: 'Kilachery, Tamil Nadu',
      icon: 'reception',
    },
  ],
};
