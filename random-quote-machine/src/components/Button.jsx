export default function Button({
  children,
  newQuote,
  id,
  title,
  href,
  ...props
}) {
  return newQuote ? (
    <button className='button' id='new-quote' {...props}>
      {children}
    </button>
  ) : (
    <a className='button' id={id} title={title} target='_blank' href={href}>
      {children}
    </a>
  )
}
