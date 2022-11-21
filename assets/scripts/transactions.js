const _addButton = document.querySelector('#addButton');
const _addInput = document.querySelector('input');
const _mainTransactionCards = document.querySelector('.mainTransactionCards');
const _leftTransactionCards = document.querySelector('.leftTransactionCards');
const _left = document.querySelector('.left')
const _right = document.querySelector('.right')
const _navButton = document.querySelector('.navButton')

let copied = [];
let copies = [];

(async () => {
  const rawResponse = await fetch('https://trustpaddi-waitlist.herokuapp.com/copy/getAllCopies', {
    method: 'POST',
    body: 200
  });
  const content = await rawResponse.json();
  copies.push(...content?.copies)

  updateCopies(content?.copies)

  let listItemButtonCopy = document.querySelectorAll('.listItemButtonCopy');

  listItemButtonCopy.forEach(button => {
    button.addEventListener('click', async function () {
      let copy = this.parentNode.parentNode
      const addCopyData = copy.querySelector('#addCopyData').innerText

      addToCopiedArray(JSON.parse(addCopyData))

      this.style.backgroundColor = '#04c404'
      this.style.boxShadow = '0 10px 20px -10px #04c404'
      this.innerText = 'Copied'
    })
  })
})();

const addToCopiedArray = (object) => {
  copied = []
  copied.push(object)
  updateCopied(copied)
};

const updateCopies = (copies) =>
  copies.forEach(item => {
    _mainTransactionCards.innerHTML += `<div class="listItem copiesList">
                                          <div id="addCopyData" style="display: none">${JSON.stringify(item)}</div>
                                          <div class="listItemLeft">
                                            <img src="${item.image}" alt="${item.name}">
                                            <div class="infoView">
                                              <span>${item.name.slice(0, 10)}</span>
                                              <span>${item.wins} wins - ${item.losses} losses</span>
                                              <span>${item.rate}% Rate</span>
                                            </div>
                                          </div>
                                          <div class="listItemButtonContainer">
                                            <button class="listItemButton listItemButtonCopy"> Copy </button>
                                          </div>
                                        </div>`
  });


const updateCopied = (copied) =>
  copied.forEach(item => {
    _leftTransactionCards.innerHTML += `<div class="listItem leftSideListItem">
                                          <div id="addCopyData" style="display: none">${JSON.stringify(item)}</div>
                                          <div class="listItemLeft">
                                            <img src="${item.image}" alt="${item.name}">
                                            <div class="infoView">
                                              <span>${item.name.slice(0, 10)}</span>
                                              <span>${item.wins} wins - ${item.losses} losses</span>
                                              <span>${item.rate}% Rate</span>
                                            </div>
                                          </div>
                                          <div class="listItemButtonContainer">
                                            <button class="listItemButton listItemButtonDelete"> Delete </button>
                                          </div>
                                        </div>`
  });


_addButton.addEventListener('click', () => {
  if (_addInput.value == '') return

  let newCopy = [...copies]
  copies = []
  const randomTrader = newCopy[Math.floor(Math.random() * newCopy.length)]
  randomTrader.name = _addInput.value

  let copiesList = document.querySelectorAll('.copiesList');

  copiesList.forEach(element => element.remove())

  newCopy.unshift(randomTrader)
  updateCopies(newCopy)
  copies = [...newCopy]
});


// toggle sides
_navButton.addEventListener('click', () => {
  if (!_right.classList.contains('hide')) {
    _right.classList.add('hide')
    _left.style.display = 'flex'
  } else {
    _left.style.display = 'none'
    _right.classList.remove('hide')
  }
})

// reset display
window.addEventListener('resize', e => {
  if (window.innerWidth >= 768) {
    _right.classList.remove('hide')
    _left.style.display = 'flex'
  } else {
    _left.style.display = 'none'
  }
})