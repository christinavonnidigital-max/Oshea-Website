import type { FC } from 'react';
import { Link } from 'react-router-dom';

const Accreditations: FC = () => {
    return (
        <section className="relative py-32 bg-[#0F1A3E] text-white">
            {/* Curved top edge */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-white rounded-br-[120px]"></div>
            
            <div className="relative pt-12 container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">Standards We Certify</h2>
                    <p className="text-xl text-gray-300">All certificates issued under TÜV NORD accreditations</p>
                </div>

                {/* Primary Standards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
                    <Link to="/iso-9001" className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#FFC107]/30 hover:border-[#FFC107] hover:bg-white/10 transition-all cursor-pointer text-center group">
                        <div className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform">ISO 9001</div>
                        <div className="text-sm text-gray-400">Quality Management</div>
                    </Link>
                    
                    <Link to="/iso-14001" className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#10B981]/30 hover:border-[#10B981] hover:bg-white/10 transition-all cursor-pointer text-center group">
                        <div className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform">ISO 14001</div>
                        <div className="text-sm text-gray-400">Environmental</div>
                    </Link>
                    
                    <Link to="/iso-45001" className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#DC3545]/30 hover:border-[#DC3545] hover:bg-white/10 transition-all cursor-pointer text-center group">
                        <div className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform">ISO 45001</div>
                        <div className="text-sm text-gray-400">Safety Management</div>
                    </Link>
                    
                    <Link to="/fssc-22000" className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#FD7E14]/30 hover:border-[#FD7E14] hover:bg-white/10 transition-all cursor-pointer text-center group">
                        <div className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform">FSSC 22000</div>
                        <div className="text-sm text-gray-400">Food Safety</div>
                    </Link>
                </div>

                {/* Secondary Standards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    <div className="bg-white/5 p-4 rounded-xl text-center text-sm font-semibold hover:bg-white/10 transition-colors">ISO 27001</div>
                    <div className="bg-white/5 p-4 rounded-xl text-center text-sm font-semibold hover:bg-white/10 transition-colors">ISO 22000</div>
                    <div className="bg-white/5 p-4 rounded-xl text-center text-sm font-semibold hover:bg-white/10 transition-colors">ISO 50001</div>
                    <div className="bg-white/5 p-4 rounded-xl text-center text-sm font-semibold hover:bg-white/10 transition-colors">HACCP</div>
                </div>
            </div>
        </section>
    );
}

export default Accreditations;