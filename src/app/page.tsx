import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.avif"
            alt="AI Technology Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Transforming Business with AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We help businesses leverage artificial intelligence to drive innovation, efficiency, and growth.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-32 h-32 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={96}
                    height={96}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600 mb-6">
                We are a team of AI experts, data scientists, and business strategists dedicated to helping organizations harness the power of artificial intelligence.
              </p>
              <p className="text-gray-600">
                With years of experience in machine learning, natural language processing, and computer vision, we deliver cutting-edge AI solutions that drive real business value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    title: "AI Strategy & Consulting",
    description: "Develop comprehensive AI strategies aligned with your business goals and objectives.",
    icon: "/ai-strategy-development.avif"
  },
  {
    title: "Machine Learning Solutions",
    description: "Build and deploy custom machine learning models to solve complex business problems.",
    icon: "/machine-learning-solutions.avif"
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
    icon: "/ai-integration.avif"
  }
];
