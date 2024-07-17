

export default function Input({name,placeholder, handleInput}) {
  return (
    <div>
      <input
        className="input-field"
        type="text"
        placeholder={placeholder}
        onChange={handleInput}
        name={name}
      />
    </div>
  );
}
