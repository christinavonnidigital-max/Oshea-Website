import type { FC } from 'react';

const standards = [
    { name: "ISO 9001", accent: "border-orange-500" },
    { name: "ISO 14001", accent: "border-green-500" },
    { name: "ISO 45001", accent: "border-blue-500" },
    { name: "FSSC 22000", accent: "border-orange-400" },
    { name: "ISO 27001", accent: "border-purple-500" },
    { name: "ISO 22000", accent: "border-red-500" },
    { name: "ISO 50001", accent: "border-teal-500" },
    { name: "HACCP", accent: "border-yellow-500" }
];

const Accreditations: FC = () => {
    return (
        <section className="bg-[#0F1A3E] text-white py-24 rounded-br-[120px] relative overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#DC3545]" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Standards We Certify</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
                        All certificates issued under TÜV NORD accreditations
                    </p>
                </div>
  
                {/* Flowing grid like brochure */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
                    {standards.map((std) => (
                        <div key={std.name} className={`bg-white/5 backdrop-blur-sm border-t-4 ${std.accent} p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-default shadow-lg`}>
                            <h3 className="text-xl font-bold text-center group-hover:scale-105 transition-transform">{std.name}</h3>
                        </div>
                    ))}
                </div>
  
                {/* Accreditation logos */}
                <div className="border-t border-white/10 pt-12">
                    <p className="text-center text-gray-400 text-xs uppercase tracking-[0.2em] mb-8">Global Recognition</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <div className="bg-white p-4 rounded-lg h-16 w-auto flex items-center justify-center shadow-md">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/DAkkS-Logo.svg/320px-DAkkS-Logo.svg.png" alt="DAkkS" className="max-h-full" />
                        </div>
                        <div className="bg-white p-4 rounded-lg h-16 w-auto flex items-center justify-center shadow-md">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/International_Accreditation_Forum_logo.svg/320px-International_Accreditation_Forum_logo.svg.png" alt="IAF" className="max-h-full" />
                        </div>
                        <div className="bg-white p-4 rounded-lg h-16 w-auto flex items-center justify-center shadow-md">
                            <img src="https://upload.wikimedia.org/wikipedia/el/thumb/d/d7/ESYD_LOGO.svg/320px-ESYD_LOGO.svg.png" alt="ESYD" className="max-h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Accreditations;