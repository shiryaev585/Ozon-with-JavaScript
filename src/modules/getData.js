const getData = () => {
    console.log('getData');
    return fetch('https://glozon-d0ef7-default-rtdb.firebaseio.com/goods.json')
        .then((response) => response.json());
};

export default getData;
