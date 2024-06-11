function TrafficChartFooter({ socialMediaData }) {
  const totalVisits = socialMediaData.reduce(
    (acc, item) => acc + item.visits,
    0,
  );
  const totalUnique = socialMediaData.reduce(
    (acc, item) => acc + item.unique,
    0,
  );
  const totalNewUsers = socialMediaData.reduce(
    (acc, item) => acc + item.new_users,
    0,
  );

  return (
    <footer
      className="grid w-full grid-cols-2 items-center justify-around
     gap-5 rounded-b-md border-t border-gray-600 bg-slate-800 py-3 lg:grid-cols-3"
    >
      <div className="col-span-1 flex flex-col items-center justify-center gap-3">
        <h3 className="font-medium text-gray-400">Visits</h3>
        <p className="font-semibold text-slate-200">{totalVisits} Users</p>
        <progress
          value={totalVisits}
          max={250}
          className="visit-progress h-1 w-3/4"
        />
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center gap-3">
        <h3 className="font-medium text-gray-400">Unique</h3>
        <p className="font-semibold text-slate-200">{totalUnique} Users</p>
        <progress
          value={totalUnique}
          max={250}
          className="unique-progress h-1 w-3/4"
        />
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center gap-3">
        <h3 className="font-medium text-gray-400">New Users</h3>
        <p className="font-semibold text-slate-200">{totalNewUsers} Users</p>
        <progress
          value={totalNewUsers}
          max={250}
          className="new-user-progress h-1 w-3/4"
        />
      </div>
    </footer>
  );
}

export default TrafficChartFooter;
