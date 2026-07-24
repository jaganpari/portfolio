interface TechIcon {
  name: string;
  class: string;
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