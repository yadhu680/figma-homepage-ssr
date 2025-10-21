import { createTheme } from "@mui/material/styles";
import createCache from "@emotion/cache";
import type { EmotionCache } from "@emotion/cache";

export function createEmotionCache(): EmotionCache {
  return createCache({ key: "css", prepend: true });
}

export const theme = createTheme({
  palette: {
    primary: { main: '#000' },
    secondary: { main: '#FF7043' },
    background: { default: '#FFFFFF', paper: '#F9FAFB' },
    text: { primary: '#000', secondary: '#6B7280' }
  },
  typography: {
    fontFamily: 'Satoshi, sans-serif',
    h1: { fontWeight: 700, fontSize: '3rem' },
    body1: { lineHeight: 1.6 }
  },
  shape: { borderRadius: 8 },
  spacing: 8
});

