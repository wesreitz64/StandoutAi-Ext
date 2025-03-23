// content.js

// Function to add the floating button
function addFloatingButton() {
    if (document.getElementById('myFloatingButton')) {
      return; // Button already exists
    }
  
    const button = document.createElement('button');
    button.id = 'myFloatingButton';
    button.innerText = 'Open Sidebar';
    button.style.position = 'fixed';
    button.style.top = '20px';
    button.style.right = '20px';
    button.style.zIndex = '10000'; // Ensure it's on top
    document.body.appendChild(button);
  
    // Event listener for the button click
    button.addEventListener('click', () => {
      if (document.getElementById('mySidebar')) {
        return; // Sidebar already exists
      }
  
      const sidebar = document.createElement('iframe');
      sidebar.id = 'mySidebar';
      sidebar.src = chrome.runtime.getURL('sidebar.html'); // Load your website
      sidebar.style.position = 'fixed';
      sidebar.style.top = '0';
      sidebar.style.right = '0';
      sidebar.style.width = '300px'; // Adjust as needed
      sidebar.style.height = '100%';
      sidebar.style.zIndex = '9999';
      document.body.appendChild(sidebar);
  
      // Add close button to the sidebar
      const closeButton = document.createElement('button');
      closeButton.innerText = 'Close';
      closeButton.style.position = 'absolute';
      closeButton.style.top = '10px';
      closeButton.style.left = '10px';
      sidebar.appendChild(closeButton);
  
      closeButton.addEventListener('click', () => {
        sidebar.remove();
      });
    });
  }
  
  // Get the current tab's ID and then execute the script
  chrome.tabs.getCurrent(function(tab) {
    addFloatingButton();
  });