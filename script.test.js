const { JSDOM } = require('jsdom');
const { showSection } = require('./script');

describe('showSection', () => {
  let document;

  beforeEach(() => {
    const dom = new JSDOM(`<!DOCTYPE html><div>
      <section id="resume" class="hidden"></section>
      <section id="portfolio" class="hidden"></section>
      <section id="blog" class="hidden"></section>
    </div>`);
    document = dom.window.document;
    global.document = document;
  });

  afterEach(() => {
    delete global.document;
  });

  test('displays resume section and hides others', () => {
    showSection('resume');
    expect(document.getElementById('resume').classList.contains('hidden')).toBe(false);
    expect(document.getElementById('portfolio').classList.contains('hidden')).toBe(true);
    expect(document.getElementById('blog').classList.contains('hidden')).toBe(true);
  });
});
