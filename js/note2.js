const dateTop = document.querySelector('#date');

window.addEventListener('DOMContentLoaded', function() {
    setInterval(loadLocalDate, 1000)
})

function loadLocalDate() {
    var date = new Date();
    const months = ['January', 'February', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];
    dateTop.innerHTML = `${days[date.getDay()]}, ${date.getDate()} of ${months[date.getMonth()]}<br>${date.getHours() < 10 ? '0' : ''} ${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}:${date.getSeconds() < 10 ? '0' : ''}${date.getSeconds()}`
}

function addNewRow() {
    const mainElement = document.querySelector('.main');
    const row = document.querySelector('.row.hidden');
    const newRow = row.cloneNode(true);
    const inpText = document.querySelector('#noteText');
    const dltBtn = newRow.querySelector('#dltbtn');

    newRow.classList.remove('hidden');
    newRow.querySelector('p').innerHTML = inpText.value;
    mainElement.appendChild(newRow);

    newRow.querySelector("#dltbtn").addEventListener('click', function() {
        this.parentNode.remove();
    });

    newRow.querySelector('#inputCheckbox').addEventListener('click', function() {
        newRow.classList.toggle('strike-through')
    });
}

const addBtn = document.querySelector("#btn");
addBtn.addEventListener("click", function() {
    if( document.querySelector("#noteText").value !== "") {
        addNewRow();
        document.querySelector("#noteText").value = "";
    }
});

document.querySelector("#noteText").addEventListener("keypress", function(e) {
    if( e.key === "Enter" && document.querySelector("#noteText").value !== "") {
        addNewRow();
        document.querySelector("#noteText").value = "";
    }
});

  document.querySelector(".clearAll").addEventListener('click', function() {
    const mainElement = document.querySelector('.main');
    if (confirm("You are about to delete all notes, are you sure?")) {
        while (mainElement.firstChild) {
            mainElement.removeChild(mainElement.firstChild);
          }
    }
    
  });

const mainElement = document.querySelector(".main");
document.querySelector(".clearSlc").addEventListener('click', function()  {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        if (row.querySelector("#inputCheckbox").checked) {
            row.remove();
        }
    });
})