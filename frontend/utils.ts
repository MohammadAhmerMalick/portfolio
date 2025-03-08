export const classNames = (...args: unknown[]) => {
  return args
    .flat()
    .filter((x) => typeof x === 'string')
    .join(' ')
    .trim()
}

export const uuid = () => Math.floor(Math.random() * 10 ** 15).toString()

export const capitalize = (string: string | undefined) =>
  string ? string.charAt(0).toUpperCase() + string.slice(1) : ''

export enum ContactEnum {
  UAEContactNumber = '971545149849',
  PakistanContactNumber = '923494941593',
  email = 'mohammadahmermalick@gmail.com',
  emailWithLinebreak = 'mohammadahmermalick\n@gmail.com',
  PakistanLocation = 'Karchi, Sindh, Pakistan',
  UAELocation = 'Dubai, UAE',
}

export enum SectionIds {
  Experience = 'Experience',
}
