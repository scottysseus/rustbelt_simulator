/**
 * TextUnit represents a unit of text that should not be broken when wrapping.
 * @param props {text: string}
 * @returns a unit of un-wrappable text.
 */
export function TextUnit (props: {text: string}) {
  return <span style={{ whiteSpace: 'nowrap' }}>{props.text}</span>
}
