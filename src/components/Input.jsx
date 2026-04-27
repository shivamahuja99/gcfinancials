import React from 'react';

const Input = ({ label, error, ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm font-black text-[#1d1d1f] uppercase tracking-widest ml-1">{label}</label>}
      <div className="relative group">
        <input
          className="w-full px-6 py-4 bg-gray-50/50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-semibold text-lg text-[#1d1d1f] placeholder:text-gray-300 group-hover:bg-gray-50"
          {...props}
        />
      </div>
      {error && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{error}</p>}
    </div>
  );
};

export default Input;
