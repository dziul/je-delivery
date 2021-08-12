const createClassName = <K extends string>(data: Record<K, boolean>) => {
  const entries = Object.entries(data)

  const entriesFiltered = entries.filter(([_, value]) => value)

  return entriesFiltered.map(([key]) => key).join(' ')
}

export default createClassName
