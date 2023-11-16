const currentTab = document.getElementById('page-id').innerHTML;
function setTabState(tabId) {
  const navTab = document.getElementById(`nav-item-${tabId}`);
  navTab.classList.add('border-t-4', 'text-blue-600', 'bg-white/50');
};
setTabState(currentTab);