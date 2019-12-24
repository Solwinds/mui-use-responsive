# react-use-responsive

> A react hook to make your react app responsive


## Install

```
$ npm install react-use-responsive
```


## Usage

```js
import useResponsive, { responsive } from 'react-use-responsive'

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: responsive(24),
  },
}))

const ResponsiveHeading = ({ className, ...props }) => {
  const scale = useResponsive(1920, [600, 960, 1280, 1600, 1920])
  const classes = useStyles({scale: scale})

  return <Typography className={clsx(className, classes.root)} { ...props } />
}
```


## API

### default function ( mainWidth = 1920, breakpoints = [600, 960, 1280, 1600, 1920] )

#### mainWidth

Type: `integer`

The main full width value in pixel which is used in design.

#### options

Type: `array of integers`

Breakpoint values in pixel.

### responsive( value1, ..., unit='px' )

#### value

Type: `integer`

#### unit

Type: `string`
