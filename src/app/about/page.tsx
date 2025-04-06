import Image from 'next/image';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'With over 15 years of experience in AI and machine learning, Sarah leads our team with a vision for transforming businesses through innovative AI solutions.',
    image: '/team/sarah.jpg',
  },
];

export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Our Story Section */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold text-center mb-12">Our Story</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Founded in 2020, Grahamstak emerged from a shared vision of making artificial intelligence accessible and valuable to businesses of all sizes. Our journey began with a small team of passionate AI experts who believed in the transformative power of machine learning and data science.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we've grown into a leading AI consulting firm, helping organizations across various industries harness the power of AI to drive innovation, efficiency, and growth. Our team combines deep technical expertise with practical business acumen to deliver solutions that make a real impact.
              </p>
              <p className="text-gray-600">
                We pride ourselves on our collaborative approach, working closely with our clients to understand their unique challenges and develop tailored solutions that drive measurable results.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/office.avif"
                alt="Our Office"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of what's possible with AI, staying at the forefront of technological advancements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from solution design to implementation and support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Partnership</h3>
              <p className="text-gray-600">
                We build long-term relationships with our clients, working together to achieve their business objectives.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="max-w-sm mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-900 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 