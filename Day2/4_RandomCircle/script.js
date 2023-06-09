// 変数
let positionX;
let positionY;

// 全体の初期化（最初に一回だけ呼ばれる）
function setup() {
  // キャンバスをつくる
  createCanvas(windowWidth, windowHeight);

  // 背景をぬりつぶす
  background(0, 0, 40);

  // 輪郭（りんかく）を消す
  noStroke();

  // X座標を0（左側）で初期化
  positionX = 0;
}

// 計算と表示
function draw() {
  // X座標を2ずつふやす
  positionX += 2;

  // Y座標をランダムに決める
  positionY = random(height);

  // ぬりつぶす
  fill(random(255), 255, random(255), 120);

  // 円を描く
  ellipse(positionX, positionY, random(100, 200));
}
