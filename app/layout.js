import { Albert_Sans } from 'next/font/google';
import './globals.css';

const albertSans = Albert_Sans({
  subsets: ['latin'], // Specify the subset you need
  weights: ['400', '700'], // Add weights you need (regular and bold here)
});

export const metadata = {
  title: 'Meritroot',
  description:"This is education website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={albertSans.className}>
     {children}
      </body>
    </html>
  );
}
