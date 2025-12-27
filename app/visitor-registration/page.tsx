import VisitorRegistrationHero from "@/components/visitor-registration/VisitorRegistrationHero";
import TicketInfoSection from "@/components/visitor-registration/TicketInfoSection";
import VisitorEmailForm from "@/components/visitor-registration/VisitorEmailForm";

export default function VisitorRegistrationPage() {
  return (
    <main>
      <VisitorRegistrationHero />
      <TicketInfoSection />
      <VisitorEmailForm />
    </main>
  );
}
