import classnames from "classnames";
import PropTypes from "prop-types";
import { useState } from "react";
import IcomoonIcon from "./IcomoonIcon";

const InputNumber = ({
  min,
  increment,
  decrement,
  onCountChange,
  disable,
  size,
  className,
}) => {
  const sizes = {
    small: "small",
    medium: "medium",
    large: "large",
  };

  const [count, setCount] = useState(min);

  const handleClickAdd = () => {
    const newCount = count + increment;
    setCount(newCount);
    onCountChange(newCount);
  };

  const handleClickSubtract = () => {
    if (count > min) {
      const newCount = count - decrement;
      setCount(newCount);
      onCountChange(newCount);
    }
  };

  const handleChange = (e) => {
    const valueAsNumber = parseFloat(e.target.value);
    if (!isNaN(valueAsNumber) && valueAsNumber >= min) {
      setCount(valueAsNumber);
      onCountChange(valueAsNumber);
    }
  };

  return (
    <div className="relative group">
      <input
        type="number"
        className={classnames(
          className,
          "hideArrow pl-3 border border-neutral-300 rounded-sm outline-none text-neutral-800 placeholder:text-neutral-300 w-full focus:border-primary-900 focus:shadow-[0px_0px_0px_2px_rgba(24,144,255,0.2)]",
          {
            "text-sm py-[1px]": size === sizes.small,
            "text-base py-[5px]": size === sizes.medium,
            "text-base py-[8px]": size === sizes.large,
            "bg-neutral-200 pointer-events-none text-opacity-25": disable,
          }
        )}
        value={count}
        onChange={handleChange}
        placeholder="Number"
      />
      <div className="flex-col justify-center items-center absolute top-px right-px cursor-pointer border-l border-neutral-100 hidden group-hover:flex">
        <div
          className={`flex justify-center items-center w-[22px] ${
            size === sizes.small && "h-[11px]"
          } ${size === sizes.medium && "h-[15px]"} ${
            size === sizes.large && "h-[19px]"
          }`}
          onClick={handleClickSubtract}
        >
          <IcomoonIcon className="" icon={"up-arrow"} size={"6"} />
        </div>
        <div
          className={`flex justify-center items-center w-[22px] border-t border-neutral-100 ${
            size === sizes.small && "h-[11px]"
          } ${size === sizes.medium && "h-[12px]"} ${
            size === sizes.large && "h-[19px]"
          }`}
          onClick={handleClickAdd}
        >
          <IcomoonIcon className="" icon={"down-arrow"} size={"6"} />
        </div>
      </div>
    </div>
  );
};

InputNumber.defaultProps = {
  min: 1,
  increment: 1,
  decrement: 1,
  disable: false,
  size: "small",
};

InputNumber.propTypes = {
  min: PropTypes.number,
  increment: PropTypes.number,
  decrement: PropTypes.number,
  onCountChange: PropTypes.func,
  disable: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  className: PropTypes.string,
};

export default InputNumber;
