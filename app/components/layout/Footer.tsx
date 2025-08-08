export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-text text-sm">
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Sunvila Foundation. All rights reserved.
        </p>
        <nav className="flex space-x-6">
          <a href="#privacy" className="hover:text-accent">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-accent">
            Terms of Service
          </a>
          <a href="mailto:contact@sunvilafoundation.io" className="hover:text-accent">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
