$script.ready('om-page-info', function() {
  document.querySelector('#js-direct .om-profile-name').textContent =
    OmegaTargetPopup.getMessage('profile_direct');
  document.querySelector('#js-system .om-profile-name').textContent =
    OmegaTargetPopup.getMessage('profile_system');
  document.querySelector('#js-addrule-label').textContent =
    OmegaTargetPopup.getMessage('popup_addCondition');
  document.querySelector('#js-option-label').textContent =
    OmegaTargetPopup.getMessage('popup_showOptions');

  // Set Material Icons for static menu items
  var iconMap = {
    'js-direct': 'arrow_forward',
    'js-system': 'power_settings_new',
    'js-reqinfo': 'warning',
    'js-addrule': 'add',
    'js-temprule': 'filter_list',
    'js-option': 'tune',
  };
  Object.keys(iconMap).forEach(function(id) {
    var el = document.getElementById(id);
    if (el) {
      var icon = el.querySelector('.material-icons');
      if (icon) {
        icon.textContent = iconMap[id];
      }
    }
  });
});
