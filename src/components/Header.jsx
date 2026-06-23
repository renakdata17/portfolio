const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

function HoverLink({ href, label }) {
  return (
    <a
      href={href}
      data-cursor="disable"
      className="relative block h-5 overflow-hidden text-sm text-muted"
    >
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {label}
      </span>
      <span className="absolute left-0 top-full block text-accent transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {label}
      </span>
    </a>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-6 border-b border-line bg-surface/70 px-5 py-[18px] backdrop-blur-xl sm:px-9 lg:px-[72px] lg:pl-[100px]">
      <a
        href="#top"
        data-cursor="disable"
        className="flex items-center gap-[18px] font-extrabold tracking-[-0.03em]"
      >
        <span className="grid h-[42px] w-[42px] place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 font-mono text-[#041016] shadow-[0_12px_30px_rgba(82,245,196,0.25)]">
          OR
        </span>
        <span>Ondrej Renak</span>
      </a>

      <nav className="hidden items-center gap-7 lg:flex">
        {NAV_LINKS.map((link) => (
          <div key={link.href} className="group">
            <HoverLink href={link.href} label={link.label} />
          </div>
        ))}
      </nav>
    </header>
  );
}
