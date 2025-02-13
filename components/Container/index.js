function Container({ children, className = "" }) {
  return (
    <div className={`w-[90%] md:w-full mx-auto ${className}`}>
      {children}
    </div>
  );
}

export default Container; 