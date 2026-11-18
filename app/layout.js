import './globals.css';

export const metadata = {
  title: 'Mon Portfolio',
  description: 'Portfolio DevOps & Cloud',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
