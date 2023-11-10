const cardsContainer = document.querySelector('.cards-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const songs = [
    {
        
        imageUrl: 'img/Nothing.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/1lORkxEMmsCZqhoxcmk3A3?utm_source=generator'
    },
    {
        imageUrl: 'img/HalleysComet.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/5XsAal7ZcWg1I5T4NcRjkv?utm_source=generator'
    },
    {
        imageUrl: 'img/OnlyException.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/7JIuqL4ZqkpfGKQhYlrirs?utm_source=generator'
    },
    {
        imageUrl: 'img/AllINeed.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/164VgxTozx99XCinCB9ITR?utm_source=generator'
    },
    {
        imageUrl: 'img/BestFriend.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/5zQR0qoA4S1Iwj2bAwW03a?utm_source=generato'
    },
    {
        imageUrl: 'img/HowDeepIsYourLove.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/0loJyuSFr6vVPBQSmLLrrQ?utm_source=generator'
    },
    {
        imageUrl: 'img/Subside.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/3Lqsck2T1MyyRmK1993Obk?utm_source=generator'
    },
    {
        imageUrl: 'img/MakeYouFeelMyLove.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/273QnyCvJB65rScHJ1nPZb?utm_source=generator'
    },
    {
        imageUrl: 'img/ObjectsInTheMirror.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/5jNYE9pYIfWxsemQNdnuA0?utm_source=generator'
    },
    {
        imageUrl: 'img/YouBelongWithMe.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/1GEBsLDvJGw7kviySRI6GX?utm_source=generator'
    },
    {
        imageUrl: 'img/YouDear.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/318GlwGP0P1jr3FrSiQWZq?utm_source=generator'
    },
    {
        imageUrl: 'img/MoreThanAWoman.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/2cX2coZS1PYBfPs8wgbdWE?utm_source=generator'
    },
    {
        imageUrl: 'img/ImYours.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/3S0OXQeoh0w6AY8WQVckRW?utm_source=generator'
    },
    {
        imageUrl: 'img/LoveNeverFeltSoGood.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/0S5EEpFAHcT7cm5XOASc29?utm_source=generator'
    },
    {
        imageUrl: 'img/Happiness.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/7aSyG7cskkG3zhfO2JLxq3?utm_source=generator'
    },
    {
        imageUrl: 'img/MyFavoritePart.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/66wkCYWlXzSTQAfnsPBptt?utm_source=generator'
    },
    {
        imageUrl: 'img/OnlyWannaBeWithYou.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/6ppFSsCpKpOONCuw9hxM3p?utm_source=generator'
    },
    {
        imageUrl: 'img/ChickenWings.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/2s8oj4EPPffG4gxd35nAc4?utm_source=generator'
    },
    {
        imageUrl: 'img/CallMeWhenYouHearThisSong.png',
        spotifyUrl: 'https://open.spotify.com/embed/track/4lLbPTGEAHcWpsbHlskpjc?utm_source=generator'
    },
    {
        imageUrl:'img/Lovesick.png',
        spotifyUrl:"https://open.spotify.com/embed/track/5ppaqjvmfa17yPwCQ3xkxS?utm_source=generator"
    }



    
];

let currentCardIndex = 0;

function updateCard() {
    const { imageUrl, spotifyUrl } = songs[currentCardIndex];
    
    const card = `<div class="card">
    <div class="image-container">
        <img src="${imageUrl}" alt="Spotify Lyrics">
    </div>
    <div class="spotify-container">
        <iframe src="${spotifyUrl}" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    </div>`;

    cardsContainer.innerHTML = card;
}

updateCard();

prevBtn.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex - 1 + songs.length) % songs.length;
    updateCard();
});

nextBtn.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % songs.length;
    updateCard();
});