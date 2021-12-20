const search = () => {
    const input = document.querySelector('.search-wrapper_input');
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', () => {
        console.log(input.value);
    });
};

export default search;