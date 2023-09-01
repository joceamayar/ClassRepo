const dayjs = require("dayjs")

module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY

  formated_end_date: (date) => {
    const endDate = dayjs(date).add(5, 'year').format("DD/MM/YYYY");
    return endDate;
  },

  formated_start_date: (date) => {
    const startDate = dayjs(date).add(5, 'year').format("DD/MM/YYYY");
    return startDate;
  },



};

