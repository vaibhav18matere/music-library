export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <>
          <h3>Course layout structure</h3>
               {children}
          </>
     );
}
