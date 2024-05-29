import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

function LinkedinChart({ linkedinData }) {
  const totalContacts = linkedinData.reduce(
    (acc, item) => acc + item.contacts,
    0,
  );

  const totalFeeds = linkedinData.reduce((acc, item) => acc + item.feeds, 0);

  return (
    <div className="col-span-1 flex h-52 w-full flex-col gap-10 rounded-md border border-gray-600 bg-primary">
      <div className="flex h-full w-full flex-col items-baseline text-black">
        <div className="linkedin mb-3 h-32 w-full rounded-md">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={150}
              height={90}
              data={linkedinData}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <Area
                type="monotone"
                dataKey="contacts"
                stroke="#f3f4f7"
                strokeWidth={2}
                fill="#bfdbfe"
              />
              <Tooltip
                cursor={{ strokeWidth: 0 }}
                contentStyle={{ background: "transparent", border: "none" }}
                itemStyle={{ display: "none" }}
                labelStyle={{ color: "#f3f4f7", fontWeight: "bold" }}
                labelFormatter={(index) =>
                  `${(linkedinData[index] && linkedinData[index].month) || ""}`
                }
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mb-2 mr-2 flex w-full flex-grow items-center justify-around">
          <div className="flex flex-1 flex-col items-center justify-center">
            <h1 className="text-lg font-semibold text-slate-100">
              {totalContacts}
            </h1>
            <h2 className="font-medium uppercase text-gray-600">contacts</h2>
          </div>
          <div className="h-12 w-[1px] bg-gray-600"></div>
          <div className="flex flex-1 flex-col items-center justify-center">
            <h1 className="text-lg font-semibold text-slate-100">
              {totalFeeds}
            </h1>
            <h2 className="font-medium uppercase text-gray-600">feeds</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkedinChart;
