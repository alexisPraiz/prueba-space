/*JSON: Start*/
addEventListener('DOMContentLoaded',()=>{
    jsonData();
});

const jsonData = async ()=>{
    try{
        const response = await fetch('js/data.json');
        const data     = await response.json();
        section(data);
    }catch(error){
        console.log(error);
    }
}

/*JSON: End*/

/*---==== Creating sections: Start ====---*/
const section = data =>{
    const body         = document.getElementById('body');
    const conteiner    = document.querySelector('.main');
    const destinations = document.getElementById('src_destination');
    let   filterArr;
    let   elements     = '';   

    document.getElementById('nav').addEventListener('click',e =>{
        const target      = e.target;
        const set         = target.dataset;

        if(target.tagName == 'A' && set.id == '0'){
            if(window.screen.width > 800) body.style.backgroundImage = 'url(space-tourism-website-main/starter-code/assets/home/background-home-desktop.jpg)';
            else if(window.screen.width > 500 && window.screen.width < 800) body.style.backgroundImage = 'url(space-tourism-website-main/starter-code/assets/home/background-home-tablet.jpg)';
            else if(window.screen.width < 500) body.style.backgroundImage = 'url(space-tourism-website-main/starter-code/assets/home/background-home-mobile.jpg)';

            elements = '';
            elements += `<section id="home">
                            <div class="column_left">
                                <p>so, you want to travel to</p>
                                <span>space</span>

                                <p>
                                   Let's face it; if you want to go space, you might as well
                                   genuinely go to outer space and not hover kind of on the
                                   edge of it. Well sit back, and relax because we'll give you
                                   a truly out of this world experience!
                                </p>
                            </div>
 
                            <div class="column_right">
                                <p>explore</p>
                            </div>
                        </section>`;
            conteiner.id = '';
            conteiner.innerHTML = elements;
            destinations.removeAttribute('src');

        }else if(target.tagName == 'A' && set.id == '1'){
            if(window.screen.width > 800) body.style.backgroundImage = 'url(space-tourism-website-main/starter-code/assets/destination/background-destination-desktop.jpg)';
            else if(window.screen.width > 500 && window.screen.width < 800) body.style.backgroundImage = 'url(space-tourism-website-main/starter-code/assets/destination/background-destination-tablet.jpg)';
            else if(window.screen.width < 500) body.style.backgroundImage = 'url(space-tourism-website-main/starter-code/assets/destination/background-destination-mobile.jpg)';

            elements  = '';
            filterArr = data.destinations;
            let destination = '';       

            filterArr.filter(response =>{
                destination += `
                <div class="option">
                       <h2>${response.name}</h2>
                       <img src="${response.image}" alt="${response.name}">

                       <ul>
                           <li> <!-- Description -->
                               ${response.description}
                           </li>

                           <li> <!-- Distance -->
                               Distance: ${response.distance}
                           </li>

                           <li> <!-- Travel time -->
                               Travel time: ${response.travel}
                           </li>
                       </ul>
                   </div>
                `;
            }); 

            elements += `<i class='bx bx-chevron-left prev'></i>

                         <div class="conteiner-options">
                              ${destination}
                         </div>

                         <i class='bx bx-chevron-right next'></i>`;

            conteiner.id = 'destination'
            conteiner.innerHTML = elements;    
            destinations.setAttribute('src','js/destination.js');

        }else if(target.tagName == 'A' && set.id == '2'){
            if(window.screen.width > 800) body.style.backgroundImage = 'url(space-tourism-website-main/starter-code/assets/crew/background-crew-desktop.jpg)';
            else if(window.screen.width > 500 && window.screen.width < 800) body.style.backgroundImage = 'url(space-tourism-website-main/starter-code/assets/crew/background-crew-tablet.jpg)';
            else if(window.screen.width < 500) body.style.backgroundImage = 'url(space-tourism-website-main/starter-code/assets/crew/background-crew-mobile.jpg)';

            elements  = '';
            filterArr = data.crew;

            filterArr.filter(response =>{
                elements += `<div class="crew">
                                <img src="${response.image}" alt="${response.name}">
            
                                <div>
                                    <h3>${response.role}: ${response.name}</h3>
               
                                    <p>
                                        ${response.bio}
                                    </p>
                                </div>
                             </div>`;
            });
            conteiner.id = 'crew';
            conteiner.innerHTML = elements;
            destinations.removeAttribute('src');

        }else if(target.tagName == 'A' && set.id == '3'){
            if(window.screen.width > 800) body.style.backgroundImage = 'url(space-tourism-website-main/starter-code/assets/technology/background-technology-desktop.jpg)';
            else if(window.screen.width > 500 && window.screen.width < 800) body.style.backgroundImage = 'url(space-tourism-website-main/starter-code/assets/technology/background-technology-tablet.jpg)';
            else if(window.screen.width < 500) body.style.backgroundImage = 'url(space-tourism-website-main/starter-code/assets/technology/background-technology-mobile.jpg)';

            elements  = '';
            filterArr = data.technology;

            filterArr.filter(response =>{
                elements += `<div class="technology">
                                <img src="${response.image}" alt="${response.name}">
                                <h3>${response.name}</h3>
                                <p>
                                    ${response.description}
                                </p>
                             </div>
                            `;
            });

            conteiner.id = 'technology';
            conteiner.innerHTML = elements;
            destinations.removeAttribute('src');
        }
    });
}
/*---==== Creating sections: End ====---*/