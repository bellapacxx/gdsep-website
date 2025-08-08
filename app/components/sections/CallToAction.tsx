export default function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="w-full bg-accent text-background py-20 px-6 sm:px-12 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6">
          Join the Global Dynamic Startup Entrepreneurship Program
        </h2>

        <p className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
          We invite governments to contribute land/mineral rights, investors to participate in the SVG pre-sale, and youth networks to join incubators.
        </p>

        <a
          href="mailto:contact@sunvilafoundation.io"
          className="inline-block bg-primary hover:bg-primary/90 transition rounded-lg px-10 py-5 font-semibold shadow-lg"
        >
          Contact Us
        </a>

        <p className="mt-6 text-sm max-w-md mx-auto">
          Or visit us at{' '}
          <a
            href="https://www.sunvilafoundation.io"
            className="underline hover:text-primary/80"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.sunvilafoundation.io
          </a>
        </p>
      </div>
    </section>
  );
}
