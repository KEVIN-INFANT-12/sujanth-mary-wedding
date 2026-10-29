export interface WeddingEvent {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  date: string;
  venueName: string;
  venueCity: string;
  venueState: string;
  mapUrl: string;
  mapButtonText: string;
  description?: string;
}

export interface WeddingConfig {
  couple: {
    groom: {
      fullName: string;
      shortName: string;
      parents: string;
      nativePlace: string;
    };
    bride: {
      fullName: string;
      shortName: string;
      parents: string;
      prefixParents: string;
    };
    monogram: string;
  };
  bibleVerse: {
    text: string;
    reference: string;
  };
  invitationNote: {
    heading: string;
    body: string;
  };
  date: {
    display: string;
    dayOfWeek: string;
    day: string;
    month: string;
    year: string;
    ceremonyTime: string;
    receptionTime: string;
    targetIso: string;
    timeZone: string;
  };
  ceremony: WeddingEvent;
  reception: WeddingEvent;
  timeline: Array<{
    time: string;
    title: string;
    venue: string;
    location: string;
    icon: 'church' | 'reception';
  }>;
}
