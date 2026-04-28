import { useState } from 'react';

const ServicesFAQ = () => {
  const [expandedFaq, setExpandedFaq] = useState(1); // Default to item 2 (index 1) expanded as in design

  const faqItems = [
    {
      question: "How quickly are claims processed?",
      answer: "Most straightforward claims are processed within 48 hours. Complex claims involving multiple parties may take up to 14 business days. You can track the status in real-time via your dashboard."
    },
    {
      question: "Can I bundle different types of insurance?",
      answer: "Yes, bundling policies (such as Auto and Home) is highly recommended. It simplifies your billing process and typically results in a multi-policy discount of up to 15% on your total premium."
    },
    {
      question: "Is my personal data secure?",
      answer: "We use industry-leading encryption and security protocols to ensure your personal and financial data remains protected at all times. Our systems are regularly audited for compliance."
    },
    {
      question: "How do I update my payment methods?",
      answer: "You can update your payment information through the 'Billing' section of your account dashboard. Changes are applied immediately to your next billing cycle."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? -1 : index);
  };

  return (
    <main className="max-w-container-max mx-auto px-margin-desktop py-section-gap font-body-md">
      {/* Hero Section */}
      <header className="max-w-3xl mb-section-gap">
        <h1 className="font-display-xl text-display-xl text-on-surface mb-6">
          Comprehensive coverage for every aspect of your life.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          We provide tailored insurance solutions designed to protect what matters most, combining industry-leading expertise with intuitive, modern service.
        </p>
      </header>

      {/* Services Grid */}
      <section className="mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-gutter">
          {/* Service Card 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-[32px] shadow-ambient group cursor-pointer transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-6 text-on-primary-fixed">
              <span className="material-symbols-outlined">health_and_safety</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Medical Insurance</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Medical Insurance which covers all eligible emergency medical expenses.
            </p>
            <div className="flex items-center text-primary font-label-md text-label-md">
              Learn more <span className="material-symbols-outlined text-[18px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-[32px] shadow-ambient group cursor-pointer transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-6 text-on-primary-fixed">
              <span className="material-symbols-outlined">flight_takeoff</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Super Visa Insurance</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              You can purchase Super Visa Medical Insurance in most convenient way. Super Visa Health Insurance provides protection of $100,000 or more to maximum $200,000 of visit to Canada.
            </p>
            <div className="flex items-center text-primary font-label-md text-label-md">
              Learn more <span className="material-symbols-outlined text-[18px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-surface-container-lowest rounded-xl p-[32px] shadow-ambient group cursor-pointer transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-6 text-on-primary-fixed">
              <span className="material-symbols-outlined">luggage</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Visitor Insurance</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              For the excessive medical claims protection we provide the best insurance to Canadian visitors. We have innovative services insurance plans which makes easy for the visitors to understand the need of having an Insurance when they are travelling to Canada.
            </p>
            <div className="flex items-center text-primary font-label-md text-label-md">
              Learn more <span className="material-symbols-outlined text-[18px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="bg-surface-container-lowest rounded-xl p-[32px] shadow-ambient group cursor-pointer transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-6 text-on-primary-fixed">
              <span className="material-symbols-outlined">directions_car</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Travel Insurance</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Travel insurance is a unique and adaptable insurance product that provides comprehensive emergency medical coverage to visitors of all ages and health conditions visiting Canada.
            </p>
            <div className="flex items-center text-primary font-label-md text-label-md">
              Learn more <span className="material-symbols-outlined text-[18px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-section-gap bg-surface-container-low rounded-[32px] p-12 md:p-[80px]">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-12 text-center">Trusted by thousands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-6">
            <p className="font-body-lg text-body-lg text-on-surface italic">
              "Switching to GC Financials was the smartest financial decision I made this year. The clarity of their policies and the speed of their claims process is unmatched in the industry."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <img
                alt="Sarah Jenkins"
                className="w-14 h-14 rounded-full object-cover shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_2JaBucfnCjL4iq1KthjGdz8UFBO7HCo8PDd2YGr0HZ08jBxUidGefHn2JH4XzdYoqRZg4vATq8B520NmHsvxEptL2pljkjY4wh6-KX3GwAJF4_cDBWe-Gjpe9QHPsaO_l_h77cVcBj1N7YEP_18suA0bF-1LmbX0N5Ph2O16kv47EW7jmSuZdg4yV7XYSPn4k2lxyQqTafG3eceOS5VTr3IGY30cjZB2NCjAOoKaqn_NLi9KCz07CVhaB9na6M2v5JUru4qT-OI"
              />
              <div>
                <div className="font-label-md text-label-md text-on-surface">Sarah Jenkins</div>
                <div className="font-caption text-caption text-on-surface-variant">Small Business Owner</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-body-lg text-body-lg text-on-surface italic">
              "The user interface makes managing my family's complex insurance portfolio incredibly simple. It feels less like dealing with an insurance company and more like a premium service."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <img
                alt="David Chen"
                className="w-14 h-14 rounded-full object-cover shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAJ0XHWdlT-yaAePtHHfh_zV5cZcJMv1P2cvLAwB5TX_pRMiMsl2LwhzWs-sN7fjDOEeA528Qov8S2JLiWOWhikkpxHLSbO_46xQfYMaycU4RplGzZ4hWwAO_TFk0itvbLm8FVGHcWubS3uVuVzPZ5lsnJqiV8xUGo8jUV81_Qsg9moTmB2FeC0ElG4mhXRXadH3Pj_bVZeF-2wQSkgmGcEKlI4lCAzm99rGmQCouXuKv-XLHAPH-Ozz82ywWYdTCMeLpMjTd_pbM"
              />
              <div>
                <div className="font-label-md text-label-md text-on-surface">David Chen</div>
                <div className="font-caption text-caption text-on-surface-variant">Homeowner & Father</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-12">Frequently Asked Questions</h2>
        <div className="divide-y divide-outline-variant">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="py-6 cursor-pointer group"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className={`font-headline-md text-[20px] font-semibold transition-colors ${expandedFaq === index ? 'text-primary' : 'text-on-surface'}`}>
                  {item.question}
                </h4>
                <span className={`material-symbols-outlined transition-colors ${expandedFaq === index ? 'text-primary' : 'text-outline group-hover:text-primary'}`}>
                  {expandedFaq === index ? 'remove' : 'add'}
                </span>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${expandedFaq === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesFAQ;
