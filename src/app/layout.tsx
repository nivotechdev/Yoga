import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gandha Yoga | Caxias do Sul',
  description: 'Um refúgio para o seu bem-estar. Equilíbrio entre corpo, mente e essência. Exclusividade e silêncio.',
  keywords: ['gandha yoga', 'yoga', 'caxias do sul', 'gandhayoga', 'terapias', 'corpo', 'mente', 'essência'],
  robots: 'index, follow',
  authors: [{name: 'Gandha Yoga', url: 'https://gandhayoga.com.br'}],
  openGraph: {
    title: 'Gandha Yoga | Caxias do Sul',
    description: 'Um refúgio para o seu bem-estar. Equilíbrio entre corpo, mente e essência. Exclusividade e silêncio.',
    images: [{url: 'https://gandhayoga.com.br/icon.png', width: 256, height: 256}],
    url: 'https://gandhayoga.com.br',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gandha Yoga | Caxias do Sul',
    description: 'Um refúgio para o seu bem-estar. Equilíbrio entre corpo, mente e essência. Exclusividade e silêncio.',
    images: ['https://gandhayoga.com.br/icon.png'],
  },
  icons: {
    icon: './icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}