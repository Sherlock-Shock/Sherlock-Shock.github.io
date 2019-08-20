const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Epilogue",
        artist: 'Justin Hurwitz',
        url: 'https://m7.music.126.net/20190820151555/8ab4749a483985b60b3a9e5df5cf6f1d/ymusic/ac4d/87b5/676a/fde5361494dbc25f28cb24146150bae8.mp3',
        cover: '/images/music/Epilogue.png',
      }
    ]
});