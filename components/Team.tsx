import type { FC } from 'react';

const teamMembers = [
  {
    name: 'Farayi Chipango',
    title: 'Managing Director',
    imageUrl: 'https://images.unsplash.com/photo-1639747280804-dd2d6b3d883e?q=75&w=200&auto=format&fit=crop&fm=webp',
    bio: 'Farayi is a visionary leader with over 15 years of experience in management systems and certification. He is passionate about helping organizations achieve operational excellence and drives O\'Shea SA\'s mission to be the most trusted partner in the industry.',
  },
  {
    name: 'Isabel Gumpo',
    title: 'Chief Financial Officer',
    imageUrl: 'https://images.unsplash.com/photo-1635805737704-5bfd1e62debe?q=75&w=200&auto=format&fit=crop&fm=webp',
    bio: 'Isabel brings a wealth of financial acumen to the team. With a background in corporate finance and risk management, she ensures the company\'s fiscal health and supports its sustainable growth across Sub Sahara Africa.',
  },
  {
    name: 'Albert Shamu',
    title: 'Certification Administrator',
    imageUrl: 'https://images.unsplash.com/photo-1639747280948-94b80a4a4b87?q=75&w=200&auto=format&fit=crop&fm=webp',
    bio: 'Albert is the backbone of our certification process. His meticulous attention to detail and dedication to client success ensure that every audit and certification is managed seamlessly from start to finish.',
  },
];

const TeamMemberCard: FC<{
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
}> = ({ name, title, imageUrl, bio }) => (
  <article className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 px-6 pt-10 pb-8 flex flex-col items-center h-full">
    {/* Accent bubble behind avatar */}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-tr from-[#FFC107] via-[#FD7E14] to-[#DC3545] opacity-80 blur-sm" />

    {/* Avatar with gradient ring */}
    <div className="relative w-24 h-24 mb-4 flex-shrink-0">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FFC107] via-[#FD7E14] to-[#DC3545]" />
      <div className="absolute inset-[3px] rounded-full bg-white flex items-center justify-center overflow-hidden">
        <img
          className="w-22 h-22 rounded-full object-cover"
          src={imageUrl}
          alt={`Professional headshot of ${name}`}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

    <h3 className="mt-2 text-xl font-bold text-[#0F1A3E] text-center">{name}</h3>

    <span className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#0F1A3E]/5 text-[#0F1A3E] tracking-wide">
      {title}
    </span>

    <p className="mt-4 text-sm text-gray-600 text-center leading-relaxed flex-grow">
      {bio}
    </p>
  </article>
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
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <li
              key={member.name}
              className={index === 1 ? 'md:translate-y-4' : ''}
            >
              <TeamMemberCard {...member} />
            </li>
          ))}
        </ul>

        {/* Subtle note */}
        <p className="mt-10 text-center text-xs text-gray-500">
          Based in Bryanston and serving clients across Sub Sahara Africa.
        </p>
      </div>
    </section>
  );
};

export default Team;