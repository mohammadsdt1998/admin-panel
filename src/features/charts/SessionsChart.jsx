import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import DropDownBtn from "../../ui/DropDownBtn";

function SessionsChart({ socialMediaData }) {
  const totalSessions = Math.round(
    socialMediaData.reduce((acc, item) => acc + item.sessions, 0) / 1000,
  );

  return (
    <div className="col-span-1 h-40 w-full rounded-md bg-red-400">
      <div className="flex h-full w-full flex-col items-baseline text-black">
        {/* chart header */}
        <div className="flex h-full w-full flex-col items-start justify-around p-4 text-slate-100">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-xl font-semibold">{totalSessions}K</h1>
            <DropDownBtn />
          </div>
          <p>Sessions</p>
        </div>

        {/* chart header */}

        {/* chart content */}

        <div className="h-full w-full">
          <ResponsiveContainer width="99%" height="100%">
            <BarChart width={100} height={100} data={socialMediaData}>
              <Bar
                dataKey="sessions"
                fill="#fca5a5"
                barSize={8}
                onMouseEnter={{ background: "red" }}
              />
              <Tooltip
                cursor={{ fill: "transparent", strokeWidth: 0 }}
                contentStyle={{ background: "transparent", border: "none" }}
                itemStyle={{ display: "none" }}
                labelStyle={{ color: "#f3f4f7", fontWeight: "bold" }}
                labelFormatter={(index) =>
                  `${(socialMediaData[index] && socialMediaData[index].name) || ""}`
                }
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* chart content */}
      </div>
    </div>
  );
}

export default SessionsChart;
