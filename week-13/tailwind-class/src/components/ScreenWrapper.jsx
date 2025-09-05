export const ScreenWrapper = ({ title, subtitle, children }) => {
  return (
    <div>
      <div className="flex text-3xl text-[#fff] justify-center pt-8">
        {title}
      </div>
      {subtitle && (
        <div className="flex justify-center pt-6 text-[#6586a8]">
          {subtitle}
        </div>
      )}
      {children}
    </div>
  );
};
