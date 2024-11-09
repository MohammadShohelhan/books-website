const getWishListStr = () => {
  const sortedWishList = localStorage.getItem("wishList");
  if (sortedWishList) {
    const wishList = JSON.parse(sortedWishList);
    return wishList;
  } else {
    return [];
  }
};

const saveWishListToLocal = (id) => {


  const wishList = getWishListStr();

  if (wishList.includes(id)) {
    return alert("already Exited");
  } else {
    wishList.push(id);

    localStorage.setItem("wishList", JSON.stringify(wishList));
  }
};

export { saveWishListToLocal, getWishListStr };
