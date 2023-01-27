(function ($, document) {

  // get tallest tab__content element
  let height = -1;

  $('.tab__content').each(function () {
    height = height > $(this).outerHeight() ? height : $(this).outerHeight();
    $(this).css('position', 'absolute');
  });


}(jQuery, document));

const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

targets.forEach(target => {
  target.addEventListener('click', () => {
    content.forEach(c => {
      c.classList.remove('active')
    })
    const t = document.querySelector(target.dataset.target)
    t.classList.add('active')
  })
})
