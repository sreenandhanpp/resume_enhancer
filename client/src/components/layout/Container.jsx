// components/PageContainer.jsx

const PageContainer = ({ children, className = '' }) => {
  return (
    <div className={`mx-auto bg-background w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
