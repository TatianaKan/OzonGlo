const getData = () => {
  return fetch('https://ozonglo-6132b-default-rtdb.europe-west1.firebasedatabase.app/goods.json')
    .then((response) => {
      return response.json()
})

 
}

export default getData