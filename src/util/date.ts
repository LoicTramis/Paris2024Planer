const monthsNameLong= ["January","February","March","April","May","June","July", "August","September","October","November","December"];
const monthsNameShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

const getToday = () => {
  const today = new Date()
  return formatDateDate(today)
}

const formatDateDate = (newDate: Date) => {

  const day = newDate.getDate()
  const month = monthsNameLong[newDate.getMonth()]
  const year = newDate.getFullYear()

  return `${day} ${month} ${year}`
}
const formatStringDate = (ISOString: string) => {
  const newDate = new Date(ISOString)

  const day = newDate.getDate()
  const month = monthsNameLong[newDate.getMonth()]
  const year = newDate.getFullYear()

  return `${day} ${month} ${year}`
}

export {
  getToday,
  formatDateDate,
  formatStringDate
}