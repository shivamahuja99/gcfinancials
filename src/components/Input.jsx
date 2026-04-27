import React from 'react';

const Input = ({ label, error, ...props }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-on-surface-variant mb-1">{label}</label>}
      <input
        className="w-full px-4 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
