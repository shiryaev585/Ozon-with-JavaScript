export const searchFilter = (goods, value) => goods.filter((item) => item.title.toLowerCase().includes(value));

export const categoryFilter = (goods, value) => goods.filter((item) => item.category === value);
