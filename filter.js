import getData from "./src/modules/getData";
import renderGoods from "./src/modules/renderGoods";
import { priceFilters, hotSaleFilters } from "./src/modules/filters";

const filter = () => {
  const minInput = document.getElementById('min');
  const maxInput = document.getElementById('max');
  const checkBoxInput = document.getElementById('discount-checkbox');
  const checkBoxSpan = document.querySelector('.filter-check_checkmark');

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

  checkBoxInput.addEventListener('change', () => {
    console.log(checkBoxInput.checked);
    if (checkBoxInput.checked) {
      checkBoxSpan.classList.add('checked')
    } else {
      checkBoxSpan.classList.remove('checked')
    }
    getData().then((data) => {
      renderGoods(hotSaleFilters(data, checkBoxInput.checked));
    })
  })

}
export default filter