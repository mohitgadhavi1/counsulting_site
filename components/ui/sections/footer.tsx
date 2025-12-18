export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 z-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {currentYear} ZidBit Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
