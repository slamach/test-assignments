document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  let currentActiveTab = document.querySelector('.tab_active');

  tabs.forEach(tab => {
    tab.addEventListener('click', function(evt) {
      evt.preventDefault();

      if (tab !== currentActiveTab) {
        currentActiveTab.classList.remove('tab_active');
        currentActiveTab.parentNode.classList.remove('category_active');

        tab.classList.add('tab_active');
        tab.parentNode.classList.add('category_active');

        currentActiveTab = tab;
      }
    });
  });
});
