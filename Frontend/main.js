let data;
const basicInfo = document.getElementById('basic-info');
const personalInfo = document.getElementById('personal-info');
const careerInfo = document.getElementById('career-info');
const formElement = document.querySelector('.form');
const previousDisplay = window.getComputedStyle(formElement).display;

const saveData = async (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const dob = e.target.dob.value;
  const imageUrl = e.target.imageUrl.value;
  const birthPlace = e.target.birthPlace.value;
  const career = e.target.career.value;
  const numberOfMatches = e.target.numberOfMatches.value;
  const score = e.target.score.value;
  const fifties = e.target.fifties.value;
  const centuries = e.target.centuries.value;
  const wickets = e.target.wickets.value;
  const average = e.target.average.value;
  data = {
    name: name,
    dob: dob,
    imageUrl: imageUrl,
    birthPlace: birthPlace,
    career: career,
    numberOfMatches: numberOfMatches,
    score: score,
    fifties: fifties,
    centuries: centuries,
    wickets: wickets,
    average: average,
  };
  await axios.post('http://localhost:3000/player-info', data);
  document.getElementById('name').value = '';
  document.getElementById('dob').value = '';
  document.getElementById('imageUrl').value = '';
  document.getElementById('birthPlace').value = '';
  document.getElementById('career').value = '';
  document.getElementById('numberOfMatches').value = '';
  document.getElementById('score').value = '';
  document.getElementById('fifties').value = '';
  document.getElementById('centuries').value = '';
  document.getElementById('wickets').value = '';
  document.getElementById('average').value = '';
};
function showData(players) {
  basicInfo.innerHTML = '';
  personalInfo.innerHTML = '';
  careerInfo.innerHTML = '';

  //edit
  const editBtn = document.createElement('button');
  editBtn.id = `editBtn`;
  editBtn.innerHTML = `Edit`;
  basicInfo.appendChild(editBtn);
  if (!players) {
    basicInfo.innerHTML = `<h1>Not found!</h1>`;
    basicInfo.removeChild(editBtn);
  }
  editBtn.onclick = () => {
    basicInfo.innerHTML = '';
    personalInfo.innerHTML = '';
    careerInfo.innerHTML = '';
    formElement.style.display = previousDisplay;
    document.getElementById('name').value = players.name;
    document.getElementById('dob').value = players.dob;
    document.getElementById('imageUrl').value = players.imageUrl;
    document.getElementById('birthPlace').value = players.birthPlace;
    document.getElementById('career').value = players.career;
    document.getElementById('numberOfMatches').value = players.numberOfMatches;
    document.getElementById('score').value = players.score;
    document.getElementById('fifties').value = players.fifties;
    document.getElementById('centuries').value = players.centuries;
    document.getElementById('wickets').value = players.wickets;
    document.getElementById('average').value = players.average;
    axios.delete(`http://localhost:3000/player-info/${players.id}`);
  };
  //img
  const img = document.createElement('img');
  img.src = players.imageUrl;
  img.style.display = `block`;
  basicInfo.appendChild(img);
  //basicInfo
  const li1 = document.createElement('li');
  li1.innerHTML = `<h3>Player Information</h3><br>${players.name}<br>${players.dob} <hr>`;
  basicInfo.appendChild(li1);
  //personalInfo
  const li2 = document.createElement('li');
  li2.innerHTML = `<h3>Personal Information</h3> <br>
  Birthplace:${players.birthPlace} <br>
  Number of Matches:${players.numberOfMatches} <br>
  Score:${players.score}<br>
  Fifties:${players.fifties}<br>
  Centuries:${players.centuries}<br>
  Wickets:${players.wickets}<br>
  Average:${players.average} <br>`;
  personalInfo.appendChild(li2);
  //careerInfo
  const p = document.createElement('p');
  p.innerHTML = `${players.career}`;
  careerInfo.appendChild(p);
}
function getData(e) {
  e.preventDefault();
  const playerName = e.target.playerName.value;
  const encodedPlayerName = encodeURIComponent(playerName);
  axios
    .get(`http://localhost:3000/player-info/${encodedPlayerName}`)
    .then((res) => {
      document.querySelector('.form').style.display = 'none';
      showData(res.data.playerDetails);
      document.getElementById('playerName').value = '';
    });
}
