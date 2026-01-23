export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5 z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <div className="flex flex-col md:flex-row justify-between w-full border-b border-white/10 pb-12 gap-10 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-2xl font-bold">ZidBit</h3>
            <p className="text-slate-400 max-w-sm">
              Empowering businesses with cutting-edge web solutions and expert technical consulting.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold">Contact</h4>
            <a href="mailto:support@zidbit.com" className="text-slate-400 hover:text-primary transition-colors">
              support@zidbit.com
            </a>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse justify-between w-full pt-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} ZidBit Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
