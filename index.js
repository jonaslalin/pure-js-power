function getBreadcrumbs(a, b, c = 10, d = 'depth') {
  return Array.apply(null, Array(c - 1)).reduce(
    (e, _, f) => ({
      ...e,
      [`${d}${f + 2}`]: `${e[`${d}${f + 1}`]}|${b[f] || ''}`
    }),
    { [`${d}1`]: a }
  );
}

module.exports = getBreadcrumbs;
