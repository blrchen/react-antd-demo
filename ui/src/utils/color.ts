import ColorHash from 'color-hash'

const colorHash = new ColorHash()

export const getHashCode = (str = '') => {
  let hash = 1315423911
  for (let i = str.length - 1; i >= 0; i--) {
    const ch = str.charCodeAt(i)
    hash ^= (hash << 5) + ch + (hash >> 2)
  }
  return hash & 0x7ffffff
}

export const getColor = (value = '') => {
  return colorHash.hex(value) //`#${getHashCode(value).toString(16).substring(0, 6)}`
}
