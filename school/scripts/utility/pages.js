let currentTab = document.getElementById('page-id').innerHTML;
function setTabState(tabId) {
  const navTab = document.getElementById(`nav-item-${tabId}`);
  navTab.classList.add('border-t-4','border-l-2', 'text-blue-500', 'bg-transparent');
};