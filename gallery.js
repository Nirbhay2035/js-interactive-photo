/*Name this external file gallery.js*/

function upDate(previewPic){
   
       
        // 1) Change the URL of the background image of the div with id = "image"
        document.getElementById('image').style.backgroundImage = `url(${previewPic.src})`;
    
        // 2) Change the text of the div with id = "image" to the alt text of the preview image
        document.getElementById('image').innerText = previewPic.alt;
       }
   
       let originalBackground = "url('path/to/original-image.jpg')"; // Replace with the actual original image URL
       let originalText = "Original Image Description"; // Replace with the actual original text
       
       function unDo() {
           // 1) Update the background image to the original image
           document.getElementById('image').style.backgroundImage = originalBackground;
       
           // 2) Change the text back to the original text
           document.getElementById('image').innerText = originalText;
       }