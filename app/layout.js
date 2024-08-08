export const metadata = {
  title: 'Marp Next.js App',
  description: 'Marp slides in a Next.js application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
