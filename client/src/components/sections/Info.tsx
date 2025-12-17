import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Key, Wifi, Car, ShieldAlert, Phone, Sparkles, Thermometer, Tv } from "lucide-react";

export function Info() {
  return (
    <section id="info" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-semibold">Guest Guide</span>
          <h2 className="text-4xl font-serif mt-4 mb-6 text-foreground">Practical Information</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="check-in">
            <AccordionTrigger className="font-serif text-xl">
              <div className="flex items-center gap-3">
                <Key className="h-5 w-5 text-primary" />
                Arrival & Check-in
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg leading-relaxed pl-8">
              <ul className="list-disc space-y-2 pl-4">
                <li>Keybox is located behind the air conditioner by the entrance door. Code will be provided by host.</li>
                <li>Quiet hours from 11:00 p.m.</li>
                <li>Upon arrival, if there are any issues accessing the area gate, ring the doorbell at "Norvic" – Jarle can open remotely via phone.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="wifi">
            <AccordionTrigger className="font-serif text-xl">
              <div className="flex items-center gap-3">
                <Wifi className="h-5 w-5 text-primary" />
                Wi-Fi Network
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg leading-relaxed pl-8">
              <p className="mb-2">Wi-Fi details will be provided by the host upon arrival.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="amenities">
            <AccordionTrigger className="font-serif text-xl">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary" />
                Amenities & Facilities
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg leading-relaxed pl-8">
              <p className="mb-4">The apartment is 170 sqm with a 200 sqm garden with a barbecue.</p>
              
              <h4 className="font-serif text-foreground mb-2 flex items-center gap-2">
                <Thermometer className="h-4 w-4" /> Climate Control
              </h4>
              <p className="mb-4">Air-condition panels are available in all rooms. Please adjust temperature when leaving.</p>

              <h4 className="font-serif text-foreground mb-2 flex items-center gap-2">
                <Tv className="h-4 w-4" /> Entertainment
              </h4>
              <p className="mb-4">Apple TV is provided for entertainment (log in with your own profile).</p>

              <h4 className="font-serif text-foreground mb-2">General</h4>
              <ul className="list-disc space-y-2 pl-4">
                <li>Towels and bedsheets are available.</li>
                <li>Fully equipped kitchen.</li>
                <li>Laundry room with washing machine (located on the first floor of the bathroom).</li>
                <li>Vacuum cleaner, ironing board, and hair dryer provided.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="parking">
            <AccordionTrigger className="font-serif text-xl">
              <div className="flex items-center gap-3">
                <Car className="h-5 w-5 text-primary" />
                Parking & Gate Access
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg leading-relaxed pl-8">
              <ul className="list-disc space-y-2 pl-4">
                <li>One parking spot inside the entrance barrier.</li>
                <li>Free parking available along Chemin de la Nadine (approx. 100 m).</li>
                <li>Walking out: use door chip (code available from host)</li>
                <li>Beach gate: use door chip</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="emergency">
            <AccordionTrigger className="font-serif text-xl">
              <div className="flex items-center gap-3">
                <ShieldAlert className="h-5 w-5 text-primary" />
                Emergency Contacts
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg leading-relaxed pl-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-bold block">112</span> General EU Emergency
                </div>
                <div>
                  <span className="font-bold block">18</span> Fire & Rescue
                </div>
                <div>
                  <span className="font-bold block">17</span> Police
                </div>
                <div>
                  <span className="font-bold block">15</span> Ambulance
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="host">
            <AccordionTrigger className="font-serif text-xl">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                Host Contact
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg leading-relaxed pl-8">
              <p className="mb-2 font-semibold">Jarle Norman</p>
              <p>Phone: +47 417 72 121</p>
              <p>Phone: +33 607 931 672 (also WhatsApp)</p>
              <p>Email: jarle.norman@ambolt.com</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}