import ReactMarkdown from 'react-markdown'

interface MarkdownProps {
  children: React.ReactNode;
  className?: string;
}

const LinkRenderer = ({ href, children }: any): JSX.Element => {
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  } else {
    return <a target="_blank" rel="noopener noreferrer">{children}</a>
  }
}

const Markdown: React.FC<MarkdownProps> = ({ children, className = '' }) => {
  return (
    <ReactMarkdown className={className} components={{ a: LinkRenderer }}>
      {children?.toString()}
    </ReactMarkdown>
  )
}

export default Markdown
