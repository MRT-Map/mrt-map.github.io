//List of contributers to display on the main page
const contributors = [
  {
    name: 'megascatterbomb',
    uuid: 'b84ff899e86a4b0f8fc56bca7ec4dae9',
    role: 'QA'
  },
  {
    name: 'AirplaneNiner',
    uuid: '5c7858c110d141558624cae2c26571b8',
    role: 'Project Organiser'
  },
  {
    name: 'Scarycrumb45',
    uuid: '099c486c0fbe4e36bd7e49b77ab74924',
    role: 'Design / Development'
  },
  {
    name: 'CodyHM',
    uuid: '02625b8cb2a549998756855831976411',
    role: 'Design'
  },
  {
    name: 'i____7d',
    uuid: '7e96f1a3d9be4ca8a2aca67f49c6095e',
    role: 'Development'
  },
  {
    name: 'DintyB',
    uuid: '472715f5e298428c961f9b60dbe9dbad',
    role: 'Development'
  },
  {
    name: 'CaptainObi',
    uuid: '941f78f810024255912b397182ec62aa',
    role: 'Development'
  },
  {
    name: 'AP_Red',
    uuid: '6f4821b019964f3ba776ce0cdc8e7276',
    role: 'Development'
  }
]


//https://github.com/Daplie/knuth-shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
