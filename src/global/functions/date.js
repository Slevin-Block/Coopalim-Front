export const weekNumber = (date) => {
    const myDate = (typeof date === 'object') ? date : new Date(date)
    const startDate = new Date(myDate.getFullYear(), 0, 1);
    const days = Math.floor((myDate - startDate) /
        (24 * 60 * 60 * 1000));
    const nWeek = Math.ceil(days / 7);
    if (nWeek === 0) return weekNumber(new Date(myDate.getYear()-1, 11, 31))
    return nWeek
}

export const dayWeek = (date) => {
    const myDate = (typeof date === 'object') ? date : new Date(date)

    //new Date(Date.now()).toLocaleString("fr-FR", {weekday: "long"})

    return myDate.getDay() === 0 ? 7 :  myDate.getDay()
}

const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
export const shortDate = (date) => {
    if (!date) return ""
    const myDate = (typeof date === 'object') ? date : new Date(date)
    const day = myDate.getDate().toString().padStart(2, '0')
    const month = mois[(myDate.getMonth() + 1)]
    const year = myDate.getFullYear().toString()
    return `${day} ${month} ${year}`
    //return year + "-" + month + "-" + day
}