export function Switch({ checked, onChange }) {
  return <input type="checkbox" checked={checked} onChange={onChange} className="w-5 h-5" />;
}
