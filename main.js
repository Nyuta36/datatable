<<<<<<< HEAD
// Добавление строки в таблице
let tableContent = document.querySelector('.tbody');

function dataTable(array) {
    tableContent.innerHTML ='' 
    for (let i = 0; i < array.length; i++) {

        let row =
        `<tr>
            <td>${array[i].name}</td>
            <td>${array[i].username}</td>
            <td>${array[i].address.city}, ${array[i].address.street},<br> ${array[i].address.suite}</td>
            <td>${array[i].phone}</td>
            <td>${array[i].website}</td>
            <td>${array[i].company.name}</td>
        </tr>`
        tableContent.innerHTML += row

    } 
    sortPhoneColor(array);
} 

    // Открытие списка сортировки
const openListSort = document.getElementById('tableSort');
const listSort = document.querySelector('.tableSort-list');
openListSort.onclick = function () {
    listSort.classList.toggle('tableSort-list-open');
}
window.addEventListener('click', (event) => {
    if(event.target == listSort) {
    listSort.style.display='none';
    }
});
    
    // Сортировка по алфавиту при клике

let btnName = document.getElementById('sortUser');
let btnUserName = document.getElementById('sortUserName');  

function sortUsers(arr, key, dir = false) {
    let result = arr.sort(function(a,b){
        if (a[key] < b[key]) return -1;
    });
    return result
} 


    // Сортировка по номеру телефона, по цвету
function sortPhoneColor(arr) {
    let tableLine = document.querySelectorAll('tbody>tr');
    console.log(tableLine);
    for (let k = 0; k < arr.length; k++){
        let userPhone = arr[k].phone.match(/\d+/g).join('');
        console.log (userPhone);
        if (Number(userPhone[0]) === 1) {
            tableLine[k].style.background = 'rgb(124, 223, 124)';
            tableLine[k].cells[3].style.background = 'rgb(36, 136, 56)';
        } else if (Number(userPhone[0]) === 2) {
            tableLine[k].style.background = 'rgb(243, 232, 120)';
            tableLine[k].cells[3].style.background = 'rgb(220, 156, 46)';
        } else if (Number(userPhone[0]) === 5) {
            tableLine[k].style.background = 'rgb(228, 128, 105)';
            tableLine[k].cells[3].style.background = 'rgb(220, 56, 35)';
        } 
    }
}

    // функция поиска имени и никнейма и добавление в новый массив  по user username 
const filterUser = document.getElementById('filterUser');
const filterUserName = document.getElementById('filterUsername');


function searchTable(value, data) {
    let filteredData = []

    for (let i = 0; i < data.length; i++) {
        let name = data[i].name.toLowerCase()
        let username = data[i].username.toLowerCase()

        if (name.includes(value)) {
            filteredData.push(data[i])
        } else if (username.includes(value)) {
            filteredData.push(data[i])
        }
    }
    return filteredData;
}  


    // JSON данные    
let requestURL = "https://jsonplaceholder.typicode.com/users";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {

    let content = request.response;
    
    dataTable(content);
    // сортировка по алфавиту
    btnName.onclick = function() {
        tableContent.textContent='';
        sortUsers(content, 'name');
        dataTable(content);
    };
    btnUserName.onclick = function () {
        tableContent.textContent='';
        sortUsers(content, 'username');
        dataTable(content);
    };

    // фильтр по имени 
    filterUser.addEventListener('keyup',function() {
        let value = filterUser.value;
        let data = searchTable(value, content)
        tableContent.textContent = '';
        dataTable(data)
        sortPhoneColor(data)
        if (value === ''){
            dataTable(content);
            sortPhoneColor(content);
        }
    });

    filterUserName.addEventListener('keyup',function() {
        let value = filterUserName.value;
        let data = searchTable(value, content)
        tableContent.textContent = '';
        dataTable(data)
        sortPhoneColor(data)
        if (value === ''){
            dataTable(content);
            sortPhoneColor(content);
        }
    });
};



=======
// Json данные

async function getResponse() {

    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let content = await response.json()
    console.log(content);

    let tableContent = document.querySelector('.tbody');
    
    // вывод таблицы с данными
    function dataTable(array) {
        tableContent.innerHTML ='' 
        for (let i = 0; i < array.length; i++) {

            let row =
            `<tr>
                <td>${array[i].name}</td>
                <td>${array[i].username}</td>
                <td>${array[i].address.city}, ${array[i].address.street},<br> ${array[i].address.suite}</td>
                <td>${array[i].phone}</td>
                <td>${array[i].website}</td>
                <td>${array[i].company.name}</td>
            </tr>`
            tableContent.innerHTML += row
            
        } 
        sortPhoneColor(array)
    } 

    dataTable(content)

    
    
    // Сортировка по алфавиту при клике
    function sortUsers(arr, key, dir = false) {
        let result = arr.sort(function(a,b){
            if (a[key] < b[key]) return -1;
        });
        return result
    } 
    let btnName = document.getElementById('sortUser');
    let btnUserName = document.getElementById('sortUserName');

    btnName.onclick = function() {
        tableContent.textContent='';
        sortUsers(content,'name');
        dataTable(content);
    }
    btnUserName.onclick = function() {
        tableContent.textContent='';
        sortUsers(content,'username');
        dataTable(content);
    }


    // сортировка по номеру телефона, по цвету
    function sortPhoneColor(arr) { 
    let tableLine = document.querySelectorAll('tbody>tr');
    console.log(tableLine);

        for (let k = 0; k < arr.length; k++){
            let userPhone = arr[k].phone.match(/\d+/g).join('');
            console.log (userPhone);
            if (Number(userPhone[0]) === 1) {
                tableLine[k].setAttribute('style', 'background-color: rgb(124, 223, 124);');
                tableLine[k].cells[3].setAttribute('style', 'background-color: rgb(36, 136, 56);');
            } else if (Number(userPhone[0]) === 2) {
                tableLine[k].style.background = 'rgb(243, 232, 120)';
                tableLine[k].cells[3].style.background = 'rgb(220, 156, 46)';
            } else if (Number(userPhone[0]) === 5) {
                tableLine[k].style.background = 'rgb(228, 128, 105)';
                tableLine[k].cells[3].style.background = 'rgb(220, 56, 35)';
            } 
        }
    }

    // Фильтрация по user username
    const filterUser = document.getElementById('filterUser');
    const filterUserName = document.getElementById('filterUsername');
    
    filterUser.addEventListener('keyup', function() {
        let value = filterUser.value;
        console.log('Value:', value)
        let data = searchTable(value, content)
        tableContent.textContent = '';
        dataTable(data)
        sortPhoneColor(data)
        if (value === ''){
            dataTable(content);
            sortPhoneColor(content);
        }
    })

        
    filterUserName.addEventListener('keyup', function() {
        let value = filterUserName.value;
        console.log('Value:', value)
        let data = searchTable(value, content)
        tableContent.textContent = '';
        dataTable(data)
        sortPhoneColor(data)
        if (value === ''){
            dataTable(content);
            sortPhoneColor(content);
        }
    })

    

    // функция поиска имени и никнейма и добавление в новый массив
    function searchTable(value, data) {
        var filteredData = []

        for (var i = 0; i < data.length; i++) {
            
            var name = data[i].name.toLowerCase()
            var username = data[i].username.toLowerCase()

            if (name.includes(value)) {
                filteredData.push(data[i])
                
            }   
            if (username.includes(value)) {
                filteredData.push(data[i])
            }  
            
        }
        
        return filteredData
    }    

}

getResponse()

// открытие списка сортировки
const openListSort = document.getElementById('tableSort');
const listSort = document.querySelector('.tableSort-list');
openListSort.onclick = function () {
    listSort.classList.toggle('tableSort-list-open');
}
window.addEventListener('click', (event) => {
    if(event.target == listSort) {
    listSort.style.display='none';
    }
});
>>>>>>> 812e24a3a26876182adf4088a68c1c6ebdc94380
