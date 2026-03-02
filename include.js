/* ヘッダー */
fetch("header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;
  });

/* 目次 */
fetch("toc.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("toc-area").innerHTML = html;
  });

/* 人気記事 */
fetch("article.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("article-area").innerHTML = html;
  });

/* 目次折りたたみ */
window.addEventListener("scroll", () => {
  const toc = document.getElementById("toc");
  if (!toc) return;

  if (window.scrollY > 300) {
    toc.classList.add("collapsed");
  } else {
    toc.classList.remove("collapsed");
  }
});
