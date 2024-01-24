import PropTypes from "prop-types";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({
  isError,
  errorClass,
  isDisabled,
  register,
  id,
  placeholder,
  isRequired,
  name,
  dbName,
  value,
  autocomplete,
  autofocus,
  errorMessage,
  ...rest
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="relative">
      <ReactDatePicker
        onChange={handleDateChange}
        selected={selectedDate}
        placeholderText={placeholder}
        disabled={isDisabled}
        required={isRequired}
        autoComplete={autocomplete}
        autoFocus={autofocus}
        id={id}
        name={name}
        {...(register && { ...register(dbName) })}
        value={value}
        className={`bg-white border w-full text-neutral-900 leading-[18px] outline-none appearance-none cursor-pointer py-2.5 px-4 rounded-lg placeholder-neutral-400 disabled:bg-neutral-100 disabled:border-neutral-300
                  ${isError ? "border-error-100 hover:border-error-100 focus:border-error-100" : 'border-neutral-200 hover:border-neutral-500 focus-within:border-primary-900 focus:border-primary-900'} `}
        {...rest}
      />

      {isError && (
        <span className={`text-error-100 pl-0.5 text-sm pt-2 font-normal leading-[21px] select-none`}>{errorMessage}</span>
      )}
    </div>
  );
};

DatePicker.defaultProps = {
  isDisabled: false,
  isRequired: false,
  isError: false,
  autocomplete: "off",
  autofocus: false,
  placeholder :"DD/MM/YY",
  name : "Date picker",
};

DatePicker.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  isError: PropTypes.bool,
  register: PropTypes.func,
  autocomplete: PropTypes.oneOf(["on", "off"]),
  autofocus: PropTypes.bool,
  dbName: PropTypes.string,
  value: PropTypes.string,
  errorClass: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default DatePicker;
