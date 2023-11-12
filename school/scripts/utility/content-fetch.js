export { loadNavMarquee, loadHomeNotice };

function loadNavMarquee() {
  const jsonURL = './contents/jsons/nav-marquee.json';
  const displayDiv = document.getElementById('topNavMarquee');
  try {
  fetch(jsonURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      data.forEach(item => {
        displayDiv.innerHTML += `
          <marquee class="flex cursor-pointer bg-blue-500 text-white select-none m-0 p-0" behavior="scroll" scrollamount="4" direction="left" onmouseover="this.stop()" onmouseleave="this.start()">
          <span class="uppercase font-[500]">${item.marqueeHead}</span> ${item.marqueeTxt}
          <a class="underline" href="${item.linkURL}">${item.linkTxt}</a> for more details
          </marquee>`;
      });
    });
  } catch (error) {
  console.error('An error occurred:', error);
  }
};

function loadHomeNotice() {
  const jsonURL = './contents/jsons/notice.json';
  const displayDiv = document.getElementById('home-notice');
  try {
  fetch(jsonURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      //Slice to get only the first 10 records
      data.slice(0, 10).forEach(item => {
      displayDiv.innerHTML += `
      <li class="group flex items-center justify-between gap-2 bg-white p-2 rounded-md shadow-md text-blue-500 hover:text-blue-600">
        ${item.noticeTitle}
          <span id="download-span" class="hidden xl:flex xl:opacity-0 bg-blue-500 text-white p-1.5 rounded-t-lg xl:group-hover:opacity-100 text-sm font-normal transition-all ease-in">
            ${item.uploadDate}
          </span>
        <a href="./contents/docs/notice/${item.fileName}" download="${item.noticeTitle} ${item.fileName}">  
          <button class="text-3xl p-1.5 rounded-md flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white active:scale-90 shadow-md transition-all ease-in">
            <i class="fa-solid fa-circle-arrow-down"></i>
          </button>
        </a>  
      </li>`;
      });
    });
  } catch (error) {
  console.error('An error occurred:', error);
  }
};