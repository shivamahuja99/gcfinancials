import { useState } from 'react';

const Plans = () => {
  const [showPreExisting, setShowPreExisting] = useState(false);

  return (
    <div className="flex-grow max-w-container-max mx-auto w-full px-margin-desktop py-section-gap font-body-md">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-display-xl font-display-xl text-on-surface mb-4">Choose the right plan.</h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Flexible insurance solutions designed to fit your unique needs, delivering comprehensive protection and peace of mind.
        </p>
        <p className="text-caption font-caption text-on-surface-variant/60 mt-4 max-w-xl mx-auto">
          Plans start from $59/month. Final premium will be calculated after providing full details.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-end">
        {/* Basic Plan */}
        <div className="bg-surface-container-lowest rounded-[16px] p-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-surface-variant flex flex-col h-full">
          <div className="mb-8">
            <h3 className="text-headline-md font-headline-md text-on-surface mb-2">Basic</h3>
            <p className="text-body-md font-body-md text-on-surface-variant mb-6">Essential coverage for peace of mind.</p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-headline-lg font-headline-lg text-on-surface">$29</span>
              <span className="text-body-md font-body-md text-on-surface-variant">/mo</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] font-[variation-settings:'FILL'_1]">check_circle</span>
              <span className="text-body-md font-body-md text-on-surface-variant">Standard liability protection</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] font-[variation-settings:'FILL'_1]">check_circle</span>
              <span className="text-body-md font-body-md text-on-surface-variant">24/7 basic customer support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] font-[variation-settings:'FILL'_1]">check_circle</span>
              <span className="text-body-md font-body-md text-on-surface-variant">Access to standard network</span>
            </li>
          </ul>
          <button className="w-full border border-primary text-primary px-4 py-3 rounded-[16px] font-label-md hover:bg-surface-container-low transition-colors duration-200">
            Select Basic
          </button>
        </div>

        {/* Premium Plan (Highlighted) */}
        <div className="bg-surface-container-lowest rounded-[16px] p-[32px] shadow-[0_12px_40px_rgb(0,0,0,0.12)] border-2 border-primary-container relative flex flex-col h-full transform scale-105 z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-caption font-caption font-medium tracking-wide">
            MOST POPULAR
          </div>
          <div className="mb-8">
            <h3 className="text-headline-md font-headline-md text-on-surface mb-2">Premium</h3>
            <p className="text-body-md font-body-md text-on-surface-variant mb-6">Enhanced protection with added benefits.</p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-headline-lg font-headline-lg text-on-surface">$59</span>
              <span className="text-body-md font-body-md text-on-surface-variant">/mo</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-[20px] font-[variation-settings:'FILL'_1]">check_circle</span>
              <span className="text-body-md font-body-md text-on-surface-variant">Comprehensive liability protection</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-[20px] font-[variation-settings:'FILL'_1]">check_circle</span>
              <span className="text-body-md font-body-md text-on-surface-variant">Priority 24/7 customer support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-[20px] font-[variation-settings:'FILL'_1]">check_circle</span>
              <span className="text-body-md font-body-md text-on-surface-variant">Access to premium provider network</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-[20px] font-[variation-settings:'FILL'_1]">check_circle</span>
              <span className="text-body-md font-body-md text-on-surface-variant">Free annual risk assessment</span>
            </li>
          </ul>
          <button className="w-full bg-primary-container text-on-primary-container px-4 py-3 rounded-[16px] font-label-md hover:bg-primary-container/90 transition-colors duration-200 shadow-sm">
            Select Premium
          </button>
        </div>

        {/* Ultimate Plan */}
        <div className="bg-surface-container-lowest rounded-[16px] p-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-surface-variant flex flex-col h-full">
          <div className="mb-8">
            <h3 className="text-headline-md font-headline-md text-on-surface mb-2">Ultimate</h3>
            <p className="text-body-md font-body-md text-on-surface-variant mb-6">Maximum coverage for complete security.</p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-headline-lg font-headline-lg text-on-surface">$99</span>
              <span className="text-body-md font-body-md text-on-surface-variant">/mo</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] font-[variation-settings:'FILL'_1]">check_circle</span>
              <span className="text-body-md font-body-md text-on-surface-variant">All Premium features included</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] font-[variation-settings:'FILL'_1]">check_circle</span>
              <span className="text-body-md font-body-md text-on-surface-variant">Dedicated personal account manager</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] font-[variation-settings:'FILL'_1]">check_circle</span>
              <span className="text-body-md font-body-md text-on-surface-variant">Global coverage without limits</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] font-[variation-settings:'FILL'_1]">check_circle</span>
              <span className="text-body-md font-body-md text-on-surface-variant">Zero deductible on standard claims</span>
            </li>
          </ul>
          <button className="w-full border border-primary text-primary px-4 py-3 rounded-[16px] font-label-md hover:bg-surface-container-low transition-colors duration-200">
            Select Ultimate
          </button>
        </div>
      </div>

      {/* Super Visa Insurance Rates Table */}
      <div className="mt-24 max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-headline-md font-headline-md text-on-surface mb-4">Super Visa Insurance Rates</h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-8">
            The following table displays estimated premium rates for our standard Super Visa insurance plan. Final rates may vary based on specific medical history, pre-existing conditions, and exact trip duration.
          </p>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-8">
            <div className="bg-surface-container-high p-1 rounded-full inline-flex border border-surface-variant/50">
              <button
                onClick={() => setShowPreExisting(false)}
                className={`px-6 py-2.5 rounded-full text-label-md font-label-md font-medium transition-all duration-200 ${
                  !showPreExisting
                    ? 'bg-surface-container-lowest shadow-sm text-on-surface border border-surface-variant/30'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                No Pre-existing Conditions
              </button>
              <button
                onClick={() => setShowPreExisting(true)}
                className={`px-6 py-2.5 rounded-full text-label-md font-label-md font-medium transition-all duration-200 ${
                  showPreExisting
                    ? 'bg-surface-container-lowest shadow-sm text-on-surface border border-surface-variant/30'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Stable Pre-existing Conditions
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-[16px] border border-surface-variant shadow-sm bg-surface-container-lowest">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-surface-variant">
                <th className="p-6 text-label-md font-label-md text-on-surface-variant font-medium">Age Bracket</th>
                <th className="p-6 text-label-md font-label-md text-on-surface-variant font-medium">$100,000 Coverage</th>
                <th className="p-6 text-label-md font-label-md text-on-surface-variant font-medium">$150,000 Coverage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-variant text-body-md font-body-md text-on-surface">
              {(!showPreExisting ? [
                { age: "40-44", c100: "$85/mo", c150: "$115/mo" },
                { age: "45-49", c100: "$95/mo", c150: "$130/mo" },
                { age: "50-54", c100: "$110/mo", c150: "$150/mo" },
                { age: "55-59", c100: "$135/mo", c150: "$185/mo" },
                { age: "60-64", c100: "$170/mo", c150: "$235/mo" },
                { age: "65-69", c100: "$220/mo", c150: "$305/mo" },
                { age: "70-74", c100: "$295/mo", c150: "$410/mo" },
                { age: "75-79", c100: "$415/mo", c150: "$580/mo" },
                { age: "80-84", c100: "$610/mo", c150: "$850/mo" },
                { age: "85+", c100: "$920/mo", c150: "$1,280/mo" },
              ] : [
                { age: "40-44", c100: "$115/mo", c150: "$155/mo" },
                { age: "45-49", c100: "$125/mo", c150: "$170/mo" },
                { age: "50-54", c100: "$145/mo", c150: "$195/mo" },
                { age: "55-59", c100: "$175/mo", c150: "$240/mo" },
                { age: "60-64", c100: "$220/mo", c150: "$305/mo" },
                { age: "65-69", c100: "$285/mo", c150: "$395/mo" },
                { age: "70-74", c100: "$385/mo", c150: "$530/mo" },
                { age: "75-79", c100: "$540/mo", c150: "$750/mo" },
                { age: "80-84", c100: "$790/mo", c150: "$1,100/mo" },
                { age: "85+", c100: "$1,195/mo", c150: "$1,660/mo" },
              ]).map((row, i) => (
                <tr key={i} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="p-6">{row.age}</td>
                  <td className="p-6">{row.c100}</td>
                  <td className="p-6">{row.c150}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-24 border-t border-surface-variant pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary text-[32px]">bolt</span>
            </div>
            <h4 className="text-body-lg font-headline-md text-on-surface mb-2">15-Min Claim Approval</h4>
            <p className="text-body-md font-body-md text-on-surface-variant">Experience lightning-fast processing for eligible claims, getting you back on track sooner.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary text-[32px]">public</span>
            </div>
            <h4 className="text-body-lg font-headline-md text-on-surface mb-2">Global Worldwide Coverage</h4>
            <p className="text-body-md font-body-md text-on-surface-variant">Travel with confidence knowing you're protected anywhere in the world, 24/7.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary text-[32px]">support_agent</span>
            </div>
            <h4 className="text-body-lg font-headline-md text-on-surface mb-2">Expert Human Support</h4>
            <p className="text-body-md font-body-md text-on-surface-variant">Connect directly with licensed professionals, not bots, whenever you need assistance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
