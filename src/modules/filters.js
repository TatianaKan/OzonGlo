export const searchFilters = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase())
  })
}

export const categoryFilters = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value
    // return true
  })
}

export const priceFilters = (goods, min, max) => {
  return goods.filter((goodsItem) => {
    if (min === '' && max === '') {
      return goodsItem
    } else if (min !== '' && max !== '') {
      return goodsItem.price < +max && goodsItem.price > +min
    } else if (min !== '' && max === '') {
      return goodsItem.price > +min
    } else if (min === '' && max !== '') {
      return goodsItem.price < +max
    }
  })
}

