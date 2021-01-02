export const getRandomColor = () => {
  return "#" + Math.random().toString(16).substring(2, 8);
};

export const textColor = (backgroundColor) => {
  backgroundColor = backgroundColor.replace("#", "");
  let red = parseInt(backgroundColor, 16) >>> 16; // parseInt(bg.substring(0,2), 16);
  let green = (parseInt(backgroundColor, 16) >>> 8) & 255; // parseInt(bg.substring(2,4), 16)
  let blue = parseInt(backgroundColor, 16) & 255; // parseInt(bg.slice(4,6), 16);
  let intensity = red * 0.299 + green * 0.587 + blue * 0.114;
  return intensity <= 185;
};

export const getGradientColors = () => {
  let startColor = getRandomColor();
  while (!textColor(startColor)) {
    startColor = getRandomColor();
  }
  const endColor = getRandomColor();
  return { startColor, endColor };
};
