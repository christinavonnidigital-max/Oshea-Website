import type { FC } from 'react';

const teamMembers = [
  {
    name: 'Farayi Chipango',
    title: 'Managing Director',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=75&w=200&auto=format&fit=crop&fm=webp',
    tagline: 'Leads O\'Shea SA with a focus on trust, quality and long term partnerships.',
  },
  {
    name: 'Isabel Gumpo',
    title: 'Chief Financial Officer',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=75&w=200&auto=format&fit=crop&fm=webp',
    tagline: 'Keeps the numbers sharp so every project is sustainable and secure.',
  },
  {
    name: 'Albert Shamu',
    title: 'Certification Administrator',
    imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=75&w=200&auto=format&fit=crop&fm=webp',
    tagline: 'Makes sure every certificate and detail is handled with precision.',
  },
];

const TeamMemberCard: FC<{
  name: string;
  title: string;
  imageUrl: string;
  tagline: string;
}> = ({ name, title, imageUrl, tagline }) => (
  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 px-6 pt-10 pb-8 flex flex-col items-center">
    {/* Accent bubble behind avatar */}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-tr from-[#FFC107] via-[#FD7E14] to-[#DC3545] opacity-80 blur-sm" />

    {/* Avatar with gradient ring */}
    <div className="relative w-24 h-24 mb-4">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FFC107] via-[#FD7E14] to-[#DC3545]" />
      <div className="absolute inset-[3px] rounded-full bg-white flex items-center justify-center overflow-hidden">
        <img
          className="w-22 h-22 rounded-full object-cover"
          src={imageUrl}
          alt={`Portrait of ${name}`}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

    <h3 className="mt-2 text-xl font-bold text-[#0F1A3E] text-center">{name}</h3>

    <span className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#0F1A3E]/5 text-[#0F1A3E] tracking-wide">
      {title}
    </span>

    <p className="mt-4 text-sm text-gray-600 text-center leading-relaxed">
      {tagline}
    </p>
  </div>
);

const Team: FC = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-[#F5F7FB] via-white to-[#FDF7EF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiny label */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide bg-[#0F1A3E]/5 text-[#0F1A3E]">
            Small team. Serious expertise.
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F1A3E]">
            The people behind your excellence
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A focused leadership team that combines technical depth with
            hands on, client facing experience across Sub Sahara Africa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={index === 1 ? 'md:translate-y-4' : ''}
            >
              <TeamMemberCard {...member} />
            </div>
          ))}
        </div>

        {/* Subtle note */}
        <p className="mt-10 text-center text-xs text-gray-500">
          Based in Bryanston and serving clients across Sub Sahara Africa.
        </p>
      </div>
    </section>
  );
};

export default Team;