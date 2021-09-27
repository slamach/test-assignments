document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.preloader').style.display = 'none';
  document.querySelector('.container').style.display = 'block';

  const wpLoopTabs = document.querySelectorAll('.categories_wp-loop .tab');
  const apiTabs = document.querySelectorAll('.categories_api .tab');

  let wpLoopCurrentActiveTab = wpLoopTabs[0];
  wpLoopCurrentActiveTab.classList.add('tab_active');
  wpLoopCurrentActiveTab.parentNode.classList.add('category_active');
  let apiCurrentActiveTab = apiTabs[0];
  apiCurrentActiveTab.classList.add('tab_active');
  apiCurrentActiveTab.parentNode.classList.add('category_active');

  wpLoopTabs.forEach(wpLoopTab => {
    wpLoopTab.addEventListener('click', function(evt) {
      evt.preventDefault();

      if (wpLoopTab !== wpLoopCurrentActiveTab) {
        wpLoopCurrentActiveTab.classList.remove('tab_active');
        wpLoopCurrentActiveTab.parentNode.classList.remove('category_active');

        wpLoopTab.classList.add('tab_active');
        wpLoopTab.parentNode.classList.add('category_active');

        wpLoopCurrentActiveTab = wpLoopTab;
      }
    });
  });

  apiTabs.forEach(apiTab => {
    apiTab.addEventListener('click', function(evt) {
      evt.preventDefault();

      if (apiTab !== apiCurrentActiveTab) {
        apiCurrentActiveTab.classList.remove('tab_active');
        apiCurrentActiveTab.parentNode.classList.remove('category_active');

        apiTab.classList.add('tab_active');
        apiTab.parentNode.classList.add('category_active');

        apiCurrentActiveTab = apiTab;
      }
    });
  });
});
