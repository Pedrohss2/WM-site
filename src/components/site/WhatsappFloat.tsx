import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5543996600605?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-deep animate-pulse-glow transition-transform hover:scale-110"
    >
      <MessageCircle className="h-8 w-8" strokeWidth={2.2} />
      <span className="sr-only">Falar no WhatsApp</span>
    </a>
  );
}
