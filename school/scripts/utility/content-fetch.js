export { loadNavMarquee, loadHomeNotice, loadAllFacultyData, loadAdministrativeTeamData, loadSportsDivData, loadCampusDivData, loadAllClassroomData, loadAllLaboratoriesData, loadAllOtherInrastructureData, loadBooklists, loadEMagazineData, loadNewsMediaData, loadExcursionData, loadEventsData, loadVideoGallerytData, loadTeachersTrainingData, loadCircularsImgPdfData, loadTransportData, loadAllAwardsAccolades, loadAnnualReportImgPdfData, loadYearPlannerData, loadCBSEMandatoryDisclosures };

async function loadNavMarquee() {
  const jsonURL = './contents/fetch-page-jsons/home/nav-marquee.json';
  const displayDiv = document.getElementById('topNavMarquee');

  await fetch(jsonURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayDiv.innerHTML = data.map(item => `
      <marquee class="flex bg-blue-500 text-white text-sm md:text-base" behavior="scroll" scrollamount="4" direction="left" onmouseover="this.stop()" onmouseleave="this.start()">
      <span class="uppercase font-[500]">${item.marqueeHead}</span> ${item.marqueeTxt}
      <a class="underline underline-offset-2" href="${item.linkURL}">${item.linkTxt}</a> for more details
    </marquee>
    
      `).join('');
    })
    .catch(error => {
      console.error('An error occurred while fetching the marquee notice:', error);
    });
};

async function loadHomeNotice(applySlice = true) {
  const jsonURL = './contents/fetch-page-jsons/home/circulars.json';
  const displayDiv = document.getElementById('home-notice');

  await fetch(jsonURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      //if stament to check if the slice is true/false and slice should be applied or not
      applySlice && (data = data.slice(0, 10));
      displayDiv.innerHTML = data.map(item => `
        <li class="group flex items-center justify-between gap-2 bg-white p-2 rounded-md shadow text-blue-500 hover:text-blue-600">
          <a href="./contents/docs/circulars/${item.fileName}" target="_blank">
          ${item.noticeTitle}
          </a>
          <span class="hidden xl:flex xl:opacity-0 bg-blue-500 text-white px-1.5 py-0.5 rounded-t-lg xl:group-hover:opacity-100 text-sm font-normal transition-all ease-in">
            ${item.uploadDate}
          </span>
          <a href="./contents/docs/circulars/${item.fileName}" download="${item.noticeTitle} ${item.fileName}">
            <button class="text-2xl p-1.5 md:p-2 rounded-md flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white active:scale-90 shadow-md transition-all ease-in">
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


async function loadFacultyAdministrativeData(jsonURL, displayDivId, imageFolder) {
  const displayDiv = document.getElementById(displayDivId);
  await fetch(jsonURL)
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
            <img src="./contents/images/fetch-page-imgs/${imageFolder}/${item.imgFileName}" alt="${item.facultyName}" loading="lazy" class="aspect-[3/4] h-[22rem] rounded-md">
            <span class="absolute bottom-0 md:translate-y-20 md:group-hover:translate-y-0 w-full bg-black/25 flex flex-col p-2 text-white drop-shadow transition-all ease-in">
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

async function loadAllFacultyData() {
  try {
    await loadFacultyAdministrativeData('./contents/fetch-page-jsons/faculty/principal.json', 'principal-div', 'faculty/principal');
    await loadFacultyAdministrativeData('./contents/fetch-page-jsons/faculty/headmistresses.json', 'headmistresses-div', 'faculty/headmistresses');
    await loadFacultyAdministrativeData('./contents/fetch-page-jsons/faculty/coordinators.json', 'coordinators-div', 'faculty/coordinators');
    await loadFacultyAdministrativeData('./contents/fetch-page-jsons/faculty/extra-curricular-activity-coordinators.json', 'extra-curricular-activity-coordinators-div', 'faculty/extra-curricular-activity-coordinators');
    await loadFacultyAdministrativeData('./contents/fetch-page-jsons/faculty/hod.json', 'hod-div', 'faculty/hod');
    await loadFacultyAdministrativeData('./contents/fetch-page-jsons/faculty/pre-primary-faculty.json', 'pre-primary-faculty-div', 'faculty/pre-primary-faculty');
    await loadFacultyAdministrativeData('./contents/fetch-page-jsons/faculty/middle-school-faculty.json', 'middle-school-faculty-div', 'faculty/middle-school-faculty');
    await loadFacultyAdministrativeData('./contents/fetch-page-jsons/faculty/senior-school-faculty.json', 'senior-school-faculty-div', 'faculty/senior-school-faculty');
  } catch (error) {
    console.error('An error occurred while fetching All Faculty Page Data:', error);
  }
};

async function loadAdministrativeTeamData() {
  try {
    await loadFacultyAdministrativeData('./contents/fetch-page-jsons/administrative-team.json', 'administrative-team-div', 'administrative');
  } catch (error) {
    console.error('An error occurred while fetching Administrative Team Data:', error);
  }
};

async function loadImglandscapeTextData(jsonURL, displayDivId, imageFolder) {
  const displayDiv = document.getElementById(displayDivId);
  await fetch(jsonURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      data.forEach( item => {
        displayDiv.innerHTML += `
          <div class="relative group overflow-hidden rounded-md">
            <img src="./contents/images/fetch-page-imgs/${imageFolder}/${item.imgFileName}" alt="${item.eventName || item.imgLocation || item.newsTitleSummary}" loading="lazy" class="aspect-[4/3] w-[22.5rem] rounded-md">
            <span class="absolute bottom-0 md:translate-y-16 md:group-hover:translate-y-0 w-full bg-black/25 flex flex-col p-2 text-white drop-shadow-md transition-all ease-in">
              <span class="font-semibold flex">${item.eventName || item.imgLocation || item.newsTitleSummary || item.awardTitle || item.accoladeTitle}</span>
              <span class="text-sm flex">${item.eventYear || item.imgComment || item.newsPaperNameDate}</span>
            </span>
          </div>
        `;
      });
    })
    .catch(error => {
      console.error('An error occurred while fetching 4/3 ration images with texts :', error);
    });
};

async function loadSportsDivData() {
  try {
    await loadImglandscapeTextData('./contents/fetch-page-jsons/sports.json', 'sports-div', 'sports');

  } catch (error) {
    console.error('An error occurred while loading Sports Data:', error);
  }
};

async function loadCampusDivData() {
  try {
    await loadImglandscapeTextData('./contents/fetch-page-jsons/campus.json', 'campus-div', 'campus');

  } catch (error) {
    console.error('An error occurred while loading Campus Data:', error);
  }
};

async function loadAllClassroomData() {
  try {
    await loadImglandscapeTextData('./contents/fetch-page-jsons/classroom/art-craft-room.json', 'art-craft-room-div', 'classroom/art-craft-room');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/classroom/classroom.json', 'classroom-div', 'classroom/classroom');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/classroom/computer-robotics.json', 'computer-robotics-div', 'classroom/computer-robotics');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/classroom/dance-room.json', 'dance-room-div', 'classroom/dance-room');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/classroom/library-room.json', 'library-room-div', 'classroom/library-room');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/classroom/music.json', 'music-div', 'classroom/music');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/classroom/theme-room.json', 'theme-room-div', 'classroom/theme-room');
  } catch (error) {
    console.error('An error occurred while loaing All Classroom Page Data:', error);
  }
};

async function loadAllLaboratoriesData() {
  try {
    await loadImglandscapeTextData('./contents/fetch-page-jsons/laboratories/audio-visual-room.json', 'audio-visual-room-div', 'laboratories/audio-visual-room');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/laboratories/bio-lab.json', 'bio-lab-div', 'laboratories/bio-lab');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/laboratories/chemistry-lab.json', 'chemistry-lab-div', 'laboratories/chemistry-lab');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/laboratories/exploration-lab.json', 'exploration-lab-div', 'laboratories/exploration-lab');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/laboratories/math-lab.json', 'math-lab-div', 'laboratories/math-lab');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/laboratories/physics-lab.json', 'physics-lab-div', 'laboratories/physics-lab');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/laboratories/3d-printing.json', '3d-printing-div', 'laboratories/3d-printing');
  } catch (error) {
    console.error('An error occurred while loaing All Laboratories Page Data:', error);
  }
};

async function loadAllOtherInrastructureData() {
  try {
    await loadImglandscapeTextData('./contents/fetch-page-jsons/other-infrastructure/children-park.json', 'children-park-div', 'other-infrastructure/children-park');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/other-infrastructure/infirmary.json', 'infirmary-div', 'other-infrastructure/infirmary');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/other-infrastructure/library.json', 'library-div', 'other-infrastructure/library');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/other-infrastructure/prayer.json', 'prayer-div', 'other-infrastructure/prayer');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/other-infrastructure/reception.json', 'reception-div', 'other-infrastructure/reception');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/other-infrastructure/break-time.json', 'break-time-div', 'other-infrastructure/break-time');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/other-infrastructure/yoga.json', 'yoga-div', 'other-infrastructure/yoga');
  } catch (error) {
    console.error('An error occurred while loaing All Laboratories Page Data:', error);
  }
};

async function loadNewsMediaData() {
  try {
    await loadImglandscapeTextData('./contents/fetch-page-jsons/news-media.json', 'news-media-div', 'news-media');

  } catch (error) {
    console.error('An error occurred while loading News & Media Data:', error);
  }
};

async function loadExcursionData() {
  try {
    await loadImglandscapeTextData('./contents/fetch-page-jsons/excursion.json', 'excursion-div', 'excursion');

  } catch (error) {
    console.error('An error occurred while loading News & Media Data:', error);
  }
};

async function loadEventsData() {
  try {
    await loadImglandscapeTextData('./contents/fetch-page-jsons/events.json', 'events-div', 'events');

  } catch (error) {
    console.error('An error occurred while loading News & Media Data:', error);
  }
};

async function loadAllAwardsAccolades() {
  try {
    await loadImglandscapeTextData('./contents/fetch-page-jsons/awards-accolades/awards.json', 'awards-div', 'awards-accolades/awards');
    await loadImglandscapeTextData('./contents/fetch-page-jsons/awards-accolades/accolades.json', 'accolades-div', 'awards-accolades/accolades');
  } catch (error) {
    console.error('An error occurred while loaing All Awards and Accolades Page Data:', error);
  }
};

async function loadBooklists() {
  const jsonURL = './contents/fetch-page-jsons/booklists.json';
  const displayDiv = document.getElementById('booklists-div');

  await fetch(jsonURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayDiv.innerHTML = data.map(item => `
        <li class="group flex flex-col items-center justify-between gap-4 bg-white p-4 rounded-md shadow text-blue-500 hover:text-blue-600">
          <a href="./contents/docs/booklists/${item.fileName}" target="_blank">
          ${item.className}
          </a>
          <a href="./contents/docs/booklists/${item.fileName}" download="${item.className} ${item.fileName}">
            <button class="font-normal py-2 px-4 rounded-md flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white active:scale-90 shadow-md transition-all ease-in">
            Download <i class="fa-solid fa-cloud-arrow-down text-2xl"></i>
            </button>
          </a>
        </li>
      `).join('');
    })
    .catch(error => {
      console.error('An error occurred while fetching the booklists:', error);
    });
};

async function loadEMagazineData() {
  const jsonURL = './contents/fetch-page-jsons/e-magazine.json';
  const displayDiv = document.getElementById('e-magazine-div');

  await fetch(jsonURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayDiv.innerHTML = data.map(item => `
        <li class="group flex flex-col items-center justify-between gap-4 bg-white p-4 rounded-md shadow text-blue-500 hover:text-blue-600">
          <a href="./contents/docs/e-magazine/${item.fileName}" target="_blank">
          ${item.eMagazineName}
          </a>
          <a href="./contents/docs/e-magazine/${item.fileName}" download="${item.eMagazineName} ${item.fileName}">
            <button class="font-normal py-2 px-4 rounded-md flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white active:scale-90 shadow-md transition-all ease-in">
              Download <i class="fa-solid fa-cloud-arrow-down text-2xl"></i>
            </button>
          </a>
        </li>
      `).join('');
    })
    .catch(error => {
      console.error('An error occurred while fetching the booklists:', error);
    });
};

async function loadVideoGallerytData() {
  const jsonURL = './contents/fetch-page-jsons/video-gallery.json';
  const displayDiv = document.getElementById('video-gallery-div');
  await fetch(jsonURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      data.forEach( item => {
        displayDiv.innerHTML += `
          <div class="group rounded overflow-hidden">
            <iframe src="${item.videoURL}" title="TIS Video Gallery Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="aspect-video w-[22.5rem]"></iframe>
            <p class="w-full bg-white md:bg-white/50 md:group-hover:bg-white p-2 text-center rounded-b-lg">
              ${item.eventNameCommentDate}
            </p>
          </div>
        `;
      });
    })
    .catch(error => {
      console.error('An error occurred while fetchingdata to load Youtube Videos:', error);
    });
};

async function loadCircleImgTextData(jsonURL, displayDivId, imageFolder) {
  const displayDiv = document.getElementById(displayDivId);
  await fetch(jsonURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      data.forEach( item => {
        displayDiv.innerHTML += `
        <div class="flex flex-col lg:flex-row items-center justify-center gap-2 bg-white md:bg-white/50 md:hover:bg-white p-2 rounded transition-all ease-in">
        <img src="./contents/images/fetch-page-imgs/teachers-training/${imageFolder}/${item.eventImgLogo}" alt="${item.title}" loading="lazy" class="aspect-square h-24 rounded-full">
        <div class="flex flex-col items-start justify-center text-start w-full">
          <div class="uppercase font-semibold">${item.title}</div>
          <div><span class="font-semibold">Conducted By:</span> ${item.conductedBy}</div>
          <div><span class="font-semibold">Attended By:</span> ${item.attendedBy}</div>
          <div><span class="font-semibold">Venue:</span> ${item.venue}</div>
          <div class="w-full text-end">${item.date}</div>
        </div>
      </div>
        `;
      });
    })
    .catch(error => {
      console.error('An error occurred while fetching circle imgs with texts :', error);
    });
};

async function loadTeachersTrainingData() {
  try {
    await loadCircleImgTextData('./contents/fetch-page-jsons/teachers-training/teachers-enrichment-programmes.json', 'teachers-enrichment-programmes-div', 'teachers-enrichment-programmes');
    await loadCircleImgTextData('./contents/fetch-page-jsons/teachers-training/tis-hrd-academic-programmes.json', 'tis-hrd-academic-programmes-div', 'tis-hrd-academic-programmes');

  } catch (error) {
    console.error('An error occurred while loading Teachers Training Data:', error);
  }
};

async function loadCircularsImgPdfData() {
  const jsonURL = './contents/fetch-page-jsons/home/circulars.json';
  const displayDiv = document.getElementById('circulars-div');
  await fetch(jsonURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      data.forEach( item => {
        displayDiv.innerHTML += `
          <div class="rounded-md flex flex-col items-center justify-center gap-2 bg-white">
            <img src="./contents/images/fetch-page-imgs/circulars/${item.fileName.slice(0, -3)}png" alt="${item.noticeTitle}" loading="lazy" class="aspect-[3/4] w-[22.5rem]">
            <li class="group flex flex-col items-center justify-between p-2 gap-2 bg-blue-400/5 w-full rounded-b-md text-blue-500 hover:text-blue-600">
            <a href="./contents/docs/circulars/${item.fileName}" target="_blank" class="font-semibold">
            ${item.noticeTitle}
            </a>
            <a href="./contents/docs/circulars/${item.fileName}" download="${item.noticeTitle} ${item.fileName}">
              <button class="font-normal py-2 px-4 rounded-md flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white active:scale-90 shadow transition-all ease-in">
                Download <i class="fa-solid fa-cloud-arrow-down text-2xl"></i>
              </button>
            </a>
          </li>
          </div>
        `;
      });
    })
    .catch(error => {
      console.error('An error occurred while fetching 3/4 ration images and pdf of circulars of main circulas page:', error);
    });
};

async function loadTransportData() {
  const jsonURL = './contents/fetch-page-jsons/transport.json';
  const displayDiv = document.getElementById('transport-div');

  await fetch(jsonURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayDiv.innerHTML = data.map(item => `
        <li class="group flex flex-col items-center justify-between gap-4 bg-white p-4 rounded-md shadow text-blue-500 hover:text-blue-600">
          <a class="uppercase" href="./contents/docs/transport/${item.fileName}" target="_blank">
          ${item.title}
          </a>
          <a href="./contents/docs/transport/${item.fileName}" download="${item.title} ${item.fileName}">
            <button class="font-normal py-2 px-4 rounded-md flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white active:scale-90 shadow-md transition-all ease-in">
              Download <i class="fa-solid fa-cloud-arrow-down text-2xl"></i>
            </button>
          </a>
        </li>
      `).join('');
    })
    .catch(error => {
      console.error('An error occurred while fetching the booklists:', error);
    });
};

async function loadAnnualReportImgPdfData() {
  const jsonURL = './contents/fetch-page-jsons/annual-report.json';
  const displayDiv = document.getElementById('annual-report-div');
  await fetch(jsonURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      data.forEach( item => {
        displayDiv.innerHTML += `
          <div class="rounded-md flex flex-col items-center justify-center gap-2 bg-white">
            <img src="./contents/images/fetch-page-imgs/annual-report/${item.fileName.slice(0, -3)}png" alt="${item.title}" loading="lazy" class="aspect-[4/3] w-[22.5rem]">
            <li class="group flex flex-col items-center justify-between p-2 gap-2 bg-blue-400/5 w-full rounded-b-md text-blue-500 hover:text-blue-600">
            <a href="./contents/docs/annual-report/${item.fileName}" target="_blank" class="font-semibold">
            ${item.title}
            </a>
            <a href="./contents/docs/annual-report/${item.fileName}" download="${item.title} ${item.fileName}">
              <button class="font-normal py-2 px-4 rounded-md flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white active:scale-90 shadow transition-all ease-in">
                Download <i class="fa-solid fa-cloud-arrow-down text-2xl"></i>
              </button>
            </a>
          </li>
          </div>
        `;
      });
    })
    .catch(error => {
      console.error('An error occurred while fetching 4/3 ration images and pdf of annual report page', error);
    });
};

async function loadYearPlannerData() {
  const jsonURL = './contents/fetch-page-jsons/year-planner.json';
  const displayDiv = document.getElementById('year-planner-div');

  await fetch(jsonURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayDiv.innerHTML = data.map(item => ` 
        <li class="group flex flex-col items-center justify-between gap-4 bg-white p-4 rounded-md shadow text-blue-500 hover:text-blue-600">
          <a href="./contents/docs/year-planner/${item.fileName}" target="_blank">
          ${item.title}
          </a>
          <a href="./contents/docs/year-planner/${item.fileName}" download="${item.title} ${item.fileName}">
            <button class="font-normal py-2 px-4 rounded-md flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white active:scale-90 shadow-md transition-all ease-in">
              Download <i class="fa-solid fa-cloud-arrow-down text-2xl"></i>
            </button>
          </a>
        </li>
      `).join('');
    })
    .catch(error => {
      console.error('An error occurred while fetching the booklists:', error);
    });
};

async function loadCBSEMandatoryDisclosures() {
  const jsonURL = './contents/fetch-page-jsons/cbse-mandatory-disclosures.json';
  const displayDiv = document.getElementById('cbse-mandatory-disclosures-div');

  await fetch(jsonURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayDiv.innerHTML = data.map(item => `
        <li class="group flex flex-col items-center justify-between gap-4 bg-white p-4 rounded-md shadow text-blue-500 hover:text-blue-600">
          <a href="./contents/docs/cbse-mandatory-disclosures/${item.fileName}" target="_blank">
          ${item.title}
          </a>
          <a href="./contents/docs/cbse-mandatory-disclosures/${item.fileName}" download="${item.title} ${item.fileName}">
            <button class="font-normal py-2 px-4 rounded-md flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white active:scale-90 shadow-md transition-all ease-in">
              Download <i class="fa-solid fa-cloud-arrow-down text-2xl"></i>
            </button>
          </a>
        </li>
      `).join('');
    })
    .catch(error => {
      console.error('An error occurred while fetching the booklists:', error);
    });
};