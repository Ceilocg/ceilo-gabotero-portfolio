import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-purpleTheme-dark text-purpleTheme-pale py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center space-y-4">
        <span className="text-sm">
          &copy; {new Date().getFullYear()} Ceilo Gabotero. All rights reserved.
        </span>
        <div className="flex space-x-6">
          <a
            href="https://github.com/Ceilocg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purpleTheme-vivid transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ceilo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purpleTheme-vivid transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ceilofurogabotero@gmail.com"
            className="hover:text-purpleTheme-vivid transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
