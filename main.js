// Emoji mapping
const emojiMap = {
  a: "🍎", b: "🐝", c: "🐱", d: "🐶", e: "🐘", f: "🎏",
  g: "🦒", h: "🏠", i: "🍦", j: "🕹️", k: "🔑", l: "🦁",
  m: "🌝", n: "🥜", o: "🐙", p: "🥞", q: "👸", r: "🤖",
  s: "🐍", t: "🌴", u: "☂️", v: "🎻", w: "🌊", x: "❌",
  y: "🛳️", z: "🦓", " ": "⬜"
};
const reverseMap = {};
for (let key in emojiMap) {
  reverseMap[emojiMap[key]] = key;
}
function encodeMessage() {
  const input = document.getElementById("inputMessage").value.toLowerCase();
  let encoded = "";
  for (let char of input) {
    encoded += emojiMap[char] || char; // Keep original if not in map
  }
  document.getElementById("resultBox").innerText = encoded;
}
function decodeMessage() {
  const input = document.getElementById("inputMessage").value;
  let decoded = "";
  let i = 0;
  while (i < input.length) {
    let found = false;
    for (let symbol in reverseMap) {
      if (input.startsWith(symbol, i)) {
        decoded += reverseMap[symbol];
        i += symbol.length;
        found = true;
        break;
      }
    }
    if (!found) {
      decoded += input[i];
      i++;
    }
  }
  document.getElementById("resultBox").innerText = decoded;
}
