import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col gap-24 pb-20">
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-[#1d1d1f] mb-8 leading-[1.1]">
              Modern Super Visa <span className="text-[#0071e3]">Insurance</span>
            </h1>
            <p className="text-2xl text-[#86868b] mb-12 leading-relaxed max-w-2xl mx-auto">
              Fast, transparent, and reliable coverage for your family's visit to Canada.
              Get your quote in seconds and secure their stay today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/quote" className="btn-primary text-xl px-10 py-5 rounded-2xl shadow-lg shadow-blue-500/20">
                Get My Free Quote <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="card text-center group hover:-translate-y-2 transition-transform duration-500">
            <div className="bg-[#0071e3]/5 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#0071e3]/10 transition-colors">
              <Zap className="text-[#0071e3] h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Instant Quotes</h3>
            <p className="text-lg text-[#86868b] leading-relaxed">
              No waiting around. Get tailored insurance rates instantly based on your specific needs.
            </p>
          </div>
          <div className="card text-center group hover:-translate-y-2 transition-transform duration-500">
            <div className="bg-[#0071e3]/5 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#0071e3]/10 transition-colors">
              <ShieldCheck className="text-[#0071e3] h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Full Compliance</h3>
            <p className="text-lg text-[#86868b] leading-relaxed">
              All our plans meet the official IRCC requirements for Super Visa applications.
            </p>
          </div>
          <div className="card text-center group hover:-translate-y-2 transition-transform duration-500">
            <div className="bg-[#0071e3]/5 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#0071e3]/10 transition-colors">
              <CheckCircle className="text-[#0071e3] h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Easy Claims</h3>
            <p className="text-lg text-[#86868b] leading-relaxed">
              A simplified, digital-first claims process that puts your family first.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
