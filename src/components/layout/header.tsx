"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/config/site";

const mobileNavigation = [
  ...navigation,
  { label: "Connect", href: "/connect" },
];

export function Header() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<boolean>();
  const disclosure = useRef<HTMLDetailsElement>(null);
  const button = useRef<HTMLElement>(null);
  const root = useRef<HTMLElement>(null);
  const closeMenu = () => {
    if (disclosure.current) disclosure.current.open = false;
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && disclosure.current?.open) {
        closeMenu();
        button.current?.focus();
      }
    }
    function onOutsidePointer(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) closeMenu();
    }
    function onFocusOut(event: FocusEvent) {
      if (!root.current?.contains(event.target as Node)) closeMenu();
    }
    const desktop = window.matchMedia("(min-width: 768px)");
    function onBreakpointChange() {
      if (desktop.matches) closeMenu();
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onOutsidePointer);
    document.addEventListener("focusin", onFocusOut);
    desktop.addEventListener("change", onBreakpointChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onOutsidePointer);
      document.removeEventListener("focusin", onFocusOut);
      desktop.removeEventListener("change", onBreakpointChange);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <header className="site-header" ref={root}>
      <div className="shell header-inner">
        <Link
          href="/"
          className="wordmark"
          onClick={closeMenu}
          aria-label="Drake Owen home"
        >
          drake<span>.</span>owen
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/connect" className="header-connect" onClick={closeMenu}>
          Connect <ArrowUpRight size={15} aria-hidden />
        </Link>
        {/* Native disclosure keeps opening/closing usable before hydration or without JS. */}
        <details
          className="mobile-menu"
          ref={disclosure}
          onToggle={(event) => setExpanded(event.currentTarget.open)}
        >
          <summary
            role="button"
            aria-expanded={expanded}
            ref={button}
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-controls="mobile-navigation"
          >
            <Menu
              className="menu-open-icon"
              size={20}
              strokeWidth={1.5}
              aria-hidden
            />
            <X
              className="menu-close-icon"
              size={20}
              strokeWidth={1.5}
              aria-hidden
            />
          </summary>
          <div className="mobile-panel">
            <nav
              id="mobile-navigation"
              className="mobile-nav shell"
              aria-label="Mobile navigation"
            >
              {mobileNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                  <ArrowUpRight size={16} aria-hidden />
                </Link>
              ))}
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
