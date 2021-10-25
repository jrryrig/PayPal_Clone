// Navigation
const dropdownItems = document.querySelectorAll('.dropdown-hover');

dropdownItems.forEach(dropdownItem => {
  dropdownItem.addEventListener('mouseover', () => {
    dropdownItem.lastElementChild.style.cssText =
      'opacity: 1; visibility: visible';
  });
});
// End of Navigation
