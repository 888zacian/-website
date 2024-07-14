// DOMContentLoadedイベントが発生したときに実行される関数を設定
document.addEventListener("DOMContentLoaded", function() {
  
});
// メニューを表示・非表示にする関数
function toggleMenu() {
    var menu = document.getElementById("dropdown-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none"; // 表示している場合は非表示にする
    } else {
        menu.style.display = "block"; // 非表示の場合は表示する
    }
}
// ページが読み込まれたときに実行する処理
window.onload = function() {
    // フッターをクリックしたときにページの先頭までスクロールする関数
    document.querySelector('footer').addEventListener('click', function() {
        // ページの先頭までスクロールする
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // スムーズにスクロールする
        });
    });

    // スクロールトップボタンの表示/非表示を制御する関数
    window.onscroll = function() {
        // 現在のスクロール位置を取得
        var currentScrollPos = window.pageYOffset;

        // スクロール位置が300px以上ならばスクロールトップボタンを表示、そうでなければ非表示
        if (currentScrollPos > 300) {
            document.getElementById("scrollToTop").style.display = "block";
        } else {
            document.getElementById("scrollToTop").style.display = "none";
        }
    };
};
