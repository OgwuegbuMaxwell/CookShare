import MainHeader from '@/components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: 'CookShare',
  description: 'Share your meals, tips, and recipes with ease',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
