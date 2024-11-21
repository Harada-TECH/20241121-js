// 監視対象が交差したら（範囲内に現れたら）実行する動作
const showKirin = (entries) => {
  // アニメーションの設定
  const keyframes = {
    opacity: [0, 1],
    translate: ['200px 0', 0],
  };

  // コンソールで監視対象を確認
  // console.log(entries[0].target);

  // アニメーションの実行
  entries[0].target.animate(keyframes, 600);
};

// 監視ロボットの設定
const kirinObserver = new IntersectionObserver(showKirin);

// #kirinを監視するよう指示
kirinObserver.observe(document.querySelector('#kirin'));