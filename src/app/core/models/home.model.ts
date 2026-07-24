interface TechIcon {
  name: string;
  class: string;
  title: string;
}

interface HomeLink {
  name: string;
  link: string;
}

interface HomeCard {
  title: string;
  count: string;
}

export interface HomeData {
  homeLinks: HomeLink[];
  techIcons: TechIcon[];
  homeCards: HomeCard[];
}