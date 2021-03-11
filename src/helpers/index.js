export const createCalendar = (
  actualYear,
  actualMonth,
  locale = 'es-ES',
  { month, weekday } = { month: 'long', weekday: 'short' }
) => {
  const months = [...Array(12).keys()];
  const days = [...Array(7).keys()];
  const intlMonth = new Intl.DateTimeFormat(locale, { month });
  const intlDays = new Intl.DateTimeFormat(locale, { weekday });
  const intlYears = new Intl.DateTimeFormat(locale, { year: 'numeric' });

  const daysName = days.map((dayKey) => {
    return intlDays.format(new Date(2021, 7, dayKey + 1));
  });

  const monthsName = months.map((monthKey) => {
    return intlMonth.format(new Date(actualYear, monthKey, 1));
  });

  const monthData = () => {
    const startOn = new Date(actualYear, actualMonth, 1).getDay();
    const monthName = intlMonth.format(new Date(actualYear, actualMonth));
    const daysOfMonth = new Date(actualYear, actualMonth + 1, 0).getDate();

    return {
      startOn,
      monthName,
      daysOfMonth,
    };
  };

  const year = intlYears.format(new Date(actualYear, actualMonth));

  return {
    year,
    daysName,
    monthsName,
    monthData: monthData(),
  };
};
