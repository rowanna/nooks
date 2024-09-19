export default useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const targetVal = event.target.value;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(targetVal);
    }
    if (willUpdate) {
      setValue(targetVal);
    }
  };
  return { value, onChange };
};