
window.addEventListener('load', () => {
    var canvas = document.getElementById('demo-canvas')


    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        context.beginPath();
        context.moveTo(10, 45);
        context.lineTo(180, 47)
        context.stroke();
    }

})