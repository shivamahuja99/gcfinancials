import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-24 pb-20">
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-6">
              Modern Super Visa <span className="text-primary">Insurance</span>
            </h1>
            <p className="text-xl text-on-surface-variant mb-10 leading-relaxed">
              Fast, transparent, and reliable coverage for your family's visit to Canada.
              Get your quote in seconds and secure their stay today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/quote" className="btn-primary text-lg px-8 py-4 flex items-center justify-center">
                Get My Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="card text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Instant Quotes</h3>
            <p className="text-on-surface-variant">
              No waiting around. Get tailored insurance rates instantly based on your specific needs.
            </p>
          </div>
          <div className="card text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Full Compliance</h3>
            <p className="text-on-surface-variant">
              All our plans meet the official IRCC requirements for Super Visa applications.
            </p>
          </div>
          <div className="card text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Easy Claims</h3>
            <p className="text-on-surface-variant">
              A simplified, digital-first claims process that puts your family first.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
