import React from 'react';
import { IconWhatsapp, IconPhone, IconMail } from '../atoms/Icons';

export const ContactButtons: React.FC = () => {
  const whatsapp = 'https://api.whatsapp.com/send?phone=972548455029&text=%D7%9E%D7%A8%D7%91%D7%94%20%D7%9C%D7%A7%D7%95%D7%A8%D7%A1%D7%99%D7%9D%20-%20%D7%94%D7%A9%D7%95%D7%A8%D7%94%20%D7%9C%D7%9E%D7%99%D7%93%D7%95%D7%A2%20%2F%20%D7%9C%D7%99%D7%A2%D7%95%D7%A6%20%D7%AA%D7%A4%D7%95%D7%A8%D7%AA%20%D7%A7%D7%95%D7%A8%D7%A1%20%D7%9E%D7%A4%D7%90%20';
  const tel = 'tel:05XXXXXXXX';
  const mail = 'mailto:your_email@domain.com?Subject=%D7%A4%D7%A0%D7%99%D7%94%20%D7%91%D7%A0%D7%95%D7%92%D7%A9%20%D7%9C%D7%A7%D7%95%D7%A8%D7%A1%D7%99%D7%9D';

  return (
    <div className="contact-buttons" role="navigation" aria-label="קישורי יצירת קשר">
      <a className="contact-buttons__btn contact-buttons__btn--whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="וואטסאפ">
        <IconWhatsapp className="contact-icon" />
      </a>
      <a className="contact-buttons__btn contact-buttons__btn--phone" href={tel} aria-label="טלפון">
        <IconPhone className="contact-icon" />
      </a>
      <a className="contact-buttons__btn contact-buttons__btn--mail" href={mail} aria-label="מייל">
        <IconMail className="contact-icon" />
      </a>
    </div>
  );
};
