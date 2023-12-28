const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="">{label}</span>
      </label>
      <input type={type} name={name} defaultValue={defaultValue} />
    </div>
  );
};
export default FormInput;
