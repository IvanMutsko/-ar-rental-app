export const getFavoriteCars = () => {
  const favoriteCarsString = localStorage.getItem('favoriteCars');
  return favoriteCarsString ? JSON.parse(favoriteCarsString) : [];
};
