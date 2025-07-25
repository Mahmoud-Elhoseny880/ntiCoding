

function getDayFromDate(dateStr) {
  const date = new Date(dateStr);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  console.log(days[date.getDay()]);
}

getDayFromDate("2025-07-25");
