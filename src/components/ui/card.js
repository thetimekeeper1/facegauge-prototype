export function Card({ children, className }) {
  return <div className={`rounded-xl shadow-lg bg-white dark:bg-gray-800 p-4 ${className || ""}`}>{children}</div>;
}

export function CardContent({ children }) {
  return <div className="space-y-2">{children}</div>;
}
