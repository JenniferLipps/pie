const pies = [
  {
    name: 'Dutch Apple pie',
    ingredients: 'apples,sugar,butter,nutmeg,dutch people',
    bakeTemp: 5000,
    drinkPairing: 'Earl Grey',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCuJt3kkFdDZEyFZq_CAF-Rk219Z9tPoeZDAFianie4tNFXcW',
    instructor: 'Zoe',
    iceCream: 'Vanilla'
  },
  {
    name: 'Berry pie',
    ingredients: 'berries',
    bakeTemp: 5000,
    drinkPairing: 'wine',
    imageUrl: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps600_PSG143429D03_05_1bC_RMS.jpg',
    instructor: 'Zoe',
    iceCream: 'banana'
  },
  {
    name: 'Chess pie'
  },
  {
    name: 'Banana Cream pie'
  },
  {
    name: 'Peach pie'
  }
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const pieNames = () => {
  let domString = '';
//   for (let i = 0; i < pies.length; i++) {
//     domString += `<p>${pies[i].name}`
//   };
  pies.forEach((pie) => {
    domString += `<h2>${pie.name}</h2>`;
  })
  printToDom('pieNames', domString);
};

const init = () => {
    pieNames();
};

init();