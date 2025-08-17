"use client"

import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export default function Footer() {
  const contacts = [
    { name: "Sreyasi Mondal", phone: "9883177160" },
    { name: "Debangkita Saha", phone: "8777494652" },
    { name: "Debangshu Chatterjee", phone: "6290277345" },
  ]

  return (
    <footer
      id="footer"
      role="contentinfo"
      className={`bg-card/50 backdrop-blur-sm border-t border-border scroll-mt-24 ${orbitron.className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold tracking-wide mb-6 text-[#fffffe]">
          Contact Us
        </h2>

        {/* Click-to-call contacts */}
        <ul className="max-w-3xl mx-auto text-center space-y-3">
          {contacts.map((c) => (
            <li key={c.phone} className="text-sm sm:text-base">
              <a href={`tel:${c.phone}`} aria-label={`Call ${c.name}`} className="contactRow">
                <span className="name">{c.name}</span>
                <span className="dash">-</span>
                <span className="phoneChip">{c.phone}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: "1px solid #24005f66" }}
        >
          <p className="text-xs sm:text-sm text-[#fffffecc] text-center sm:text-left">
            © 2025 IEM HACKOASIS 2.0
          </p>

          <div className="flex items-center justify-center gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/iemhackoasisofficial?igsh=NWc1azBlNmIxaXo3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="iconLink"
            >
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/108378037/admin/inbox/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="iconLink"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61579238080552&sk=about"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="iconLink"
            >
              <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>

            {/* Mail */}
            <a
              href="mailto:futurebuilders247@gmail.com"
              aria-label="Email"
              className="iconLink"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contactRow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 12px;
          color: #fffffe;
          text-decoration: none;
          background: linear-gradient(90deg, rgba(38,0,97,0.16), rgba(38,0,97,0.08));
          border: 1px solid rgba(157,134,255,0.3);
          transition: transform 120ms ease, box-shadow 120ms ease, border-color 120ms ease, background 120ms ease;
        }
        .contactRow:hover {
          transform: translateY(-1px);
          background: linear-gradient(90deg, rgba(38,0,97,0.24), rgba(38,0,97,0.14));
          border-color: rgba(157,134,255,0.5);
          box-shadow: 0 8px 18px rgba(38,0,97,0.18);
        }
        .name { color: #fffffe; font-weight: 600; }
        .dash { color: #ffffff80; }
        .phoneChip {
          color: #fffffe;
          font-weight: 800;
          letter-spacing: 0.25px;
          padding: 2px 8px;
          border-radius: 9px;
          background: linear-gradient(90deg, rgba(38,0,97,0.28), rgba(38,0,97,0.16));
          border: 1px solid rgba(157,134,255,0.5);
          text-shadow: 0 0 5px rgba(0,0,0,0.35);
        }
        .iconLink {
          color: #fffffecc;
          transition: color 180ms ease, filter 180ms ease, transform 180ms ease;
        }
        .iconLink:hover {
          color: #fffffe;
          filter: drop-shadow(0 0 6px rgba(38,0,97,0.55));
          transform: translateY(-1px);
        }
      `}</style>
    </footer>
  )
}
