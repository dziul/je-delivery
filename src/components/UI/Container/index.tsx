import React from 'react'

import './styles.scss'

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className: classNameProp,
  ...restProps
}) => {
  const className = ['c-ui__container', classNameProp].filter(Boolean).join(' ')
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  )
}

export default Container
