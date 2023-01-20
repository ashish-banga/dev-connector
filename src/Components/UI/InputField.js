const InputField = (props) => {
  return (
    <input
      className="border-slate-400 mt-4 px-1 w-3/5 border placeholder-gray-700"
      placeholder={props.placeholder}
      type={props.type}
    ></input>
  );
};
export default InputField;
