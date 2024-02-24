const music = new Audio("audio/kailash/9.mp3");
let index = 24;
let previndex = 24;
let poster = document.getElementById("poster");
let title = document.getElementById("title");
let masterplay = document.getElementById("masterplay");
let masterwave = document.getElementById("masterwave");
let download = document.getElementById("download");
// music.play();

const song = [
  {
    id: 1,

    songName: `Tere Naal Ishq
        <br>
        <div class="subtitle">Kailash Kher</div>`,
    poster: "img/kailash/1.png",
  },
  {
    id: 2,

    songName: `  Karle jugaad Karle
    
        <br>
        <div class="subtitle">Kailash Kher</div>`,
    poster: "img/kailash/2.png",
  },
  {
    id: 3,

    songName: `Yuhi hi chala chal
        <br>
        <div class="subtitle">Kailash Kher
</div>`,
    poster: "img/kailash/3.png",
  },
  {
    id: 4,

    songName: ` Mere Nishaan
        <br>
        <div class="subtitle">Kailash Kher
    
        </div>`,
    poster: "img/kailash/4.png",
  },
  {
    id: 5,

    songName: `Fake Ishq 
        <br>
        <div class="subtitle">
       Kailash Kher
        </div>`,
    poster: "img/kailash/5.png",
  },
  {
    id: 6,

    songName: ` Kaisi hai ye Udaasi
        <br>
        <div class="subtitle"> Kailash Kher</div>`,
    poster: "img/kailash/6.png",
  },
  {
    id: 7,

    songName: `Tujhe Mai Pyar karu
        <br>
        <div class="subtitle">Kailash Kher
        </div>`,
    poster: "img/kailash/7.png",
  },
  {
    id: 8,

    songName: `Teri Marzi Aye Khuda
        <br>
        <div class="subtitle">Kailash Kher</div>`,
    poster: "img/kailash/8.png",
  },
  {
    id: 9,

    songName: `Ya Rabba
        <br>
        <div class="subtitle">Kailash Kher </div>`,
    poster: "img/kailash/9.png",
  },
  {
    id: 10,

    songName: `Chak Lein De
        <br>
        <div class="subtitle">Kailash Kher </div>`,
    poster: "img/kailash/10.png",
  },
  {
    id: 11,

    songName: `Teri Dewani
        <br>
        <div class="subtitle">Kailash Kher</div>`,
    poster: "img/kailash/11.png",
  },
  {
    id: 12,

    songName: `Daulat Shohrat
        <br>
        <div class="subtitle">Kailash Kher
        </div>`,
    poster: "img/kailash/12.png",
  },
  {
    id: 13,

    songName: `Bam Lahri
        <br>
        <div class="subtitle">Kailash Kher</div>`,
    poster: "img/kailash/13.png",
  },
  {
    id: 14,

    songName: `Chand Sifarish
        <br>
        <div class="subtitle">Kailash Kher</div>`,
    poster: "img/kailash/14.png",
  },
  {
    id: 15,

    songName: `Saiyaan
        <br>
        <div class="subtitle">Kailash Kher
        </div>`,
    poster: "img/kailash/15.png",
  },
  {
    id: 16,

    songName: `Tere Naina
        <br>
        <div class="subtitle">Kailash Kher </div>`,
    poster: "img/kailash/16.png",
  },
  {
    id: 17,

    songName: ` Piya ghr ayengai
        <br>
        <div class="subtitle">Kailash Kher</div>`,
    poster: "img/kailash/17.png",
  },
  {
    id: 18,

    songName: `Tauba Tauba
        <br>
        <div class="subtitle">Kailash Kher</div>`,
    poster: "img/kailash/18.png",
  },
  {
    id: 19,

    songName: `dhindhora (title track)
        <br>
        <div class="subtitle">Kailash Kher</div>`,
    poster: "img/kailash/19.png",
  },
  {
    id: 20,

    songName: ` Dilruba
        <br>
        <div class="subtitle">Kailash Kher</div>`,
    poster: "img/kailash/20.png",
  },
  

];

Array.from(document.getElementsByClassName("songitem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = song[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = song[i].songName;
});

music.addEventListener('pause', ()=>{
  masterPlayer(false);
})

const masterPlayer = (isPaused = true)=>{
  const el = document.querySelector('.bi-pause');
  el && el.classList.remove('bi-pause');
  el && el.classList.add('bi-play');

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
   if(index !== previndex){
     music.src = `audio/kailash/${index}.mp3`; // Corrected the src path
     previndex = index;
   }
    poster.src = `img/kailash/${index}.png`; // Corrected the src path

    let mastertitle = song.filter((els) => {
      return els.id == index;
   
    });

    mastertitle.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
      download.setAttribute('download',songName);
    });
    opac();
    Array.from(document.getElementsByClassName("songitem"))[
      index - 1
    ].style.background = " rgb(105, 105, 105, 1)";
    masterPlayer(isPaused);
}

Array.from(document.getElementsByClassName("playlist_play")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    const isPaused = !el.target.className.includes('bi-pause');
    tilePlayer(isPaused);
    download.href=`audio/kailash/${index}.mp3`
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

    vol_icon.classList.remove("bi-volume-up-fill", "bi-volume-down-fill", "bi-volume-off-fill");

    if (volume == 0) {
        vol_icon.classList.add("bi-volume-off-fill");
    } else if (volume > 0 && volume <= 50) {
        vol_icon.classList.add("bi-volume-down-fill");
    } else {
        vol_icon.classList.add("bi-volume-up-fill");
    }

    volbar.style.width = `${volume}%`;
    voldot.style.left = `${volume}%`;
    music.volume=volume/100;
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







let back = document.getElementById('back');
let Next = document.getElementById('Next');

back.addEventListener('click', () => {
    index -= 1;
    tilePlayer();
});

Next.addEventListener('click', () => {
  
  song[index]?  index++ : (index = 1);
    tilePlayer();
});






let isShuffleOn = false; // Variable to track shuffle state

const shuffleBtn = document.getElementById('shuffleBtn');

// Function to toggle shuffle state
function toggleShuffle() {
  isShuffleOn = !isShuffleOn;
  if (isShuffleOn) {
    shuffleBtn.innerHTML = '<i class="bi bi-shuffle"></i>';
  } else {
    shuffleBtn.innerHTML = '[/]'; // or set it to some other icon or text
  }
}

shuffleBtn.addEventListener('click', toggleShuffle);

// // Function to play the next song
function playNextSong() {
  if(isShuffleOn){
    index = Math.round(Math.random() * song.length); 
    if(index >= song.length ){
      playNextSong();
    } 

  }else{
    index += 1; 
  }

  if(index >= song.length){
    index = 1;
  }
  tilePlayer();
}

music.addEventListener('ended', playNextSong);
