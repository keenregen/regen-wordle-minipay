export const generateCircles = () => {
  const circles = [];

  while (circles.length < 5) {
    const center = {
      x: Math.floor(Math.random() * 61) + 20,
      y: Math.floor(Math.random() * 61) + 20,
    };

    const radius = Math.floor(Math.random() * 2) + 5;

    // Check if the new circle overlaps with any existing circle
    let overlap = false;
    for (let i = 0; i < circles.length; i++) {
      const otherCenter = circles[i].center;
      const dx = center.x - otherCenter.x;
      const dy = center.y - otherCenter.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < radius + circles[i].radius + 12) {
        overlap = true;
        break;
      }
    }

    // Add the circle if it doesn't overlap with any existing circle
    if (!overlap) {
      circles.push({
        center,
        radius,
      });
    }
  }

  return circles;
};
