import './globals.css'

export const metadata = {
  title: 'ICAIH 2025',
  description: 'International Conference on Artificial Intelligence in Healthcare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
