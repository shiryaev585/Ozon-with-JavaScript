import getData from './getData';
import renderGoods from './renderGoods';
import { searchFilter } from './filters';

const search = () => {
    const input = document.querySelector('.search-wrapper_input');

    input.addEventListener('input', ({ target }) => {
        const { value } = target;

        getData().then((data) => {
            renderGoods(searchFilter(data, value.toLowerCase()));
        });
    });
};

export default search;
