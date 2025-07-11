export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
          <div>
              {children}
          </div>
      </main>
    );
  }
  