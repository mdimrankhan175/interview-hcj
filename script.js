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
    
    if(inputString===reversedString){
        document.getElementById('isPalindrome').textContent='It is Palindrome'
    }else{
        document.getElementById('isPalindrome').textContent='It is Not a Palindrome'
    }

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


