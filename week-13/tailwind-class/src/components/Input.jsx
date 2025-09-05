export const InputField = ({ value, onChange, placeholder }) => {
  return (
    <div className="flex justify-center pt-3">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="px-4 py-3 w-80 rounded-xl text-sm text-white bg-[#19416b] outline-none placeholder-gray-300"
      />
    </div>
  );
};