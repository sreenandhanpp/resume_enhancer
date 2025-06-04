const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base =
    "px-6 py-3 rounded-[6px] font-semibold transition-all duration-150 ease-in-out";

  const variants = {
    primary:
      "text-white bg-primary border border-[#4f2dc7] shadow-[0_4px_0_0_#4f2dc7,inset_0_-2px_4px_rgba(0,0,0,0.2)] " +
      "hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#4f2dc7,inset_0_2px_4px_rgba(0,0,0,0.25)] " +
      "active:translate-y-[1px] active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.3)]",

    secondary:
      "text-primary bg-surface border border-primary shadow-[0_4px_0_0_#a589f8,inset_0_-2px_4px_rgba(0,0,0,0.1)] " +
      "hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#a589f8,inset_0_2px_4px_rgba(0,0,0,0.15)] " +
      "active:translate-y-[1px] active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.25)]",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
