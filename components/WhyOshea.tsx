import type { FC, ReactNode } from 'react';
import GlobeIcon from './icons/GlobeIcon';
import PartnershipIcon from './icons/PartnershipIcon';
import ExpertsIcon from './icons/ExpertsIcon';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    children: ReactNode;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
        <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-[#0F1A3E] mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{children}</p>
    </div>
);

const WhyOshea: FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#0F1A3E]">Why Partner with O'Shea SA?</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        We combine global standards with deep regional expertise to provide services that are not just compliant, but truly transformative.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    <FeatureCard icon={<GlobeIcon />} title="Global Standards, Local Insight">
                        As a cooperation partner of TÜV NORD CERT GmbH, we bring world-class, internationally recognized standards to every project. Our deep roots and extensive experience across Sub-Saharan Africa mean we provide solutions that are both globally compliant and locally relevant.
                    </FeatureCard>
                    <FeatureCard icon={<PartnershipIcon />} title="A True Partnership Approach">
                        We believe in building long-term relationships. Our client-centric approach means we take the time to understand your unique challenges and goals, delivering tailored certification, inspection, and training solutions that drive real value for your business.
                    </FeatureCard>
                    <FeatureCard icon={<ExpertsIcon />} title="Unmatched Sector Expertise">
                        Our team consists of highly qualified auditors, inspectors, and technical experts with decades of hands-on experience across diverse industries. We provide practical, actionable insights that help you navigate complex regulations and improve performance.
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
};

export default WhyOshea;