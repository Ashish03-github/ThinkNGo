export type OnboardingItemIcon = 'pagination1' | 'pagination2' | 'pagination3';

export interface OnboardingItem {
  iconName: OnboardingItemIcon;
  text: string;
  id: number;
}

export const ONBOARDING_ITEMS: OnboardingItem[] = [
  {
    id: 0,
    iconName: 'pagination1',
    text: 'Video consult top doctors \n from the comfort of your \n home.',
  },
  {
    id: 1,
    iconName: 'pagination2',
    text: 'find the nearest pharmacy \n carrying your required \n medication.',
  },
  {
    id: 2,
    iconName: 'pagination3',
    text: 'Find the best \n laboratory for your needs.',
  },
];





