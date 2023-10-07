function countTotalPrice (data) {
  const totalPrice = data.reduce((total, item) => {
    const totalPriceItem = parseInt(item.price) * item.count
    return total + totalPriceItem
  }, 0)

  return totalPrice
}

const showFormattedDate = date => {
   const options = {
     weekday: 'long',
     year: 'numeric',
     month: 'long',
     day: 'numeric'
   }
   return new Date(date).toLocaleDateString('id-ID', options)
 }

export { countTotalPrice, showFormattedDate }
