import { Link } from '@mui/material'

export function Tag (props: {tag: string}) {
  return <Link className='tile-tag'>#{props.tag}</Link>
}

export function TagList (props: {tags: readonly string[]}) {
  return (<>{props.tags.map(tag => Tag({ tag }))}</>)
}
