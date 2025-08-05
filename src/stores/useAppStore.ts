import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { LANGUAGE_OPTIONS } from '@/lib/utils/constants';

interface AppState {
  language: keyof typeof LANGUAGE_OPTIONS;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  hoverColor: string;
  setLanguage: (language: AppState['language']) => void;
  setPrimaryColor: (primaryColor: AppState['primaryColor']) => void;
  setSecondaryColor: (secondaryColor: AppState['secondaryColor']) => void;
  setTextColor: (textColor: AppState['textColor']) => void;
  setHoverColor: (hoverColor: AppState['hoverColor']) => void;
}

const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        language: LANGUAGE_OPTIONS.en,
        primaryColor: '#0a0a0a',
        secondaryColor: '#262626',
        hoverColor: '#059669',
        textColor: '#fafafa',
        setLanguage: (language) => set({ language }),
        setPrimaryColor: (primaryColor) => set({ primaryColor }),
        setSecondaryColor: (secondaryColor) => set({ secondaryColor }),
        setTextColor: (textColor) => set({ textColor }),
        setHoverColor: (hoverColor) => set({ hoverColor }),
      }),
      { name: 'appStore' }
    ),
    { store: 'AppStore', name: 'App Store' }
  )
);

export default useAppStore;
