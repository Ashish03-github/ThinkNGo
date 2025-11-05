import { ThemeFonts } from './fonts';
import { ThemeColors } from './colors';
import { ThemeLayout } from './layout';
import { ThemeSpacing } from './spacing';

export { default as colors } from './colors';
export { default as layout } from './layout';
export { default as spacing } from './spacing';
export { default as fonts } from './fonts';

export type RootTheme = {
  Colors: ThemeColors['light' | 'dark'];
  Fonts: ThemeFonts;
  Layout: ThemeLayout;
  Spacing: ThemeSpacing;
};
