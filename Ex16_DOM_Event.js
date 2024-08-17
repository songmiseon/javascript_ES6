document.getElementById("myAnchor").addEventListener("click", function(event){
    event.preventDefault();
});

const btn = document.querySelector('.btn');
btn.addEventListener('click', function(e) {
    console.log(this); // <button class="btn">Button</button>
    console.log(e.currentTarget); // <button class="btn">Button</button>
    console.log(this === e.currentTarget);
});

const element = document.getElementById("element");
element.addEventListener('click', function() {
    console.log('Element clicked');
});

element.addEventListener('dblclick', function() {
    console.log('Element double-clicked');
});

element.addEventListener('mousedown', function() {
    console.log('Mouse button pressed');
});

element.addEventListener('mouseup', function() {
    console.log('Mouse button released');
});

element.addEventListener('mouseover', function() {
    console.log('Mouse over element');
});

element.addEventListener('mouseout', function() {
    console.log('Mouse out of element');
});

element.addEventListener('mousemove', function(event) {
    console.log('Mouse moved to: ' + event.clientX + ', ' + event.clientY);
});

document.addEventListener('keydown', function(event) {
    console.log('Key pressed: ' + event.key);
});

document.addEventListener('keyup', function(event) {
    console.log('Key released: ' + event.key);
});

document.addEventListener('keypress', function(event) {
    console.log('Key pressed: ' + event.key);
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 동작을 방지
    console.log('Form submitted');
});

document.querySelector('input').addEventListener('change', function() {
    console.log('Input value changed');
});

document.querySelector('input').addEventListener('focus', function() {
    console.log('Input focused');
});

document.querySelector('input').addEventListener('blur', function() {
    console.log('Input blurred');
});

window.addEventListener('load', function() {
    console.log('Page loaded');
});

window.addEventListener('resize', function() {
    console.log('Window resized');
});

window.addEventListener('scroll', function() {
    console.log('Page scrolled');
});

window.addEventListener('unload', function() {
    console.log('Page unloaded');
});

element.addEventListener('touchstart', function() {
    console.log('Touch started');
});

element.addEventListener('touchend', function() {
    console.log('Touch ended');
});

element.addEventListener('touchmove', function(event) {
    console.log('Touch moved to: ' + event.touches[0].clientX + ', ' + event.touches[0].clientY);
});

element.addEventListener('drag', function() {
    console.log('Element dragged');
});

element.addEventListener('dragstart', function() {
    console.log('Drag started');
});

element.addEventListener('dragend', function() {
    console.log('Drag ended');
});

element.addEventListener('dragover', function(event) {
    event.preventDefault(); // 기본 동작을 방지해야 drop 이벤트가 발생
    console.log('Element dragged over');
});

element.addEventListener('drop', function(event) {
    event.preventDefault(); // 기본 동작을 방지
    console.log('Element dropped');
});