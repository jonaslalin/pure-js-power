function getBreadcrumbs(site, urlTree, maxSize = 10) {
  const augmentedUrlTree = [site, ...urlTree];
  return Array.apply(null, Array(maxSize)).reduce(
    (res, _, i) => ({
      ...res,
      [`depth${i + 1}`]: Array.apply(null, Array(i + 1))
        .map((__, j) => augmentedUrlTree[j] || '')
        .join('|')
    }),
    {}
  );
}

module.exports = getBreadcrumbs;
