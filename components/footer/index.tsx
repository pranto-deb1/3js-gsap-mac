import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-[#f5f5f7] text-xs mt-40">
      <div className=" px-4 sm:px-6">
        {/* Top row: shop links + phone + apple logo */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-4 border-b border-white/20">
          <p className="text-[#86868b] leading-relaxed">
            More ways to shop:{" "}
            <a href="#" className="text-[#2997ff] hover:underline">
              Find an Apple Store
            </a>{" "}
            or{" "}
            <a href="#" className="text-[#2997ff] hover:underline">
              other retailer
            </a>{" "}
            near you. Or call xxxxxx xxx xxxx.
          </p>

          <a
            href="#"
            aria-label="Apple"
            className="shrink-0 self-start sm:self-auto text-[#86868b] hover:text-white transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 17"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.6 8.9c0-2 1.6-3 1.7-3.1-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.7-2.7-.7-1.4 0-2.6.8-3.3 2C.1 8.2 1.1 11.6 2.3 13.5c.6.9 1.3 2 2.3 1.9 1-.1 1.3-.6 2.5-.6s1.5.6 2.5.6 1.7-.9 2.3-1.8c.7-1 1-2 1-2.1-.1 0-2.3-.9-2.3-3.6zM9.5 2.8c.5-.6.9-1.5.8-2.4-.8 0-1.7.5-2.3 1.2-.5.6-1 1.5-.8 2.3.9.1 1.8-.4 2.3-1.1z" />
            </svg>
          </a>
        </div>

        {/* Bottom row: copyright + legal links */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-4 text-[#86868b]">
          <p>Copyright © 2024 Apple Inc. All rights reserved.</p>

          <nav aria-label="Legal">
            <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {[
                "Privacy Policy",
                "Terms of Use",
                "Sales Policy",
                "Legal",
                "Site Map",
              ].map((label, i, arr) => (
                <li key={label} className="flex items-center gap-x-2">
                  <a
                    href="#"
                    className="hover:underline hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                  {i < arr.length - 1 && (
                    <span className="text-white/20 select-none">|</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
