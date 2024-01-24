import PropTypes from "prop-types";

const timeLineTypes = {
  icon: "icon",
  dot: "dot",
};

const TimeLineList = ({ types = timeLineTypes.icon, date, title, desc }) => {
  return (
    <div
      types={types}
      className={`relative after:content-[''] after:absolute after:top-2 after:w-0.5 after:h-full after:bg-neutral-300 ${
        types === timeLineTypes.icon ? "after:left-4" : "after:left-[3px]"
      }`}
    >
      <div className="flex relative text-sm z-10">
        <div
          className={`flex items-center justify-center rounded-full overflow-hidden bg-primary-900
          outline outline-8 outline-white ${
            types === timeLineTypes.icon
              ? "w-6 h-6 bg-checkMarkWhite bg-no-repeat bg-center"
              : "w-2 h-2"
          }`}
        ></div>
        <div className="ml-4 -mt-1 text-sm text-neutral-500 pb-10 max-w-xs">
          <div className="pb-1.5">{date}</div>
          <div className="text-neutral-900 font-medium pb-1.5">{title}</div>
          <div>{desc}</div>
        </div>
      </div>
    </div>
  );
};

TimeLineList.propTypes = {
  types: PropTypes.oneOf(["icon", "dot"]),
  date: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

const TimeLine = ({ types = "icon", timeLineListData = [] }) => {
  return (
    <div>
      {timeLineListData.map(({ date, title, desc }, index) => (
        <TimeLineList
          key={index}
          types={types}
          date={date}
          title={title}
          desc={desc}
        />
      ))}
    </div>
  );
};

TimeLine.propTypes = {
  types: PropTypes.oneOf(["icon", "dot"]),
  timeLineListData: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      title: PropTypes.string,
      desc: PropTypes.string,
    })
  ),
};

TimeLine.defaultProps = {
  types: "icon",
  timeLineListData: [],
};

export default TimeLine;
