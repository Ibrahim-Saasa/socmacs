import React from "react";
import { Container, Section } from "../index";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logoText?: string;
  description?: string;
  columns: FooterColumn[];
  socialLinks?: Array<{ icon: string; href: string; label: string }>;
  copyright?: string;
}

const Footer: React.FC<FooterProps> = ({
  logoText,
  description,
  columns,
  socialLinks,
  copyright,
}) => {
  return (
    <Section background="dark" size="md" id="footer">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          {logoText && (
            <div>
              <h3 className="text-xl font-bold text-white mb-4">{logoText}</h3>
              {description && (
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  {description}
                </p>
              )}
              {socialLinks && (
                <div className="flex gap-4 mt-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 text-white flex items-center justify-center transition-colors duration-200"
                      title={social.label}
                    >
                      <span className="text-sm">{social.icon}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Footer Columns */}
          {columns.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h4 className="text-lg font-semibold text-white mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          {copyright && (
            <p className="text-gray-400 text-sm text-center">{copyright}</p>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
