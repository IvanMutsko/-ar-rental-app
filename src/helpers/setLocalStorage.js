export const setLocalStorage = () => {
  const favoriteCarsString = localStorage.getItem('favoriteCars');

  if (!favoriteCarsString) {
    localStorage.setItem('favoriteCars', JSON.stringify([]));
  }
};
