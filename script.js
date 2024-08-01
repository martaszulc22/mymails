const newMessage = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-2.jpg" />
    <div class="text-container">
      <h6>Marta Szulc</h6>
      <p>I 💙 coding!</p>
    </div>
    <span class="delete">✖</span>
  </div>
`;

document.querySelector('#msg-container').innerHTML += newMessage;

const messagesCount = document.querySelectorAll('p').length;
document.querySelector('#count').textContent = messagesCount;


const crossIcons = document.querySelectorAll('.delete');

for (let i = 0; i < crossIcons.length; i++) {
  crossIcons[i].addEventListener('click',
    function () {
      this.parentNode.remove();
      console.log('Click detected!');

      const messagesCount = document.querySelectorAll('p').length;
      document.querySelector('#count').textContent = messagesCount;
    }
  )
};

document.querySelector('#btn-add').addEventListener('click',
  function () {
    console.log('Click detected!')
    const message = document.getElementById('add-message').value;
    console.log(message);

    document.querySelector('#msg-container').innerHTML += `
    <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
    <h6>John Doe</h6>
    <p>${message}</p>
    </div>
    <span class="delete">✖</span>
      </div>
      `;
    document.querySelector('#add-message').value = "";

    const messagesCount = document.querySelectorAll('p').length;
    document.querySelector('#count').textContent = messagesCount;

    const crossIcons = document.querySelectorAll('.delete');

    for (let i = 0; i < crossIcons.length; i++) {
      crossIcons[i].addEventListener('click',
        function () {
          this.parentNode.remove();
          console.log('Click detected!');
          const messagesCount = document.querySelectorAll('p').length;
          document.querySelector('#count').textContent = messagesCount;
        }
      )
    };
  }
);

document.querySelector('#btn-search').addEventListener('click',
  function () {
    console.log('Click detected!')

    const textToCompare = document.querySelector('#search-message').value.toLowerCase();
    console.log(textToCompare);

    for (let i = 0; i < document.querySelectorAll('h6').length; i++) {
      if (document.querySelectorAll('h6')[i].textContent.toLowerCase().includes(textToCompare) === false) {
        const textToHide = document.querySelectorAll('h6')[i].parentNode.parentNode;
        textToHide.style.display = 'none';
        console.log('Hidden texts', textToHide);
      } else {
        const textToShow = document.querySelectorAll('h6')[i].parentNode.parentNode;
        textToShow.style.display = 'flex';
        console.log('Shown text', textToShow);
      }
    }
    document.querySelector('#search-message').value = "";
  }
);

let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

const date = year + "-" + month + "-" + day;
document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>`;