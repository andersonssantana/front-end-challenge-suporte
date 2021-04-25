const header = document.querySelector(".header__networks-list");
const youtubeIcon = document.createElement("a");
Object.assign(youtubeIcon, {
    href: "https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ",
    target: "_blank"
  }
)
header.appendChild(youtubeIcon);

const iconImage = document.createElement("i");
Object.assign(iconImage, {
    className: "icon icon-youtube-header icon--small icon--hover-youtube"
  }
)
youtubeIcon.appendChild(iconImage);
