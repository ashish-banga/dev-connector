const InputField = (props) => {
  return (
    <input
      onChange={props.onChange}
      className="border-slate-400 p-1 mb-1 w-full border bg-yellow-50 placeholder-gray-700 rounded-md text-black mt-5 text-sm"
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      {...props}
    ></input>
  );
};
export default InputField;
