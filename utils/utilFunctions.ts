export const uuid = () => Math.floor(Math.random() * 10 ** 15)

export const capitalize = (string: string | undefined) =>
  string ? string.charAt(0).toUpperCase() + string.slice(1) : ''
