const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Grand Blue",
        artist: '湘南乃風',
        url: 'https://music.163.com/song/media/outer/url?id=1306000879.mp3',
        cover: '/images/music/bilan.png',
      }
    ]
});