export interface OnboardingData {
  profile: {
    firstname: string;
    lastname: string;
    birthdate: string;
    email: string;
    city: string;
  };
  learning_tags: string[];
  employment_tags: string[];
  industry: string;
  marital: {
    status: string;
    duration: string;
  };
  parenting: {
    total_children: number;
    how_old: number;
  };
  seasons_in_life_tags: string[];
  interests_tags: string[];
  struggles_you_are_facing: string[];
}
