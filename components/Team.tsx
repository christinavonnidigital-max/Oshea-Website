import React from "react";

const Team: React.FC = () => {
  const teamMembers = [
    {
      initials: "FC",
      name: "Farayi Chipango",
      title: "Managing Director",
      description:
        "Leads overall strategy and key client relationships for certification, inspection and training services across the region.",
      tel: "+27 10 210 7715",
      cell: "+27 83 963 5544",
      email: "fchipango@oshea.co.za",
    },
    {
      initials: "IG",
      name: "Isabel Gumpo",
      title: "Chief Financial Officer",
      description:
        "Oversees financial management, governance and sustainable growth of certification, inspection and training activities.",
      tel: "+27 10 210 7715",
      cell: "+27 79 095 6736",
      email: "igumpo@oshea.co.za",
    },
    {
      initials: "AS",
      name: "Albert Shamu",
      title: "Certification Administrator",
      description:
        "Coordinates certification administration, client documentation and audit cycle logistics.",
      tel: "+27 10 210 7715",
      cell: "+27 63 190 5136",
      email: "ashamu@oshea.co.za",
    },
  ];

  return (
    <section id="team" className="bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            Our Team
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Leadership and key contacts
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-3xl">
            A focused team combining regional experience, technical expertise and financial oversight.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {teamMembers.map((member) => (
            <article
              key={member.email}
              className="flex flex-col bg-white rounded-xl p-6 border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-blue-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-base font-bold text-white">
                  {member.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-slate-600">{member.title}</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {member.description}
              </p>

              <div className="mt-auto space-y-2 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm">
                  <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${member.cell}`} className="text-slate-700 hover:text-blue-700 transition-colors">
                    {member.cell}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${member.email}`} className="text-slate-700 hover:text-blue-700 transition-colors truncate">
                    {member.email}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-start gap-2 text-sm text-slate-600 bg-slate-100 rounded-lg px-4 py-3">
            <svg className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="text-left">
              <p className="font-semibold text-slate-900 text-sm">Head Office</p>
              <p className="text-xs">Unit RG0-002, Ground Floor, Roland Garros Building, The Campus, 57 Sloane Street, Bryanston, South Africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
