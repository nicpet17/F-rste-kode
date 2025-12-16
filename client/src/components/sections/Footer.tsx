import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-serif text-white">Villa Norvic</h3>
            <p className="text-white/60 max-w-xs">
              Villa Victoria, No 5<br/>
              Av. Dr. Raymond Picaud<br/>
              06400 Cannes, France
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif text-white mb-4">Contact Host</h4>
            <div className="flex flex-col gap-3 text-white/70">
              <span className="font-medium text-white">Jarle Norman</span>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>+47 417 72 121</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>+33 607 931 672 (WhatsApp)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>jarle.norman@ambolt.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif text-white mb-4">Explore</h4>
            <div className="flex flex-col gap-2">
              <a href="#overview" className="text-white/60 hover:text-white transition-colors">Overview</a>
              <a href="#interiors" className="text-white/60 hover:text-white transition-colors">Interiors</a>
              <a href="#guide" className="text-white/60 hover:text-white transition-colors">Local Guide</a>
              <a href="#info" className="text-white/60 hover:text-white transition-colors">Information</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} Villa Norvic Cannes. All rights reserved.</p>
          <p>Designed with Replit</p>
        </div>
      </div>
    </footer>
  );
}