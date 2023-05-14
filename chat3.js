// Create image element for chat button
const button = document.createElement("img");
button.src = "https://icons-for-free.com/download-icon-chat+icon-1320184411998302345_512.png";
button.alt = "Chat";
button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "20px";
button.style.zIndex = "9999";
button.style.width = "50px";
button.style.height = "50px";
button.addEventListener("click", showChat);

// Append button to the body
document.body.appendChild(button);

// Show chat popup
function showChat() {
  // Create popup container
  const popupContainer = document.createElement("div");
  popupContainer.className = "chat-popup";
  popupContainer.style.zIndex = "9999";

  // Create iframe element
  const iframe = document.createElement("iframe");
  iframe.src = "https://weather.gov";
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.borderRadius = "10px";
  iframe.style.backgroundColor = "white";
  iframe.style.borderWidth = "1px";
  iframe.style.boxShadow = "3px 2px 9px 1px rgba(181,181,181,0.4)";

  // Append iframe to popup container
  popupContainer.appendChild(iframe);

  // Replace chat button with close button image
  button.src = "https://img.uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/close-round-icon.png";
  button.alt = "Close";
  button.removeEventListener("click", showChat);
  button.addEventListener("click", hideChat);

  // Append popup container to body
  document.body.appendChild(popupContainer);

  // Hide chat popup
  function hideChat() {
    document.body.removeChild(popupContainer);
    // Replace close button with chat button image
    button.src = "https://icons-for-free.com/download-icon-chat+icon-1320184411998302345_512.png";
    button.alt = "Chat";
    button.removeEventListener("click", hideChat);
    button.addEventListener("click", showChat);
  }
}

// CSS styles for chat popup
const styles = `
.chat-popup {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: white;
  z-index: 9999;
}

.chat-popup button {
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
`;

// Add CSS styles to head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
