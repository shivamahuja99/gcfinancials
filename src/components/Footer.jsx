import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-tertiary-legacy text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">InsurPremium</h3>
            <p className="text-gray-400 max-w-sm">
              Providing modern, reliable Super Visa insurance for families across Canada.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; 2026 InsurPremium Insurance Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
