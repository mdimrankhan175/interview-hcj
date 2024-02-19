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


