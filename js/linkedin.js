"use strict";

console.log("veikia")

const search = document.querySelector("input");
let searchOverlayAdded = false;
search.addEventListener("click", openMenu);

function openMenu(){

    document.querySelector(".demo").innerHTML = 
    `<div class="searchNav" style = "background-color: white; position: absolute; left: 60px; top: 40px">
        <div class = "navRow">
            <div class = "rowElement">People</div>
            <div class = "rowElement">Jobs</div>
            <div class = "rowElement">Content</div>
            <div class = "rowElement">Companies</div>
            <div class = "rowElement">Schools</div>
            <div class = "rowElement">Groups</div>
        </div>  ` 
    

    if (searchOverlayAdded) {
        searchOverlayAdded = true;
    } else {
        container.insertAdjacentHTML("afterbegin", "<div class='overlay'></div>")
    }
    searchOverlayAdded = searchOverlayAdded;
}

let container = document.querySelector(".container")

container.addEventListener('click', removeMenu)

function removeMenu(){
    const overlay = document.querySelector('.overlay')

    console.log(overlay)

    document.querySelector(".demo").innerHTML = 
    `<div class="searchNav">
        </div> 
         ` 
        overlay.remove();
        return
};



function renderFeed(data) {
    if (!Array.isArray(data)){
        return console.error("Reikia Array");
    }
    let HTML = "";

    for (let i = 0; i<data.length; i++){
        const postData = data[i];
        HTML += renderPost(postData);
    }
    return document.querySelector('.feed').innerHTML = HTML;
}

function renderPost(data){
    console.log('-----------------');
    let HTML = `<div class = "post">
                ${renderPostHeader(data.author, data.time)}
                ${renderPostContent(data.content)}
                ${renderPostFooter()}
                </div>`;

    return HTML;
}

function renderPostHeader(author, time){
    let HTML = '';

    HTML = `<div class = "header">
                    <img src="./img/${author.img}">
                    <div class="texts">
                        <div class="title">
                            <a href="${author.link}">${author.name} ${author.surname} ${author.connection}</a>
                            <a href="${author.link}"> ${author.position}</a>
                        </div>
                        <div class="time">${time}</div>
                    </div>
                    <i class="fa fa-ellipsis-h"></i>
                </div>`;

    return HTML;
}

function renderPostContent(content){
   
    let HTML = `<div class="content">`;
    if (content.text) {
        HTML += renderPostContentText(content);
    }

    if(content.images){
        HTML += renderPostContentGallery(content.images);
    }

    HTML+="</div>";
    return HTML;
}

function renderPostContentText( content ){
   
    const maxTextLength = 240;
    const smallestTextLength = 30;
    let HTML = '';
    let style = '';
    let text = content.text;

    console.log(text)

    if (text.length <= smallestTextLength) {
        style += 'big-text';
    }

    
    if ( text.length >= maxTextLength ) {
        text = text.substring( 0, maxTextLength );
        let skipSymbols = 0;
        for ( let i=maxTextLength-1; i>=0; i-- ) {
            if ( text[i] === ' ' ) {
                break;
            }
            skipSymbols++;
        }
        text = text.substring( 0, maxTextLength-skipSymbols-1 );
        text += '... <span class="more">Read more</span>';
    }

    HTML = `<p class="${style}" data-fulltext="${content.text}">${text}</p>`;

    return HTML;

}

function renderPostContentGallery(images){
  
    let HTML = "";
    let imgHTML = "";
    let moreHTML = "";
    let goodPhotoCount = 0;
    let galleryClass = "";

    if (!Array.isArray(images) ||
    images.length === 0 ) {
        return '';
    }

    for (let i = 0; i<images.length; i++) {
        if (typeof(images[i]) === "string" &&
            images[i].length >=5 &&
            images[i].length < 100) {
            goodPhotoCount++;
            if ( goodPhotoCount <= 4 ) {
                imgHTML += `<img src="./img/${images[i]}">`;
            }
        }
    }

    galleryClass = goodPhotoCount;
    if ( goodPhotoCount > 4 ) {
        galleryClass = 4;
        moreHTML = `<div class="more">+${goodPhotoCount - 4}</div>`;
    }
    HTML = `<div class="gallery gallery-${galleryClass}">
                ${imgHTML}
                ${moreHTML}
            </div>`;
    
    if ( goodPhotoCount === 0 ) {
        return '';
    }

    return HTML;
}

function renderPostFooter(){
    return `<div class="footer">
    <div class="row">
        <div class="reaction">like</div>
    </div>
    <div class="row">
        <div class="action">
            <i class="fa fa-thumbs-up"></i>
            <div class="text">Like</div>
        </div>
        <div class="action">
            <i class="fas fa-comment-alt"></i>
            <div class="text">Comment</div>
        </div>
        <div class="action">
            <i class="fas fa-share"></i>
            <div class="text">Share</div>
         </div>
    </div>
    <div class="row">
        <img src="./img/user.png">
        <div class="comment-form">
            <textarea></textarea>
            <div class="interactions">
                <i class="fa fa-camera"></i>
            </div>
        </div>
    </div>
</div>`;
}

renderFeed(feed);

function renderViews(datalfp){
    if (!Array.isArray(datalfp)){
        return console.error("Reikia Array");
    }
    let HTML = "";
    for (let i = 0; i < datalfp.length; i++){
        HTML += `<div class = "rowv">
            <div class = "text">${datalfp[i].row}</div>
            <div class = "number">${datalfp[i].number}</div>
        </div>`
    }

    return document.querySelector('.views').innerHTML = HTML;

}

renderViews(views)


function renderGroups(datalpfs){
  

    if (!Array.isArray(datalpfs)){
        return console.error("Reikia Array");
    }
    let HTML = "";
    for (let i = 0; i < datalpfs.length; i++){
        console.log(datalpfs)
        HTML += `<div class = "row">
            <div class = "icon">${datalpfs[i].icon}</div>
            <div class = "text">${datalpfs[i].text}</div>
        </div>`
    }
    let groups = document.querySelector('.groups');
    let groupsContentLeft = groups.querySelector('.contentLeft')
    return groupsContentLeft.innerHTML = HTML;
}
renderGroups(groups)


function renderHashtags(datalH){
    if (!Array.isArray(datalH)){
        return console.error("Reikia Array");
    }

    let HTML = "";
    for (let i = 0; i < datalH.length; i++){
        HTML += `<div class = "row">
            <div class = "icon">${datalH[i].icon}</div>
            <div class = "text">${datalH[i].text}</div>
        </div>`
    }
    let followedHashtags = document.querySelector('.followedHashtags');
    let followedHashtagsCl = followedHashtags.querySelector('.contentLeft')
    return followedHashtagsCl.innerHTML = HTML;
}

renderHashtags(hashtags)

/*let leftHeader = document.querySelector('.headerlf').innerHTML;
console.log(leftHeader)
let color = "";
if (hashtags.length !== 0){
    color = "red";   
}
    else {
    color = "blue";
}

leftHeader += `<div class="hdr ${color}">Followed Hashtags</div>`;

console.log(leftHeader)*/

function renderHeaderMenu(dataHMenu){
    if (!Array.isArray(dataHMenu)){
        return console.error("Reikia Array");
    }
    let HTML = "";
    for (let i = 0; i < dataHMenu.length; i++){
        HTML += `<div class = "navIcon">
            <div class = "i">${dataHMenu[i].i}</div>
            <div class = "p">${dataHMenu[i].p}</div>
        </div>`
    }
    let headerMenu = document.querySelector('.searchNavHeader');

    return  headerMenu.innerHTML = HTML;
}

renderHeaderMenu(headerMenu)


function renderAddToFeed(addToFeed){

    if (!Array.isArray(addToFeed)){
        return console.error("Reikia Array");
    }
    let HTML = "";
    for (let i = 0; i < addToFeed.length; i++){
        
        HTML += `<div class = "headerFirstRowContent">
        <img src="./img/${addToFeed[i].img}">
        <div class="title">
            <div class ="name">${addToFeed[i].name}</div>
            <div class ="activity">${addToFeed[i].activity}</div>
        </div>
        <div class = "follow">
            <div class = "plus">${addToFeed[i].follow.plus}</div>
            <div class = "text">${addToFeed[i].follow.text}</div>
        </div>
    </div>`;
    }
    let addtoFeedCont = document.querySelector('.firstRowContent');
    return  addtoFeedCont.innerHTML = HTML;
}

renderAddToFeed(addToYourFeed)



function renderFinalRow(dataFR){
    if (!Array.isArray(dataFR)){
        return console.error("Reikia Array");
    }

    let HTML = "";
    for (let i = 0; i < dataFR.length; i++){
        if (dataFR[i].item){
        HTML += `<div class = "row">${dataFR[i].item} </div>`
        }
        if(dataFR[i].itemF){
            HTML += `<div class = "row">${dataFR[i].itemF.text} ${dataFR[i].itemF.icon}</div>`
    
        }

    }

        
        let finalRow = document.querySelector(".thirdRowContent");
        return finalRow.innerHTML = HTML;
    

}


renderFinalRow(finalPart)


