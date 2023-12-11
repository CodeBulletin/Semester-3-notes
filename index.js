let frame = document.getElementById('frame');

console.log(frame);

// When the frame loads, add a listener to the frame's document
frame.addEventListener('load', function() {
    // Render the latex in frame

    setTimeout(function() {
        console.log(MathJax)
        MathJax.typesetPromise([frame.contentWindow.document.body]);
    }, 100);
});