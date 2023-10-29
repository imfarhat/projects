export { loadNavMarquee };

function loadNavMarquee() {
  const jsonURL = './elements/nav-marquee.json';
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
          <marquee class="flex cursor-pointer bg-blue-500 text-white select-none" behavior="scroll" scrollamount="4" direction="left" onmouseover="this.stop()" onmouseleave="this.start()">
          <span class="uppercase">${item.marqueeHead}</span>: ${item.marqueeTxt}
          <a class="underline-offset-2 underline tap-highlight" href="${item.linkURL}">${item.linkTxt}</a> for more details
          </marquee>
        `;
      });
    });
  } catch (error) {
  console.error('An error occurred:', error);
  }
};