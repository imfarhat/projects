function updateSelect() {
  let selectValue = document.getElementById('user-l-option').value;
  document.getElementById(`js-data-btn`).innerHTML = `Load ${selectValue} User's Data`;
  return `content/${selectValue}users.json`;
}

function pleaseWait(usersLimit) {
  document.getElementById("data-load-area-error").innerHTML = ``;
  document.getElementById("data-load-area").innerHTML = `Please wait... ${usersLimit} 
  User's Data Loading...`;
  document.getElementById(`js-data-btn`).innerHTML = `${usersLimit} 
  User's Data Loading...`;
}

function pleaseWaitReset(usersLimit) {
  document.getElementById("data-load-area").innerHTML = ``;
  document.getElementById(`js-data-btn`).innerHTML = ``;
}

function loadData(usersLimit) {
  pleaseWait(usersLimit);
  fetch(updateSelect())
  .then((response) => response.json())
  .then((result) => {
    let dataLoadingElement = document.getElementById("data-load-area");
    let dataTable = ``;
    result.forEach(result => {
      dataTable += 
      `
      <tr>
        <td> ${result.id}</td>
        <td>${result.name.substring(0, 6)}</td>
        <td>${result.email.substring(4, 30)}</td>
        <td>${result.phone.substring(0, 9)}</td>
        <!-- <td>${result.website}</td>
        <td>${result.company.name}</td>
        <td>${result.company.catchPhrase}</td>
        <td>${result.company.bs}</td>
        <td>St.: ${result.address.street}, H. No.: ${result.address.suite}, ${result.address.city}, PIN: ${result.address.zipcode}</td>
        <td>Lat: ${result.address.geo.lat}, Long: ${result.address.geo.lng}</td> -->
      </tr>
      `;
    });
    dataLoadingElement.innerHTML = `
    <div class="print-container"><button class="print-btn"
    onclick="printData()"
    >
      Print
    </button></div>
    <h3>${usersLimit} User's Data &#x2713;:<h/3>
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <!-- <th>Website</th>
        <th>Company</th>
        <th>Tagline</th>
        <th>Sector</th>
        <th>Address</th>    
        <th>Location</th>  -->
      </tr>
      ${dataTable}
      </table>
      `;
      document.getElementById(`js-data-btn`).innerHTML = `${usersLimit} User's Data Loaded &#x2713;`;
      setTimeout(() => {
        updateSelect();
      }, 2000);
  })
.catch((error) => {
  document.getElementById("data-load-area-error").innerHTML =  `Sorry an error occured in Loading ${usersLimit} User's Data! Please try again later...<br>Specifically: ' ${error} '<br> Report <a href="https://farhateservices.github.io/fesa/contact.html#SendMessage" target="_blank">here</a><br>or<br>Email the issue on: <a href="mailto:imfarhat.dev@gmail.com" target="_blank">imfarhat.dev@gmail.com</a>`;
  pleaseWaitReset();
  updateSelect();
});
}
function printData() {
  print();
}
