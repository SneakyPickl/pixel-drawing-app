import React, { useEffect } from 'react'

function CanvasScreen() {
    useEffect(() => {
        const canvas = document.getElementById('myCanvas');
        const width = canvas.width = window.innerWidth - 250;
        const height = canvas.height = window.innerHeight - 150;
        const ctx = canvas.getContext('2d');
        

        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.fillRect(0, 0, width, height);

        const colorPicker = document.querySelector('input[type="color"]');
        const sizePicker = document.querySelector('input[type="range"]');
        const sizePickerOffset = 10;
        const sliderOutput = document.querySelector('.sliderOutput');

        sizePicker.oninput = () => {
            sliderOutput.textContent = sizePicker.value;
        }

        // store mouse pointer coordinates, and whether the button is pressed
        let mosX;
        let mosY;
        let pressed = false;

        // update mouse pointer coordinates
        document.onmousemove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mosX = ((e.clientX - rect.left) / (rect.right - rect.left)) * canvas.width;
            mosY = ((e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height);
        }

        canvas.onmousedown = () => {
            pressed = true;
        }
    
        canvas.onmouseup = () => {
            pressed = false;
        }
    
        function draw() {
            if (pressed) {
                const w = parseInt(sizePicker.value)+sizePickerOffset;
                const h = parseInt(sizePicker.value)+sizePickerOffset;

                ctx.fillStyle = colorPicker.value;
                ctx.beginPath();
                ctx.fillRect(mosX-(w/2), mosY-(h/2), w, h);
                ctx.fill();
            }
            requestAnimationFrame(draw);
        }
        draw();
    }, [])

    return (
        <div className='canvasScreen'>
            <div className='canvasToolbar'>
                { /* aria-label is for assistive technology (like a screen reader reading off the label to a blind person) see here: https://stackoverflow.com/questions/22039910/what-is-aria-label-and-how-should-i-use-it*/ }
                <label htmlFor="colorPicker">Pick a color</label>
                <input type="color" id="colorPicker" aria-label="select pen color"/>
                <input type="range" min={"1"} max={"10"} defaultValue={"1"}/>
                <span className='sliderOutput'>1</span>
            </div>

            <canvas id='myCanvas'></canvas>
        </div>
    )
}

export default CanvasScreen