const music = new Audio("audio/Kishore/1.mp3");
let index = 1;
let previndex = 1;
let poster = document.getElementById("poster");
let title = document.getElementById("title");
let masterplay = document.getElementById("masterplay");
let masterwave = document.getElementById("masterwave");
let download = document.getElementById("download");
// music.play();

const song = [
  {
    id: 1,

    songName: `Pal Pal Dil ke Pass
        <br>
        <div class="subtitle">Kishore Kumar</div>`,
    poster: "img/kishore/2.png",
  },
  {
    id: 2,

    songName: `  Kehdoon Tumhai
    
        <br>
        <div class="subtitle">Kishore Kumar</div>`,
    poster: "img/kishore/1.png",
  },
  {
    id: 3,

    songName: `O mere Dil kai chain
        <br>
        <div class="subtitle">Kishore Kumar
</div>`,
    poster: "img/kishore/3.png",
  },
  {
    id: 4,

    songName: ` Neele Neele Ambar Par
        <br>
        <div class="subtitle">Kishore Kumar
    
        </div>`,
    poster: "img/kishore/4.png",
  },
  {
    id: 5,

    songName: `Tu hai wahi 
        <br>
        <div class="subtitle">
       Kishore Kumar
        </div>`,
    poster: "img/kishore/5.png",
  },
  {
    id: 6,

    songName: `Ankhoe kai Andazz
        <br>
        <div class="subtitle"> Kishore Kumar</div>`,
    poster: "img/kishore/6.png",
  },
  {
    id: 7,

    songName: `Ek Aznabee
        <br>
        <div class="subtitle">Kishore Kumar
        </div>`,
    poster: "img/kishore/7.png",
  },
  {
    id: 8,

    songName: `Ye Sham Mastani
        <br>
        <div class="subtitle">Kishore Kumar</div>`,
    poster: "img/kishore/8.png",
  },
  {
    id: 9,

    songName: `Mere Mehboob Qyamat hogi
        <br>
        <div class="subtitle">Kishore Kumar </div>`,
    poster: "img/kishore/9.png",
  },
  {
    id: 10,

    songName: `YE rate Ye Mausoom
        <br>
        <div class="subtitle">Kishore Kumar </div>`,
    poster: "img/kishore/10.png",
  },
  {
    id: 11,

    songName: `Chookar mere Mnn koe
        <br>
        <div class="subtitle">Kishore Kumar</div>`,
    poster: "img/kishore/11.png",
  },
  {
    id: 12,

    songName: ` Tere Jaisa Yrr Kha
        <br>
        <div class="subtitle">Kishore Kumar
        </div>`,
    poster: "img/kishore/12.png",
  },
  {
    id: 13,

    songName: `Zindagi Ki Yhi Reet Hai
        <br>
        <div class="subtitle">Kishore Kumar</div>`,
    poster: "img/kishore/13.png",
  },
  {
    id: 14,

    songName: ` Dhoop Mai Nikla Na Karo
        <br>
        <div class="subtitle">Kishore Kumar</div>`,
    poster: "img/kishore/14.png",
  },
  {
    id: 15,

    songName: `Bachke Renhna Re Baba

        <br>
        <div class="subtitle">Kishore Kumar
        </div>`,
    poster: "img/kishore/15.png",
  },
  {
    id: 16,

    songName: `Aa Dekhe Zara
        <br>
        <div class="subtitle">Kishore Kumar </div>`,
    poster: "img/kishore/16.png",
  },
  {
    id: 17,

    songName: `Jiska Mujhai Tha Intezar
        <br>
        <div class="subtitle">Kishore Kumar</div>`,
    poster: "img/kishore/17.png",
  },
  {
    id: 18,

    songName: `Gore Rang pe
        <br>
        <div class="subtitle">Kishore Kumar</div>`,
    poster: "img/kishore/18.png",
  },
  {
    id: 19,

    songName: `Humkoi Tumhsai Pyar Hai
        <br>
        <div class="subtitle">Kishore Kumar</div>`,
    poster: "img/kishore/19.png",
  },
  {
    id: 20,

    songName: ` salamat rahe dostana hamara 
        <br>
        <div class="subtitle">Kishore Kumar</div>`,
    poster: "img/kishore/20.png",
  },
];

Array.from(document.getElementsByClassName("songitem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = song[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = song[i].songName;
});
let searchresult = document.getElementsByClassName('searchresult')[0];
song.forEach(element => {
  const { id, songName, poster } = element;
  let card = document.createElement('a');
  card.classList.add('card');
  // card.href='#'+ id;
   card.id = id;
  
  card.innerHTML = `
    <img src="${poster}" alt="" />
    <div class="content">
      <h4>${songName}</h4>
    </div>`;
  searchresult.appendChild(card);
});

// Get the input element using querySelector instead of getElementsByTagName
let input = document.querySelector('input');
let cards = document.querySelectorAll('.card');

// Add event listener for the input field to perform a search when the user types in it
input.addEventListener('input', (e) => {
    let filter = e.target.value.toLowerCase();

    // Hide or show cards based on the search term
    cards.forEach((card) => {
        let textContent = card.innerText.toLowerCase();
        card.style.display = textContent.includes(filter) ? 'flex' : 'none';
    });

    // Hide all cards when no search term is entered
    if (filter === '') {
        cards.forEach((card) => {
            card.style.display = 'none';
        });
    }
});

// Add click event listener to each card for playing the same music
cards.forEach((card) => {
  card.addEventListener('click', (ev) => {
      index = card.id;
      // Play the music when any card is clicked
      tilePlayer();
  });
});




music.addEventListener("pause", () => {
  masterPlayer(false);
});

const masterPlayer = (isPaused = true) => {
  const el = document.querySelector(".bi-pause");
  el && el.classList.remove("bi-pause");
  el && el.classList.add("bi-play");

  if (isPaused && music.paused) {
    let el = document.getElementById(index);
    el && el.classList.remove("bi-play");
    el && el.classList.add("bi-pause");

    music.play();
    masterwave.classList.add("active1");
    masterplay.classList.remove("bi-play-fill");
    masterplay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    masterwave.classList.remove("active1");
    masterplay.classList.remove("bi-pause-fill");
    masterplay.classList.add("bi-play-fill");
  }
};

masterplay.addEventListener("click", masterPlayer);

const opac = () => {
  Array.from(document.getElementsByClassName("songitem")).forEach((el) => {
    el.style.background = " rgb(105, 105, 105, .0)";
  });
};
const opacplay = () => {
  Array.from(document.getElementsByClassName("playlist_play")).forEach((el) => {
    el.classList.add("bi-play");
    el.classList.remove("bi-pause");
  });
};

const tilePlayer = (isPaused = true) => {
  if (index !== previndex) {
    music.src = `audio/Kishore/${index}.mp3`; // Corrected the src path
    previndex = index;
  }
  poster.src = `img/kishore/${index}.png`; // Corrected the src path

  let mastertitle = song.filter((els) => {
    return els.id == index;
  });

  mastertitle.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
    download.setAttribute("download", songName);
  });
  opac();
  Array.from(document.getElementsByClassName("songitem"))[
    index - 1
  ].style.background = " rgb(105, 105, 105, 1)";
  masterPlayer(isPaused);
};

Array.from(document.getElementsByClassName("playlist_play")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    const isPaused = !el.target.className.includes("bi-pause");
    tilePlayer(isPaused);
    el.target && el.target.classList.add('bi-pause');
    el.target && el.target.classList.remove('bi-play');
    download.href = `audio/Kishore/${index}.mp3`;
  });
});

const current = document.getElementById("current");
const currentend = document.getElementById("currentend");
const bar2 = document.getElementById("bar2");
const dot = document.querySelector(".dot");

music.addEventListener("timeupdate", () => {
  const timeminute = Math.floor(music.currentTime / 60);
  const timesecond = Math.floor(music.currentTime % 60);
  const timeminuteend = Math.floor(music.duration / 60);
  const timesecondend = Math.floor(music.duration % 60);

  current.innerHTML = `${timeminute}:${
    timesecond < 10 ? "0" : ""
  }${timesecond}`;
  currentend.innerHTML = `${timeminuteend}:${
    timesecondend < 10 ? "0" : ""
  }${timesecondend}`;
  console.log(timeminuteend);
  const progressBar = (music.currentTime / music.duration) * 100;
  bar2.style.width = `${progressBar}%`;
  dot.style.left = `${progressBar}%`;
});

seek.addEventListener("input", () => {
  music.currentTime = (seek.value / 100) * music.duration;
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let volbar = document.querySelector(".volbar");
let voldot = document.getElementById("voldot");

vol.addEventListener("input", () => {
  let volume = vol.value;

  vol_icon.classList.remove(
    "bi-volume-up-fill",
    "bi-volume-down-fill",
    "bi-volume-off-fill"
  );

  if (volume == 0) {
    vol_icon.classList.add("bi-volume-off-fill");
  } else if (volume > 0 && volume <= 50) {
    vol_icon.classList.add("bi-volume-down-fill");
  } else {
    vol_icon.classList.add("bi-volume-up-fill");
  }

  volbar.style.width = `${volume}%`;
  voldot.style.left = `${volume}%`;
  music.volume = volume / 100;
});

//  fuction use to make arrow functionalble both arrorws

let popular_left = document.getElementById("popular_left");
let popular_right = document.getElementById("popular_right");
let poplist = document.getElementsByClassName("poplist")[0];

popular_right.addEventListener("click", () => {
  poplist.scrollLeft += 300;
});
popular_left.addEventListener("click", () => {
  poplist.scrollLeft -= 300;
});

let artist_left = document.getElementById("artist_left");
let artist_right = document.getElementById("artist_right");
let item = document.getElementsByClassName("item")[0];

artist_right.addEventListener("click", () => {
  item.scrollLeft += 60;
});
artist_left.addEventListener("click", () => {
  item.scrollLeft -= 60;
});

let back = document.getElementById("back");
let Next = document.getElementById("Next");

back.addEventListener("click", () => {
  index -= 1;
  tilePlayer();
});

Next.addEventListener("click", () => {
  song[index] ? index++ : (index = 1);
  tilePlayer();
});

let isShuffleOn = false; // Variable to track shuffle state

const shuffleBtn = document.getElementById("shuffleBtn");

// Function to toggle shuffle state
function toggleShuffle() {
  isShuffleOn = !isShuffleOn;
  if (isShuffleOn) {
    shuffleBtn.innerHTML = '<i class="bi bi-shuffle"></i>';
  } else {
    shuffleBtn.innerHTML = "[/]"; // or set it to some other icon or text
  }
}

shuffleBtn.addEventListener("click", toggleShuffle);

// // Function to play the next song
function playNextSong() {
  if (isShuffleOn) {
    index = Math.round(Math.random() * song.length);
    if (index >= song.length) {
      playNextSong();
    }
  } else {
    index += 1;
  }

  if (index >= song.length) {
    index = 1;
  }
  tilePlayer();
}

music.addEventListener("ended", playNextSong);
