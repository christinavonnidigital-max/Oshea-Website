import type { FC } from 'react';

const Recognition: FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Recognized by:</div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/DAkkS-Logo.svg/320px-DAkkS-Logo.svg.png" alt="DAkkS" className="h-10 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/International_Accreditation_Forum_logo.svg/320px-International_Accreditation_Forum_logo.svg.png" alt="IAF" className="h-10 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/el/thumb/d/d7/ESYD_LOGO.svg/320px-ESYD_LOGO.svg.png" alt="ESYD" className="h-10 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Recognition;