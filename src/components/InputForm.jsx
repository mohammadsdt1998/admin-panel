function InputForm({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="h-10 w-full rounded-r border border-gray-600 bg-transparent p-2
                 focus:border-white focus:outline-none focus:outline-[1px] focus:outline-offset-0 
                 focus:outline-white focus:ring focus:ring-4 focus:ring-violet-500/[.50]"
    />
  );
}

export default InputForm;
