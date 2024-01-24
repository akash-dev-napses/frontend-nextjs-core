import classnames from "classnames";
import PropTypes from "prop-types";

const RadioButton = ({
  id,
  name,
  className,
  handleChange,
  isSelected,
  value,
  radioLabel,
  hideLabel,
  radioDisable,
  isError,
  radioLabelPos,
  labelClassName,
}) => {
  const labelPosition = radioLabelPos === "left" ? "mr-2" : "ml-2";

  return (
    <div
      className={classnames(
        "relative inline-flex items-center cursor-pointer",
        radioLabelPos === "left" && "flex-row-reverse",
        radioDisable && "pointer-events-none"
      )}
    >
      <input
        id={id}
        name={name}
        onChange={handleChange}
        value={value}
        type="radio"
        checked={isSelected}
        className="absolute opacity-0 w-full h-full left-0 top-0 z-10 cursor-pointer"
      />
      <span
        className={classnames(
          className,
          "flex justify-center items-center relative w-6 h-6 rounded-full border before:none before:w-3 before:h-3 before:rounded-full before:bg-lightGrey",
          {
            "border-neutral-300": !isSelected && !isError,
            "bg-primary-900 border-primary-900 before:flex before:bg-white":
              isSelected,
            "bg-neutral-100 border-neutral-300 pointer-events-none":
              radioDisable,
            "bg-neutral-300 border-neutral-300": radioDisable && isSelected,
            "border-error-100": isError,
          }
        )}
      ></span>
      <span
        className={`text-sm text-neutral-900 ${labelClassName} ${labelPosition}`}
      >
        {!hideLabel && radioLabel}
      </span>
      {isError && (
        <div className="block text-xs text-error-100 mt-1">Error message</div>
      )}
    </div>
  );
};

RadioButton.defaultProps = {
  radioDisable: false,
  isError: false,
  hideLabel: false,
  radioLabelPos: "right",
};

RadioButton.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func,
  isSelected: PropTypes.bool,
  value: PropTypes.string,
  radioLabel: PropTypes.string,
  hideLabel: PropTypes.bool,
  radioDisable: PropTypes.bool,
  isError: PropTypes.bool,
  radioLabelPos: PropTypes.oneOf(["left", "right"]),
  labelClassName: PropTypes.string,
};

export default RadioButton;
