export default function MiComponenteDeFiltro({ column }: any) {
  const { filterValue, setFilter } = column;

  return (
    <input
      value={filterValue || ''}
      onChange={(e) => setFilter(e.target.value)}
      placeholder={`Filtrar ${column.Header.toLowerCase()}...`}
    />
  );
}
