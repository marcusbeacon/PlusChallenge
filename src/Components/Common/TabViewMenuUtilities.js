// Utility functions used by TabViewMenu

// Selects or deselects options in the ActionMenu
export const toggleMenuOptions = (options, name) => {
  return options.map(option => {
    if (option.name === name) {
      option.selected = !option.selected;
    }

    return option;
  });
};

// Returns the current label for the ActionMenu Button to indicate which options are selected.
export const getMenuButtonLabel = (options) => {
  const selectedCount = options.filter(option => option.selected).length;

  // If all options are selected then will return 'ALL'.
  if (selectedCount === options.length) {
    return 'All';
  }

  // If one option is selected then will return that option.
  if (selectedCount === 1) {
    return options.filter(option => option.selected)[0].name;
  }

  // If 2 or more options are selected then will return the number selected
  // otherwise will return 'None selected'.
  return selectedCount > 1 ? `${selectedCount} selected` : 'None selected';
};


// Returns if the provided view is selected
export const isOptionSelected = (options, view) => {
  return options.find(option => option.name === view && option.selected);
};
