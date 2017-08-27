export function convertDateToRequiredFormat(pDate) {
    let lDateString = new Date(pDate);
    const lMonth = lDateString.getMonth() + 1;
    const lDate = lDateString.getDate();
    const lYear = lDateString.getFullYear();

    lDateString = lYear + '-' + ( lMonth < 10 ? '0' + lMonth : lMonth ) +
    '-' + ( lDate < 10 ? '0' + lDate : lDate );
    return lDateString;
}
