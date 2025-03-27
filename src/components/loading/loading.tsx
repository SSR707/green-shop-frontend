const LoadingSpinner = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-t-[var(--primary)] border-gray-300 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-12 h-12 bg-[var(--primary)] opacity-30 rounded-full animate-ping"></div>
        </div>
      </div>
    );
  };
  
  export default LoadingSpinner;
  