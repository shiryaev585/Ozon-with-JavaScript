const deleteData = (id) => {
    console.log('deleteData');
    return fetch(`http://localhost:3000/goods/${id}`, {
        method: 'DELETE',
    }).then((res) => res.json());
};

export default deleteData;
