import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for transparent to solid navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Interiors", href: "/interiors" },
    { name: "Info & Guide", href: "/info" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || location !== "/" ? "bg-white/90 backdrop-blur-md border-b border-border/40 text-foreground shadow-sm" : "bg-transparent text-white"
    }`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className={`text-2xl font-serif tracking-wide font-medium ${
            isScrolled || location !== "/" ? "text-primary" : "text-white drop-shadow-sm"
          }`}>
            Villa Norvic
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors uppercase tracking-widest ${
                location === link.href 
                  ? "text-primary font-bold" 
                  : isScrolled || location !== "/" 
                    ? "text-muted-foreground hover:text-primary" 
                    : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/request-stay">
            <Button className={`${
              isScrolled || location !== "/" 
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "bg-white text-primary hover:bg-white/90"
            } font-serif px-6`}>
              Request Stay
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled || location !== "/" ? "text-foreground" : "text-white"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-serif text-left hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link href="/request-stay" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary text-primary-foreground font-serif">
                    Request Stay
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}