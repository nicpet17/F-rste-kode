import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  guests: z.string().min(1, "Number of guests is required"),
  message: z.string().optional(),
  dates: z.object({
    from: z.date({ required_error: "Start date is required" }),
    to: z.date({ required_error: "End date is required" }),
  }).optional(),
});

export default function RequestStayPage() {
  const { toast } = useToast();
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  });
  const calendarEmbedUrl = useMemo(
    () =>
      "https://calendar.google.com/calendar/embed?src=c83272d267c67aecc37c1de9cfa131c2e679941462fed8aa44edc1f4e65a7514%40group.calendar.google.com&ctz=Europe%2FOslo&mode=MONTH&showTitle=0&showTz=0&bgcolor=%23ffffff",
    [],
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guests: "2",
      message: "",
    },
  });
  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const payload = {
        ...values,
        dates: values.dates
          ? {
              from: values.dates.from?.toISOString(),
              to: values.dates.to?.toISOString(),
            }
          : undefined,
      };

      const res = await fetch("/api/request-stay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        const message =
          typeof errorBody?.message === "string"
            ? errorBody.message
            : "Could not send request. Please try again.";
        throw new Error(message);
      }

      toast({
        title: "Request sent",
        description: "Thank you! We will get back to you as soon as possible.",
      });
      form.reset();
      setDateRange({ from: undefined, to: undefined });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      toast({
        title: "Unable to send request",
        description: message,
        variant: "destructive",
      });
    }
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Request Stay</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Interested in staying at Villa Norvic? Send us a request and we'll check availability for you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="grid gap-6 lg:grid-cols-[3fr,2fr]">
          <div className="rounded-3xl bg-white shadow-lg p-4">
            <h2 className="text-2xl font-serif mb-3 text-primary">Availability Calendar</h2>
            <p className="text-muted-foreground mb-4">
              The calendar is manually updated by the host. Please verify that your preferred dates are free before submitting your request.
            </p>
            <div className="aspect-video w-full overflow-hidden rounded-2xl border bg-muted">
              <iframe
                src={calendarEmbedUrl}
                className="h-full w-full border-0"
                title="Villa Norvic booking calendar"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-3xl bg-white shadow-lg p-6">
            <h3 className="text-xl font-serif text-primary mb-2">Need assistance?</h3>
            <p className="text-muted-foreground">
              We are happy to help with details about the stay, transport, or special requests. Leave a note in the form and we will respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-2xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 234 567 890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="guests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Guests</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" max="8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="dates"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Desired Dates</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={`w-full justify-start text-left font-normal ${!dateRange.from && "text-muted-foreground"}`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {dateRange.from ? (
                            dateRange.to ? (
                              <>
                                {format(dateRange.from, "LLL dd, y")} -{" "}
                                {format(dateRange.to, "LLL dd, y")}
                              </>
                            ) : (
                              format(dateRange.from, "LLL dd, y")
                            )
                          ) : (
                            <span>Pick your dates</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={dateRange.from}
                        selected={dateRange as any}
                        onSelect={(range: any) => {
                          setDateRange(range);
                          field.onChange(range);
                        }}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message / Special Requests</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us a bit about your trip or any special requirements..." 
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full md:w-auto bg-primary text-primary-foreground font-serif px-8 py-6 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Request"}
            </Button>
          </form>
        </Form>
      </div>
      
      <Footer />
    </div>
  );
}
