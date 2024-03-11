export const angleToRadian = (x: number) => x * (Math.PI / 180)
export const delay = (seconds: number) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1e3))
