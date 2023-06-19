export default function showDate(dateString, daysMonthYears) {
    const dateToShow = new Date(dateString);

    if(!dateString || !dateToShow.getTime()) return '';

    dateToShow.setUTCHours(2);

    const { days, months, years } = daysMonthYears;

    if(days) dateToShow.setDate(dateToShow.getDate() + Number(days));
    if(months) dateToShow.setMonth(dateToShow.getMonth() + Number(months));
    if(years) dateToShow.setFullYear(dateToShow.getFullYear() + Number(years));

    return dateToShow.toLocaleString();
}