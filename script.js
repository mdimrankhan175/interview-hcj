document.addEventListener('DOMContentLoaded', function() {
    // Create a container element
    var container = document.createElement('div');
    
    // Set attributes and styles for the container
    container.id = 'dynamic-container';
    container.style.padding = '20px';
    container.style.backgroundColor = '#f0f0f0';
    container.style.marginTop = '20px';
    
    // Create a heading for the container
    var heading = document.createElement('h2');
    heading.textContent = 'JavaScript Topics Covered in script.js';
    
    // Create an unordered list for the topics
    var topicsList = document.createElement('ul');
    var topics = [
        'Variables and Data Types',
        'Outputting to console',
        'Functions',
        'Control Structures (if statements, loops)',
        'DOM Manipulation (changing text content, creating elements, event handling)',
        'Events (mousemove event)',
        'Error Handling (try...catch)',
        'Local Storage (setting and getting data)',
        'JSON (parsing JSON strings)'
    ];
    
    // Populate the list with topics
    topics.forEach(function(topic) {
        var listItem = document.createElement('li');
        listItem.textContent = topic;
        topicsList.appendChild(listItem);
    });
    
    // Append the heading and list to the container
    container.appendChild(heading);
    container.appendChild(topicsList);
    
    // Append the container to the main section of the webpage
    var mainSection = document.querySelector('main');
    mainSection.appendChild(container);
});


function reverseString(){
 let inputString=document.getElementById('inputString').value;
 let reversedString=inputString.split('').reverse().join('');
 document.getElementById('reversedString').textContent=reversedString;   
}

function isPalindrome(){
    let inputString=document.getElementById('inputString').value;
    let reversedString=inputString.split('').reverse().join('');
    
    document.getElementById('isPalindrome').textContent=
    (inputString.toLowerCase()===reversedString.toLowerCase()) ? 'It is Palindrome' : 'It is Not a Palindrome'
}


function anagram(){
    let str1=document.getElementById('str1').value
    let str2=document.getElementById('str2').value

    function isAnagram(str1, str2){
        const sortedStr1=str1.toLowerCase().split('').sort().join('');
        const sortedStr2=str2.toLowerCase().split('').sort().join('');
        return sortedStr1===sortedStr2
    }

    let result=isAnagram(str1,str2)
    document.getElementById('anagram').textContent=result ? 'It is Anagram':'No it is Not Anagram'
}

function factorial(){
    let inputNumber=document.getElementById('inputNumber').value;
    let inputNum=parseInt(inputNumber)
    
    function facto(n){
        if (n===0 || n===1){
            return 1
        }
        return n*facto(n-1)
    }

    let result=facto(inputNum)
    document.getElementById('factorial').textContent=result
}

document.getElementById('generateBtn').addEventListener('click', generateArray);
document.getElementById('minBtn').addEventListener('click', showMin);
document.getElementById('maxBtn').addEventListener('click', showMax);

document.getElementById('sumBtn').addEventListener('click', showSum);
document.getElementById('sortBtn').addEventListener('click', sortArray);
document.getElementById('mapBtn').addEventListener('click', applyMap);
document.getElementById('filterBtn').addEventListener('click', applyFilter);
document.getElementById('reduceBtn').addEventListener('click', applyReduce);


let numbersArray = [];

function generateArray() {
    numbersArray = [];
    for (let i = 0; i < 10; i++) {
        numbersArray.push(Math.floor(Math.random() * 100) + 1);
    }
    document.getElementById('arrayOutput').innerText = 'Generated Array: ' +'[ '+ numbersArray.join(', ')+' ]';
    document.getElementById('statsOutput').innerText = '';
}

function showMin() {
    const min = Math.min(...numbersArray);
    document.getElementById('statsOutput').innerText = 'Min: ' + min;
}

function showMax() {
    const max = Math.max(...numbersArray);
    document.getElementById('statsOutput').innerText = 'Max: ' + max;
}

function showSum() {
    const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
    document.getElementById('statsOutput').innerText = 'Sum: ' + sum;
}



function sortArray() {
    
    const sortedArray = numbersArray.slice().sort((a, b) => a - b);
    document.getElementById('sortOutput').innerText = 'Sorted Array: ' +'[ '+ sortedArray.join(', ')+' ]';
    return sortedArray;
}

function applyMap() {
    const sortedArray = sortArray();
    const mappedArray = sortedArray.map(num => num * 2);
    document.getElementById('mapOutput').innerText = 'Mapped Array: ' + '[ '+ mappedArray.join(', ') +' ]';
}

function applyFilter() {
    const sortedArray = sortArray();
    const filteredArray = sortedArray.filter(num => num % 2 === 0);
    document.getElementById('filterOutput').innerText = 'Filtered Array: ' + '[ '+ filteredArray.join(', ') +' ]';
}

function applyReduce() {
    const sortedArray = sortArray();
    const reducedValue = sortedArray.reduce((acc, curr) => acc + curr, 0);
    document.getElementById('reduceOutput').innerText = 'Reduced Value: ' + '[ '+ reducedValue +' ]';
}



let jokeTextEl=document.getElementById('jokeText');
let jokeBtnEl=document.getElementById('jokeBtn');

function sendGetHttpRequest(){
    let url='https://apis.ccbp.in/jokes/random';
    let options={method:'GET'};
    
    fetch(url, options)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        jokeTextEl.textContent=JSON.stringify(data.value)
    })

}
jokeBtnEl.addEventListener('click',sendGetHttpRequest)




let userForm = document.getElementById("userForm");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

userForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    let formData = new FormData(userForm); // Create FormData object from form
    let requestBody = {}; // Initialize empty object for request body

    // Convert FormData to JSON object
    formData.forEach(function(value, key){
        requestBody[key] = value;
    });

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer f081dcd4590a3a1d37c98d9bf2c903a2ff7aa54b20960a30e539d735bcdcb1b6"
        },
        body: JSON.stringify(requestBody)
    };

    requestStatusEl.textContent = "Loading..."; // Display loading message

    fetch("https://gorest.co.in/public-api/users", options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(jsonData => {
            let requestStatus = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            requestStatusEl.textContent = requestStatus;
            httpResponseEl.textContent = httpResponse;
        })
        .catch(error => {
            console.error('Error:', error);
            requestStatusEl.textContent = 'Error: ' + error.message;
        });
});
