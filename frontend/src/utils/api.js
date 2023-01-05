import config from "../config";

const getRecipes = async () => {
  const url = `${config.BASE_URL}/recipes`;
  let data = await fetch(url).then(resp => resp.json());
  return data;
}

const getChefs = async () => {
  const url = `${config.BASE_URL}/chefs`;
  let data = await fetch(url).then(resp => resp.json());
  return data;
}

const searchRecipes = async (searchTerm) => {
  const url = `${config.BASE_URL}/search?search=${searchTerm}`
  let data = await fetch(url).then(resp => resp.json());
  return data;
}

export {
  getRecipes,
  getChefs,
  searchRecipes
}