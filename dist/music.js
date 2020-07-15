const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	 {
        name: 'A Theme of ONE PUNCH MAN ~正義執行~',
        artist: 'One Punch',
        url: 'https://music.163.com/song/media/outer/url?id=1426242580.mp3',
        cover: '/images/music/onePunch.png',
      },
	 {
        name: 'Another Day Of Sun (From "La La Land" Soundtrack)',
        artist: 'La La Land Cast',
        url: 'https://music.163.com/song/media/outer/url?id=445867332.mp3',
        cover: '/images/music/lalaland.png',
      },
	  {
        name: "Sound of Silence",
        artist: 'Paul Simon',
        url: 'https://music.163.com/song/media/outer/url?id=1821488.mp3',
        cover: '/images/music/sound.png',
      },
      {
        name: "Grand Blue",
        artist: '湘南乃風',
        url: 'https://music.163.com/song/media/outer/url?id=1306000879.mp3',
        cover: '/images/music/bilan.png',
      }
	  
	  
    ]
});