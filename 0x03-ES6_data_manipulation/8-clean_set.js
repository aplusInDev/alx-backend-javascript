export default function cleanSet(set, startString) {
  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString === ''
  ) {
    return '';
  }
  const newSet = [];
  for (const value of set) {
    if (value && value.startsWith(startString)) {
      newSet.push(value.slice(startString.length));
    }
  }
  return newSet.join('-');
}
