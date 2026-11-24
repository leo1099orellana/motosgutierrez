/**
 * Envuelve contenido que aparece al hacer scroll.
 * dir: 'up' (default) | 'left' | 'right' | 'fade'. delay en milisegundos.
 */
export default function Reveal({ as: Tag = 'div', dir = 'up', delay = 0, className = '', style, children, ...rest }) {
  return (
    <Tag
      className={`reveal ${className}`}
      data-dir={dir}
      style={delay ? { ...style, '--reveal-delay': `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
