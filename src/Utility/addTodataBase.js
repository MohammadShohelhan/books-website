const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("readList");

  if (storedListStr) {
    const sortedList = JSON.parse(storedListStr);
    return sortedList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {

  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    return alert("already exited");
  } else {
    storedList.push(id);

    localStorage.setItem("readList", JSON.stringify(storedList));
  }
};

export { getStoredReadList, addToStoredReadList };
