const githubBtn = document.querySelector('.github-btn');
const colorPickerOne = document.querySelector('.color-picker-1');
const colorPickerTwo = document.querySelector('.color-picker-2');
const generateBtn = document.querySelector('#generate');
const body = document.body;
const codeOutput = document.querySelector('.code-output');
const copy = document.querySelector('.copy');

githubBtn.addEventListener('click' , () => {
    window.open('https://github.com/Mhyar-nsi/Password-Generator' , '_blank');
});

generateBtn.addEventListener('click' , ()=> {
    body.style.backgroundImage = `linear-gradient(to right , ${colorPickerOne.value} , ${colorPickerTwo.value})`;
    codeOutput.innerHTML = `background: linear-gradient(to right , ${colorPickerOne.value} , ${colorPickerTwo.value});
background-size: 400% 400%;
animation: changeBG 4s infinite;
@keyframes changeBG {
    0% {
        background-position: 0 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}`;
})

copy.addEventListener('click' , ()=> {
    const text = codeOutput.innerHTML;
    navigator.clipboard.writeText(text);
    copy.innerHTML = 'Copied!';
    codeOutput.select();
    setTimeout(()=>{
        copy.innerHTML = 'Copy';
    } , 1500)
})
