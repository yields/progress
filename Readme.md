
# progress

  generic progress api

## Installation

    $ component install yields/progress

## API

#### new Progress(total)

initialize new progress obj with total `length/bytes etc..`

#### .update(n)

update progress to `n`
the method emits `.progress` with:

{
  total: 1024,
  progress: 453,
  percent: 44
}


## License

  MIT
