import "./globals.css";

export const metadata = {
  title: "경력잇다",
  description: "경력을 잇고, 가치를 다시 일로",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}