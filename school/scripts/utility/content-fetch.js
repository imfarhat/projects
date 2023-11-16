export { loadNavMarquee, loadHomeNotice, loadAllFacultyData, loadAdministrativeTeamData, loadSportsDivData, loadCampusDivData, loadAllClassroomData, loadAllLaboratoriesData, loadAllOtherInrastructureData };

function loadNavMarquee() {
  const jsonURL = './contents/fetch-page-jsons/home/nav-marquee.json';
  const displayDiv = document.getElementById('topNavMarquee');

  fetch(jsonURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayDiv.innerHTML = data.map(item => `
        <marquee class="flex cursor-pointer bg-blue-500 text-white select-none m-0 p-0" behavior="scroll" scrollamount="4" direction="left">
          <span class="uppercase font-[500]">${item.marqueeHead}</span> ${item.marqueeTxt}
          <a class="underline" href="${item.linkURL}">${item.linkTxt}</a> for more details
        </marquee>
      `).join('');
    })
    .catch(error => {
      console.error('An error occurred while fetching the marquee notice:', error);
    });
};

function loadHomeNotice() {
  const jsonURL = './contents/fetch-page-jsons/home/notice.json';
  const displayDiv = document.getElementById('home-notice');

  fetch(jsonURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayDiv.innerHTML = data.slice(0, 10).map(item => `
        <li class="group flex items-center justify-between gap-2 bg-white p-2 rounded-md shadow text-blue-500 hover:text-blue-600">
          ${item.noticeTitle}
          <span id="download-span" class="hidden xl:flex xl:opacity-0 bg-blue-500 text-white p-1.5 rounded-t-lg xl:group-hover:opacity-100 text-sm font-normal transition-all ease-in">
            ${item.uploadDate}
          </span>
          <a href="./contents/docs/notice/${item.fileName}" download="${item.noticeTitle} ${item.fileName}">
            <button class="text-2xl p-1.5 rounded-md flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white active:scale-90 shadow-md transition-all ease-in">
              <i class="fa-solid fa-cloud-arrow-down"></i>
            </button>
          </a>
        </li>
      `).join('');
    })
    .catch(error => {
      console.error('An error occurred while fetching the top 10 recent notices:', error);
    });
};


function loadFacultyData(jsonURL, displayDivId, imageFolder) {
  const displayDiv = document.getElementById(displayDivId);
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
          <div class="relative group overflow-hidden rounded-md uppercase">
            <img src="./contents/images/fetch-page-imgs/${imageFolder}/${item.imgFileName}" alt="${item.facultyName}" class="aspect-[3/4] h-[22rem] rounded-md">
            <span class="absolute bottom-0 md:translate-y-20 md:group-hover:translate-y-0 w-full bg-gray-500/50 flex flex-col p-2 text-white drop-shadow transition-all ease-in">
              <span class="font-semibold text-base flex">${item.facultyName}</span>
              <span class="text-xs flex">${item.position || item.class}</span>
              <span class="text-xs flex">${item.qualifications || item.subjectDepartment || item.department}</span>
            </span>
          </div>
        `;
      });
    })
    .catch(error => {
      console.error('An error occurred while fetching Faculty/Administrative Data:', error);
    });
};

function loadAllFacultyData() {
  try {
    loadFacultyData('./contents/fetch-page-jsons/faculty/principal.json', 'principal-div', 'faculty/principal');
    loadFacultyData('./contents/fetch-page-jsons/faculty/headmistresses.json', 'headmistresses-div', 'faculty/headmistresses');
    loadFacultyData('./contents/fetch-page-jsons/faculty/coordinators.json', 'coordinators-div', 'faculty/coordinators');
    loadFacultyData('./contents/fetch-page-jsons/faculty/extra-curricular-activity-coordinators.json', 'extra-curricular-activity-coordinators-div', 'faculty/extra-curricular-activity-coordinators');
    loadFacultyData('./contents/fetch-page-jsons/faculty/hod.json', 'hod-div', 'faculty/hod');
    loadFacultyData('./contents/fetch-page-jsons/faculty/pre-primary-faculty.json', 'pre-primary-faculty-div', 'faculty/pre-primary-faculty');
    loadFacultyData('./contents/fetch-page-jsons/faculty/middle-school-faculty.json', 'middle-school-faculty-div', 'faculty/middle-school-faculty');
    loadFacultyData('./contents/fetch-page-jsons/faculty/senior-school-faculty.json', 'senior-school-faculty-div', 'faculty/senior-school-faculty');
  } catch (error) {
    console.error('An error occurred while fetching All Faculty Page Data:', error);
  }
};

function loadAdministrativeTeamData() {
  try {
    loadFacultyData('./contents/fetch-page-jsons/administrative-team.json', 'administrative-team-div', 'administrative');
  } catch (error) {
    console.error('An error occurred while fetching Administrative Team Data:', error);
  }
};

function loadImglandscapeTextData(jsonURL, displayDivId, imageFolder) {
  const displayDiv = document.getElementById(displayDivId);
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
          <div class="relative group overflow-hidden rounded-md">
            <img src="./contents/images/fetch-page-imgs/${imageFolder}/${item.imgFileName}" alt="${item.eventName || item.imgLocation}" class="aspect-[4/3] w-[22rem] rounded-md">
            <span class="absolute bottom-0 md:translate-y-16 md:group-hover:translate-y-0 w-full bg-[#EDF2FB]/25 flex flex-col p-2 text-white drop-shadow-md transition-all ease-in">
              <span class="font-semibold flex">${item.eventName || item.imgLocation}</span>
              <span class="text-sm flex">${item.eventYear || item.imgComment}</span>
            </span>
          </div>
        `;
      });
    })
    .catch(error => {
      console.error('An error occurred while fetching 4/3 ration images with texts :', error);
    });
};

function loadSportsDivData() {
  try {
    loadImglandscapeTextData('./contents/fetch-page-jsons/sports.json', 'sports-div', 'sports');

  } catch (error) {
    console.error('An error occurred while loading Sports Data:', error);
  }
};

function loadCampusDivData() {
  try {
    loadImglandscapeTextData('./contents/fetch-page-jsons/campus.json', 'campus-div', 'campus');

  } catch (error) {
    console.error('An error occurred while loading Campus Data:', error);
  }
};

function loadAllClassroomData() {
  try {
    loadImglandscapeTextData('./contents/fetch-page-jsons/classroom/art-craft-room.json', 'art-craft-room-div', 'classroom/art-craft-room');
    loadImglandscapeTextData('./contents/fetch-page-jsons/classroom/classroom.json', 'classroom-div', 'classroom/classroom');
    loadImglandscapeTextData('./contents/fetch-page-jsons/classroom/computer-robotics.json', 'computer-robotics-div', 'classroom/computer-robotics');
    loadImglandscapeTextData('./contents/fetch-page-jsons/classroom/dance-room.json', 'dance-room-div', 'classroom/dance-room');
    loadImglandscapeTextData('./contents/fetch-page-jsons/classroom/library-room.json', 'library-room-div', 'classroom/library-room');
    loadImglandscapeTextData('./contents/fetch-page-jsons/classroom/music.json', 'music-div', 'classroom/music');
    loadImglandscapeTextData('./contents/fetch-page-jsons/classroom/theme-room.json', 'theme-room-div', 'classroom/theme-room');
  } catch (error) {
    console.error('An error occurred while loaing All Classroom Page Data:', error);
  }
};

function loadAllLaboratoriesData() {
  try {
    loadImglandscapeTextData('./contents/fetch-page-jsons/laboratories/audio-visual-room.json', 'audio-visual-room-div', 'laboratories/audio-visual-room');
    loadImglandscapeTextData('./contents/fetch-page-jsons/laboratories/bio-lab.json', 'bio-lab-div', 'laboratories/bio-lab');
    loadImglandscapeTextData('./contents/fetch-page-jsons/laboratories/chemistry-lab.json', 'chemistry-lab-div', 'laboratories/chemistry-lab');
    loadImglandscapeTextData('./contents/fetch-page-jsons/laboratories/exploration-lab.json', 'exploration-lab-div', 'laboratories/exploration-lab');
    loadImglandscapeTextData('./contents/fetch-page-jsons/laboratories/math-lab.json', 'math-lab-div', 'laboratories/math-lab');
    loadImglandscapeTextData('./contents/fetch-page-jsons/laboratories/physics-lab.json', 'physics-lab-div', 'laboratories/physics-lab');
    loadImglandscapeTextData('./contents/fetch-page-jsons/laboratories/3d-printing.json', '3d-printing-div', 'laboratories/3d-printing');
  } catch (error) {
    console.error('An error occurred while loaing All Laboratories Page Data:', error);
  }
};

function loadAllOtherInrastructureData() {
  try {
    loadImglandscapeTextData('./contents/fetch-page-jsons/other-infrastructure/children-park.json', 'children-park-div', 'other-infrastructure/children-park');
    loadImglandscapeTextData('./contents/fetch-page-jsons/other-infrastructure/infirmary.json', 'infirmary-div', 'other-infrastructure/infirmary');
    loadImglandscapeTextData('./contents/fetch-page-jsons/other-infrastructure/library.json', 'library-div', 'other-infrastructure/library');
    loadImglandscapeTextData('./contents/fetch-page-jsons/other-infrastructure/prayer.json', 'prayer-div', 'other-infrastructure/prayer');
    loadImglandscapeTextData('./contents/fetch-page-jsons/other-infrastructure/reception.json', 'reception-div', 'other-infrastructure/reception');
    loadImglandscapeTextData('./contents/fetch-page-jsons/other-infrastructure/break-time.json', 'break-time-div', 'other-infrastructure/break-time');
    loadImglandscapeTextData('./contents/fetch-page-jsons/other-infrastructure/yoga.json', 'yoga-div', 'other-infrastructure/yoga');
  } catch (error) {
    console.error('An error occurred while loaing All Laboratories Page Data:', error);
  }
};