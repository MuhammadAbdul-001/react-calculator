function Buttons({ setValue, value }) {
  return (
    <div className="the-keys">
      <input
        type="button"
        value="AC"
        className="operator-ash"
        onClick={(e) => setValue("")}
      />
      <input
        type="button"
        value="DE"
        className="operator-ash"
        onClick={(e) => setValue(value.slice(0, -1))}
      />
      <input
        type="button"
        value="%"
        className="operator-ash"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="/"
        className="operator"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="7"
        className=""
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="8"
        className=""
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="8"
        className=""
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="*"
        className="operator"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="4"
        className=""
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="5"
        className=""
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="6"
        className=""
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="-"
        className="operator"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="1"
        className=""
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="2"
        className=""
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="3"
        className=""
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="+"
        className="operator"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="0"
        className="span"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="."
        className=""
        onClick={(e) => setValue(value + e.target.value)}
      />
      <input
        type="button"
        value="="
        className="operator"
        onClick={(e) => setValue(eval(value))}
      />
    </div>
  );
}

export default Buttons;
