// Initializing an object to exract specific information from current date
const locale = 'en-US';
const options = {
  weekday: 'long',
  month: 'long', 
  day: 'numeric'
}

// Getting date informations
const current_date = new Date();
const formatted_date = current_date.toLocaleDateString(locale,options);
const week_day = formatted_date.split(',',1)[0];

// Exported functions
exports.getDate = () => formatted_date;
exports.getDay = () => week_day;
exports.isWeekDay = () => !(week_day === "Sunday" || week_day === "Saturday")