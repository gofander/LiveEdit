// Get references to DOM elements
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const saveBtn = document.getElementById('save-btn');

// Define a function to update the preview
function updatePreview() {
  preview.innerHTML = editor.value;
}

// Listen for changes to the editor content
editor.addEventListener('input', updatePreview);

// Define a function to handle saving of the document
function saveDocument() {
  // Get the content of the editor
  const content = editor.value;

  // TODO: Send the content to a server-side script or API for storage
  // Example using fetch() API:
  fetch('/save-document', {
    method: 'POST',
    body: JSON.stringify({ content }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

// Listen for clicks on the save button
saveBtn.addEventListener('click', saveDocument);
