export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`ai-custom-columns-${cols.length}-cols`);

  // setup image ai-custom-columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('ai-custom-columns-img-col');
        }
      }
    });
  });
}