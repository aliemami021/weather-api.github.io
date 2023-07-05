
const whole = document.querySelector('.whole');
const wrapper = document.getElementById('wrapper');
let imgs = document.querySelectorAll('.whole .images img');

wrapper.innerHTML = `
                        <header>
                        <div class="empty"></div>
                        <div class="slogan">
                        <span>weather app</span>
                        </div>
                        <nav class="burger">
                            <i class='bx bx-menu'></i>
                            <ul>
                                <li>a</li>
                                <li>b</li>
                                <li>d</li>
                            </ul>
                        </nav>
                        </header>

                        <div class="box" >
                            <div class="search">
                            <input type="text" name="" placeholder="enter..">
                            </div>

                            <div class="content">
                                <img src="">
                                <h3>city</h3>
                                <span>country</span>
                                
                                <h3>
                                    temperature
                                </h3>
                                
                                <span></span>
                                <span class="icon"></span>
                                
                                
                                <span>continent&Capital</span>
                            </div>
                        </div>

                        <footer>
                            <span>...</span>
                        </footer>`

const menuList = wrapper.querySelectorAll('menu li');


const inp = document.querySelector('input');

const menu = wrapper.querySelector('.burger')

const boxContent = document.querySelector('.content');
const firstHead = boxContent.querySelector('h3:nth-of-type(1)');
const firstSpan = boxContent.querySelector('span:nth-of-type(1)');
const sectHead = boxContent.querySelector('h3:nth-of-type(2)');
const secSpan = boxContent.querySelector('span:nth-of-type(2)');
const thirdSpan = boxContent.querySelector('span:nth-of-type(3)');
const fourthSpan = boxContent.querySelector('span:nth-of-type(4)');
const icon = boxContent.querySelector('.icon');
console.log(icon);
const footer = wrapper.querySelector('footer');

inp.focus()
inp.addEventListener('keyup', goSearch);

// menu.onclick = openMenu;

function goSearch(e) {
    if (e.keyCode == 13) {
        fetch(`https://api.weatherapi.com/v1/current.json?key=0d7f312965b7416f91794758232806&q=${inp.value}&aqi=no`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {

                firstSpan.innerHTML = `${data.location.country}`
                sectHead.innerHTML = `${data.current.temp_c} ˚C`
                fourthSpan.innerHTML = `${data.location.tz_id}`
                firstHead.innerHTML = `${data.location.name}`
                secSpan.innerHTML = `${data.current.condition.text}`
                icon.innerHTML = `<img src="https:${data.current.condition.icon}" witdh="95" height="95">`

                // footer.style.backgroundColor = 'whitesmoke'

                wrapper.classList.remove(...wrapper.classList);
                wrapper.classList.add('wrapper');
                wrapper.classList.add(data.current.condition.text.toLowerCase().replace(" ", "-"));
                console.log(data.current.condition.text);
                inp.value = '';
            })

            .catch((error) => {
                alert(error.message)
            })
    }
}
