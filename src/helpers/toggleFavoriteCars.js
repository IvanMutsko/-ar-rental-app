export const addFavorite = (id, getFavoriteCars, setIsFavorite) => {
  const favoriteCars = getFavoriteCars();
  const indexOfId = favoriteCars.indexOf(id);

  if (indexOfId !== -1) {
    favoriteCars.splice(indexOfId, 1);
    setIsFavorite('');
  } else {
    favoriteCars.push(id);
    setIsFavorite('favorite');
  }

  localStorage.setItem('favoriteCars', JSON.stringify(favoriteCars));
};
