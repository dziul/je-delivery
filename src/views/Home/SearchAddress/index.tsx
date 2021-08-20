import React from 'react'

import { searchAddress } from '~/http/services/mapbox/geocoding'
import { GeocodingPropFeature } from '~/http/services/mapbox/geocoding/types'
import { createClassName, getKeyOfKeyboard } from '~/utils'

import { MdSearch } from 'react-icons/md'

import './styles.scss'
import { useAppDispatch } from '~/store/hook'
import { setAddress } from '~/store/user'
import { useAppHistory } from '~/routes'

const SearchAddress: React.FC = () => {
  const [isFocus, setIsFocus] = React.useState(false)
  const [featureList, setFeatureList] = React.useState<GeocodingPropFeature[]>([])

  const [value, setValue] = React.useState('')

  const dispatch = useAppDispatch()

  const history = useAppHistory()

  const rootRef = React.useRef<HTMLDivElement>(null)

  const className = createClassName({
    'c-home__search-address': true,
    'is-focused': isFocus,
  })

  const placeholder = !isFocus
    ? 'Insira o endereço para ver os preços'
    : 'Insira o endereço com número'

  React.useEffect(() => {
    const handle = (event: MouseEvent) => {
      const contains = rootRef.current?.contains(event.target as HTMLElement)

      if (!contains) {
        setValue('')
        setFeatureList([])
      }

      setIsFocus(!!contains)
    }

    document.addEventListener('mousedown', handle)
    return () => {
      document.removeEventListener('mousedown', handle)
    }
  })

  React.useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      if (value) searchAddress(value).then(setFeatureList)
    }, 150)
    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [value])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: innerValue } = event.target
    setValue(innerValue)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyCode = getKeyOfKeyboard(event)
    switch (keyCode) {
      case 'Escape':
        setIsFocus(false)
        break
      case 'Enter':
        setIsFocus(true)
        break

      default:
        break
    }
  }

  const handleListItemClick =
    ({ place_name, center }: GeocodingPropFeature) =>
    () => {
      dispatch(
        setAddress({
          place: place_name,
          coordinates: center,
        })
      )
      history.push('/produtos')
    }

  return (
    <>
      <div className={className} ref={rootRef}>
        <div className='c-home__search-address__input-container'>
          <span className='c-home__search-address__input-icon'>
            <MdSearch />
          </span>
          <input
            value={value}
            className='c-home__search-address__input'
            autoCapitalize='off'
            autoComplete='off'
            placeholder={placeholder}
            type='text'
            onInput={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className='c-home__search-address__feature-list' hidden={!isFocus}>
          <ul>
            {featureList.map(feature => (
              <li key={feature.id} onClick={handleListItemClick(feature)}>
                {feature.place_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isFocus && <span className='c-home__search-address__overlay'></span>}
    </>
  )
}

export default SearchAddress
