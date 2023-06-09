// 変数
let pianoImage;
let pianoPlayingImage;
let pianoSound;

let drumImage;
let drumPlayingImage;
let drumSound;

// データのロード
function preload() {
  // ピアノの画像
  pianoImage = loadImage('piano_image.png');
  // 演奏中のピアノの画像
  pianoPlayingImage = loadImage('piano_playing_image.png');
  // ピアノのサウンド
  pianoSound = loadSound('piano_sound.mp3');

  // ドラムの画像
  drumImage = loadImage('drum_image.png');
  // 演奏中のドラムの画像
  drumPlayingImage = loadImage('drum_playing_image.png');
  // ドラムのサウンド
  drumSound = loadSound('drum_sound.mp3');
}

// 全体の初期化（最初に一回だけ呼ばれる）
function setup() {
  // キャンバスをつくる
  createCanvas(500, 500);

  // 画像の基準を真ん中にする
  imageMode(CENTER);
}

// 計算と表示
function draw() {
  // 背景をぬりつぶす
  background(0, 0, 40);

  // ピアノのサウンドが再生中だったら
  if (pianoSound.isPlaying()) {
    // 演奏中のピアノの画像を表示する
    image(pianoPlayingImage, 150, 250);
  }
  // それ以外の場合は、ピアノの画像を表示する
  else {
    image(pianoImage, 150, 250);
  }

  // ドラムのサウンドが再生中だったら
  if (drumSound.isPlaying()) {
    // 演奏中のドラムの画像を表示する
    image(drumPlayingImage, 350, 250);
  }
  // それ以外の場合は、ドラムの画像を表示する
  else {
    image(drumImage, 350, 250);
  }
}

// マウスをクリックしたら
function mouseClicked() {
  // キャンバスの真ん中より左側をクリックしたら
  if(mouseX < 250) {
    // ピアノのサウンドを再生する
    pianoSound.play();
  }
  // キャンバスの真ん中より右側をクリックしたら
  else if(mouseX > 250) {
    // ドラムのサウンドを再生する
    drumSound.play();
  }
}
