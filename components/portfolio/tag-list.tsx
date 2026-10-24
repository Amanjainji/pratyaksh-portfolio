export function TagList({ tags, className = '' }: { tags: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Tags">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-cream/30 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cream"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
