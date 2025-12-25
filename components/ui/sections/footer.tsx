export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative  py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 z-10">
      <div className="max-w-7xl mx-auto text-center  flex md:flex-row flex-col-reverse justify-between">
        <p className="text-muted-foreground">
          © {currentYear} ZidBit Technologies. All rights reserved.
        </p>
       <p className="text-muted-foreground">
  <a
    href="mailto:support@zidbit.com"
    className="hover:underline"
  >
    support@zidbit.com
  </a>
</p>
      </div>
    </footer>
  );
}
