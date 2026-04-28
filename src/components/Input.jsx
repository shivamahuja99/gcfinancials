

const Input = ({ label, error, ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="font-label-md text-on-surface-variant ml-1 uppercase tracking-wider text-[11px]">{label}</label>}
      <div className="relative group">
        <input
          className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none placeholder:text-outline-variant group-hover:border-outline"
          {...props}
        />
      </div>
      {error && <p className="text-error text-xs font-bold mt-1 ml-1">{error}</p>}
    </div>
  );
};

export default Input;
