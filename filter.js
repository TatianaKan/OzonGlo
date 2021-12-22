import getData from "./src/modules/getData";
import renderGoods from "./src/modules/renderGoods";
import { priceFilters } from "./src/modules/filters";

const filter = () => {
  const minInput = document.getElementById('min');
  const maxInput = document.getElementById('max');
  

  minInput.addEventListener('input', () => {
    getData().then((data) => {
      renderGoods(priceFilters(data, minInput.value, maxInput.value));
    })
  })

  maxInput.addEventListener('input', () => {
    getData().then((data) => {
      renderGoods(priceFilters(data, minInput.value, maxInput.value));
    })
  })

}
export default filter