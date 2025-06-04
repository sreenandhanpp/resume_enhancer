const Card = ({ title, description, className = "" }) => {
  return (
    <div
      className={`relative bg-surface border border-border rounded-2xl p-8 
                  flex flex-col gap-4 transition duration-300 
                  overflow-hidden min-h-[220px] ${className}`}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e0e022_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e022_1px,transparent_1px)] bg-[size:20px_20px] rounded-2xl pointer-events-none z-0" />

      {/* Content */}
     <h3 className="relative z-10 text-2xl font-semibold text-primary text-left">
  {title}
</h3>

      <p className="relative z-10 text-base text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Card;
