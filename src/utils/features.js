const intersection = (array1, array2) => array1.filter((value) => array2.includes(value));

export function getFeatures(str) {
  const featuresString =
    typeof str === 'undefined' ? localStorage.getItem('corelab-features') : str;

  let features;
  try {
    features = JSON.parse(featuresString);
  } catch (e) {
    features = featuresString;
  }

  if (!features && DOMAIN_ENVIRONMENT === 'site') {
    return [];
  }

  if (typeof features === 'string') {
    return [features];
  }

  if (Array.isArray(features)) {
    return features;
  }

  if (typeof features === 'object') {
    const changeFeatures = (features && Object.keys(features)) || [];
    return changeFeatures?.filter((feature) => features[feature] === true);
  }

  return [];
}
export function setFeatures(features) {
  const proFeatures = typeof features === 'string' ? [features] : features;
  return localStorage.setItem('corelab-features', JSON.stringify(proFeatures));
}

export function hasPermissionFeatures(arr) {
  const FEATURES = getFeatures();
  if (FEATURES.length === 0) return true;
  const permissions = !Array.isArray(arr) ? [arr] : arr;
  const calc = intersection(FEATURES, permissions);
  return calc.length > 0;
}

export function hasFeature(features, value) {
  if (!Array.isArray(features)) return -1;
  const index = features.findIndex((key) => key === value);
  return index > -1;
}

export function checkFeature(value) {
  const features = getFeatures();
  return hasFeature(features, value);
}
