import React from 'react';
import { MessageSquareCode } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/companyData';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center group">
      <a
        href={COMPANY_CONTACTS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp chat with Nexora Technologies at 01557190156"
        className="flex items-center gap-2.5 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-950/60 transition-all hover:scale-105 border border-emerald-400/40"
      >
        <MessageSquareCode className="w-5 h-5" />
        <span className="hidden sm:inline text-xs font-semibold whitespace-nowrap">
          WhatsApp: {COMPANY_CONTACTS.whatsappNumber}
        </span>
      </a>
    </div>
  );
};
