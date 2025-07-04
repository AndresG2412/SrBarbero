// app/fonts.ts
import localFont from 'next/font/local';

export const imperialScript = localFont({
  src: [
    {
      path: '../../public/Fonts/ImperialScript-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    // ... otros formatos si los tienes
  ],
  variable: '--font-imperial-script', // <-- ESTO ES CLAVE
  display: 'swap',
});