
import type { FC } from 'react';

const teamMembers = [
  {
    name: 'Farayi Chipango',
    title: 'Managing Director',
    imageUrl: 'https://placehold.co/400x400/0F1A3E/FFFFFF?text=FC&font=poppins',
  },
  {
    name: 'Isabel Gumpo',
    title: 'Chief Financial Officer',
    imageUrl: 'https://placehold.co/400x400/0F1A3E/FFFFFF?text=IG&font=poppins',
  },
  {
    name: 'Albert Shamu',
    title: 'Certification Administrator',
    imageUrl: 'https://placehold.co/400x400/0F1A3E/FFFFFF?text=AS&font=poppins',
  },
];

const TeamMemberCard: FC<{ name: string; title: string; imageUrl: string }> = ({ name, title, imageUrl }) => (
  <div className="text-center">
    <img
      className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
      src={imageUrl}
      alt={`Portrait of ${name}`}
    />
    <h3 className="text-xl font-bold text-[#0F1A3E]">{name}</h3>
    <p className="text-gray-500">{title}</p>
  </div>
);

const Team: FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F1A3E]">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">The dedicated professionals behind our success.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;