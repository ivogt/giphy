export default (t, length = 50) =>
  (t + "").length > length ? t.substring(0, length) + "... " : t;
