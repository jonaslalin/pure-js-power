function getBreadcrumbs(site, urlTree, maxSize = 10) {
  return Array.apply(null, Array(maxSize - 1)).reduce(
    (res, _, i) => ({
      ...res,
      [`depth${i + 2}`]: res[`depth${i + 1}`] + '|' + (urlTree[i] || '')
    }),
    { depth1: site }
  );
}

module.exports = getBreadcrumbs;
