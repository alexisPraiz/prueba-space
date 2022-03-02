/*---==== Creating nav: Start ====---*/
let elementsNav = ` <img src="space-tourism-website-main/starter-code/assets/shared/logo.svg" class="logo" alt="logo">
        
                    <div class="menu_links">
                        <ul id="menu_links">
                           <li><a data-id="0" href="#"><span>00</span>home</a></li>
                           <li><a data-id="1" class="destiny" href="#"><span>01</span>destination</a></li>
                           <li><a data-id="2" href="#"><span>02</span>crew</a></li>
                           <li><a data-id="3" href="#"><span>03</span>technology</a></li>
                           <span class="indicator" id="indicator"></span> 
                        </ul>
                    </div>`;
document.getElementById('nav').innerHTML += elementsNav;
/*---==== Creating nav: End ====---*/

/*---==== Menu functions: Start ====---*/
const menu      = document.getElementById('menu_links'),
      indicator = document.getElementById('indicator');
let   indicatorWidth;

menu.addEventListener('click',e =>{
    if(e.target.tagName == 'A'){      
        const target = e.target.dataset;
        const num    = parseInt(target.id);    
        indicatorWidth = e.target.offsetWidth;
        indicator.style.width = `${indicatorWidth}px`;
        indicator.style.transform = `translateX(${indicatorWidth * num}px)`;
    }
});
/*---==== Menu functions: End ====---*/