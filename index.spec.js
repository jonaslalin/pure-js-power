const assert = require('assert');
const getBreadcrumbs = require('./index');

const breadcrumbs = getBreadcrumbs('Best Buy', [
  'Audio',
  'Headphones',
  'Wireless Headphones',
  'Jaybird Freedom F5'
]);

try {
  assert.deepStrictEqual(breadcrumbs, {
    depth1: 'Best Buy',
    depth2: 'Best Buy|Audio',
    depth3: 'Best Buy|Audio|Headphones',
    depth4: 'Best Buy|Audio|Headphones|Wireless Headphones',
    depth5: 'Best Buy|Audio|Headphones|Wireless Headphones|Jaybird Freedom F5',
    depth6: 'Best Buy|Audio|Headphones|Wireless Headphones|Jaybird Freedom F5|',
    depth7:
      'Best Buy|Audio|Headphones|Wireless Headphones|Jaybird Freedom F5||',
    depth8:
      'Best Buy|Audio|Headphones|Wireless Headphones|Jaybird Freedom F5|||',
    depth9:
      'Best Buy|Audio|Headphones|Wireless Headphones|Jaybird Freedom F5||||',
    depth10:
      'Best Buy|Audio|Headphones|Wireless Headphones|Jaybird Freedom F5|||||'
  });
  console.log('Test success!');
} catch (err) {
  console.error('Test failure!');
}
