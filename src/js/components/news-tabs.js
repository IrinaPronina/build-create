var newsTabs = document.querySelector('.categories__nav');
var newsElement = document.querySelectorAll('.categories__article');
var newsBtn = document.querySelectorAll('.categories__btn');

if (newsTabs) {
  newsTabs.addEventListener('click', (e) => {
    var target = e.target;
    if (target.classList.contains("categories__btn")) {
      var filter = target.dataset.filter;

      newsBtn.forEach(el => {
        el.classList.remove('categories__btn--active');
        target.classList.add('categories__btn--active');
      });

      newsElement.forEach(el => {
        el.style.display = 'none';
        el.classList.remove('categories__article--visible');
      });
      document.querySelectorAll(`[data-target="${filter}"]`).forEach(el => {
        el.closest('.categories__article').classList.add('categories__article--visible');
      });

      if (filter == 'all') {
        newsElement.forEach(el => {
          el.classList.add('categories__article--visible');
        });
      }
    }
  });
}
