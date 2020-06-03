export default function canIterate(obj) {
  try {
    const f = obj[Symbol.iterator];
    return !!f;
  } catch (e) {
    return false;
  }
}
