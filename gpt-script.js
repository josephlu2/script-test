// Create the icon
const icon = document.createElement('div');
icon.style.position = 'fixed';
icon.style.bottom = '20px';
icon.style.right = '20px';
icon.style.zIndex = '9999';
icon.innerHTML = '<img style="width: 50px; height: 50px; cursor: pointer;" src="https://cdn.dialoqai.com/js/dialoq/images/chat.svg">';

// Append the icon to the document body
document.body.appendChild(icon);

// Listen for click events on the icon
icon.addEventListener('click', function () {
  // Create the iframe and set its attributes
  const iframe = document.createElement('iframe');
  iframe.src = 'http://localhost:3000/chat/645f0c178551cc33de9c993d';
  iframe.style.position = 'fixed';
  iframe.style.bottom = '0';
  iframe.style.right = '0';
  iframe.style.width = '400px';
  iframe.style.height = '400px';
  iframe.style.border = 'none';
  iframe.style.zIndex = '10000';

  // Replace the icon with the close button and append the iframe to the document body
  icon.innerHTML = '<img style="width: 50px; height: 50px; cursor: pointer;" src="https://cdn.dialoqai.com/js/dialoq/images/chat.svg">';
  document.body.appendChild(iframe);

  // Listen for click events on the close button
  icon.addEventListener('click', function () {
    // Remove the iframe and replace the close button with the original icon
    document.body.removeChild(iframe);
    icon.innerHTML = '<img style="width: 50px; height: 50px; cursor: pointer;" src="https://cdn.dialoqai.com/js/dialoq/images/chat.svg">';
  });
});
