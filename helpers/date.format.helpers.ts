const moment = require('moment');
const dateFormat = 'DD/MM/YYYY';

class DateFormatter {
  /**
   * Get the current date
   * @returns {String}
   */
  public static getCurrentDate() {
    return moment().format(dateFormat);
  }

  /**
   * Add days to date
   * @param {String} date in DD/MM/YYYY format
   * @param {Number} numberOfDays to be added to the date
   * @returns {String}
   */
  public static incrementDatePerNumberOfDays(date, numberOfDays) {
    const initialDate = moment(date, dateFormat);
    return initialDate.add(numberOfDays, 'days');
  }

  /**
   * Add months to date
   * @param {String} date in DD/MM/YYYY format
   * @param {Number} numberOfMonths to be added to the date
   * @returns {String}
   */
  public static incrementDatePerNumberOfMonths(date, numberOfMonths) {
    const initialDate = moment(date, dateFormat);
    return initialDate.add(numberOfMonths, 'M');
  }
}

module.exports = DateFormatter;
