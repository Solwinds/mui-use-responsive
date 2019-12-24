'use strict';

import { useMediaQuery } from 'react-responsive'

export default function useResponsive(designWidth = 1920, breakpoints = [600, 960, 1280, 1600, 1920,]) {
  //const theme = useTheme()

  const breakpoint = breakpoints.slice().reverse().reduce((output, width) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const matches = useMediaQuery({query: `(min-width: ${width+1}px)`})
    return !output && matches ? width : output
  }, 0) || breakpoints[0]

  return breakpoint / designWidth
}

export const responsive = (...values) => {
  //eslint-disable-next-line fp/no-let
  let unit = 'px'

  if (isNaN(values[values.length - 1])) {
    unit = values.pop()
  }

  return ({scale}) => {
    return values.map(val => '' + val * scale + unit).join(' ')
  }
}
