import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'AI Strategy & Consulting',
    description: 'We help organizations develop comprehensive AI strategies that align with their business objectives. Our consulting services include:',
    features: [
      'AI readiness assessment',
      'ROI analysis and business case development',
      'Technology stack recommendations',
      'Implementation roadmap',
      'Change management strategy',
    ],
    image: '/strategy-image.jpg',
  },
  {
    title: 'Machine Learning Solutions',
    description: 'Our team of data scientists and ML engineers build custom solutions to solve your business challenges:',
    features: [
      'Predictive analytics',
      'Natural language processing',
      'Computer vision applications',
      'Recommendation systems',
      'Anomaly detection',
    ],
    image: '/ml-image.jpg',
  },
  {
    title: 'AI Integration',
    description: 'We seamlessly integrate AI capabilities into your existing systems and workflows:',
    features: [
      'API development and integration',
      'Cloud infrastructure setup',
      'Data pipeline optimization',
      'Model deployment and monitoring',
      'Performance optimization',
    ],
    image: '/integration-image.jpg',
  },
];

export default function Services() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="relative h-[400px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-blue-500 mr-2 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 