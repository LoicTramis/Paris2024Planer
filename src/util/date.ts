const formatDate = (ISOString: string) => {
  const newDate = new Date(ISOString)
  return newDate.getDate()
}

export {
  formatDate
}