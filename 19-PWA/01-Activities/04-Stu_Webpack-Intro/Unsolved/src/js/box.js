// TODO: Add a comment explaining the role of `export` in this function `boxClick()`

// Export imports and add the event listeners. Allowa ua to use this in other files 

export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.style.backgroundColor === 'blue') {
    box.style.backgroundColor = 'yellow';
  } else {
    box.style.backgroundColor = 'blue';
  }
};
