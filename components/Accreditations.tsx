import type { FC } from 'react';

const standards = [
    "ISO 9001", "ISO 14001", "ISO 45001", "ISO 50001", "ISO 22001", "FSSC 22000",
    "HACCP", "ISO 27001", "IATF 16949", "IFS Food", "eIDAS"
];

const Logo: FC<{ src: string, alt: string, className?: string }> = ({ src, alt, className = '' }) => (
    <div className={`bg-white p-4 rounded-lg flex items-center justify-center h-24 shadow-sm border border-gray-200 ${className}`}>
        <img src={src} alt={alt} className="max-h-full max-w-full object-contain" loading="lazy" decoding="async" />
    </div>
);

const Accreditations: FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="bg-[#0F1A3E] text-white p-8 md:p-12 rounded-3xl md:rounded-[40px] rounded-br-[80px] md:rounded-br-[120px] shadow-2xl">
                    <div className="text-left mb-8">
                        <h2 className="text-4xl font-bold text-white">Standards We Certify</h2>
                        <p className="mt-2 text-lg text-gray-300">Covering a wide range of international management systems.</p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-start">
                        {standards.map(standard => (
                            <div key={standard} className="border border-yellow-400/50 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                <p className="font-semibold text-sm">{standard}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <h3 className="text-3xl font-bold text-[#0F1A3E]">Global Recognition</h3>
                    <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
                        All certificates are issued under various TÜV NORD accreditations and have global recognition, ensuring trust and compliance worldwide.
                    </p>
                    <div className="mt-10 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/DAkkS-Logo.svg/320px-DAkkS-Logo.svg.png" alt="DAkkS Logo" />
                        <Logo src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/International_Accreditation_Forum_logo.svg/320px-International_Accreditation_Forum_logo.svg.png" alt="IAF Logo" />
                        <Logo src="https://upload.wikimedia.org/wikipedia/el/thumb/d/d7/ESYD_LOGO.svg/320px-ESYD_LOGO.svg.png" alt="ESYD Logo" className="col-span-2 md:col-span-1" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Accreditations;