function SalesClientsProgress({ item }) {
  return (
    <li className="flex items-center justify-between">
      <p className="text-sm text-gray-400">{item.weekDay}</p>
      <div className="flex w-10/12 flex-col gap-1">
        <progress
          value={item.newClients}
          max="1500"
          className="new-clients-progress h-1 w-full"
        />
        <progress
          value={item.recurringClients}
          max="10000"
          className="recurring-clients-progress h-1 w-full"
        />
      </div>
    </li>
  );
}

export default SalesClientsProgress;
