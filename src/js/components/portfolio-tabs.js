var portfolioTabs = document.querySelector('.portfolio__tabs');
var portfolioElement = document.querySelectorAll('.portfolio__element');
var portfolioBtn = document.querySelectorAll('.portfolio__btn');

if (portfolioTabs) {
  portfolioTabs.addEventListener('click', (e) => {
    var target = e.target;
    if (target.classList.contains("portfolio__btn")) {
      var filter = target.dataset.filter;

      portfolioBtn.forEach(el => {
        el.classList.remove('portfolio__btn--active');
        target.classList.add('portfolio__btn--active');
      });

      portfolioElement.forEach(el => {
        el.style.display = 'none';
        el.classList.remove('portfolio__element--visible');
      });
      document.querySelectorAll(`[data-target="${filter}"]`).forEach(el => {
        el.closest('.portfolio__element').classList.add('portfolio__element--visible');
      });

      if (filter == 'all') {
        portfolioElement.forEach(el => {
          el.classList.add('portfolio__element--visible');
        });
      }
    }
  });
}
