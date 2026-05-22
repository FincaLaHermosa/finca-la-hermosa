import { MessageCircle } from "lucide-react";

export function WhatsappButton() {
  return (
    <a className="wa-float" href="https://wa.me/5215500000000" target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp">
      <MessageCircle size={30} />
    </a>
  );
}
