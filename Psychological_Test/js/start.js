const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12; // 총 질문이 12개
const select = [];

function calResult(){
  var pointArray = [
    { name: 'warlord', value: 0, key: 0},
    { name: 'destroyer', value: 0, key: 1},
    { name: 'berserker', value: 0, key: 2},
    { name: 'holy_knight', value: 0, key: 3},
    { name: 'infighter', value: 0, key: 4},
    { name: 'battle_master', value: 0, key: 5},
    { name: 'soul_master', value: 0, key: 6},
    { name: 'lance_master', value: 0, key: 7},
    { name: 'striker', value: 0, key: 8},
    { name: 'devil_hunter', value: 0, key: 9},
    { name: 'blaster', value: 0, key: 10},
    { name: 'hawk_eye', value: 0, key: 11},
    { name: 'scouter', value: 0, key: 12},
    { name: 'gunslinger', value: 0, key: 13},
    { name: 'summoner', value: 0, key: 14},
    { name: 'bard', value: 0, key: 15},
    { name: 'arcana', value: 0, key: 16},
    { name: 'sorceress', value: 0, key: 17},
    { name: 'blade', value: 0, key: 18},
    { name: 'demonic', value: 0, key: 19},
    { name: 'reaper', value: 0, key: 20}
  ]

  for(let i = 0; i < endPoint; i++){
    var target = qnaList[i].a[select[i]];
    for(let j = 0; j < target.type.length; j++){
      for(let k = 0; k < pointArray.length; k++){
        if(target.type[j] === pointArray[k].name){
          pointArray[k].value += 1;
        }
      }
    }
  }
  var resultArray = pointArray.sort(function (a, b){
    if(a.value > b.value){
      return -1;
    }
    if(a.value < b.value){
      return 1;
    }
    return 0;
  });

  let resultword = resultArray[0].key;
  return resultword;
}

function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
      setTimeout(() => {
        qna.style.display = "none";
        result.style.display = "block";
      }, 450)})

      setResult();

  }

function addAnswer(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  a.appendChild(answer); //answer가 a에 종속되게 함
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      select[qIdx] = idx;
      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    }, 450)
  }, false);
}

function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar')
  status.style.width = (100/endPoint) * (qIdx + 1) + '%'; // 설문 진행에 따라 진행도를 보여줌
}

//화면 전환 부분
function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
      setTimeout(() => {
        main.style.display = "none";
        qna.style.display = "block";
      }, 450)
      let qIdx = 0;
      goNext(qIdx);
    }, 450)

  //main.style.display = "none";
  //qna.style.display = "block";
}
