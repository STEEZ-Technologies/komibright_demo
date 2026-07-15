import type { SpecRow } from "@/data/types";

export default function SpecTable({ rows }: { rows: SpecRow[] }) {
  return (
    <table className="spec-table">
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            <th>{r.k}</th>
            <td>{r.v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
