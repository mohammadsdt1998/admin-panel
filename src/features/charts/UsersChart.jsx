import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import DropDownBtn from "../../ui/DropDownBtn";

function UsersChart({ socialMediaData }) {
  const totalUsers = Math.round(
    socialMediaData.reduce((acc, item) => acc + item.users, 0) / 1000,
  );

  return (
    <div className="col-span-1 flex h-40 w-full flex-col gap-10 rounded-md bg-violet-700">
      <div className="flex h-full w-full flex-col items-baseline text-black">
        {/* chart header */}
        <div className="flex h-full w-full flex-col items-start justify-around p-4 text-slate-100">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-xl font-semibold">{totalUsers}K</h1>
            <DropDownBtn />
          </div>
          <p>Users</p>
        </div>

        {/* chart header */}

        {/* chart content */}
        <div className="mb-3 h-full w-full">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart width={150} height={100} data={socialMediaData}>
              <Line
                type="monotone"
                dataKey="users"
                stroke="#cbd5e1"
                strokeWidth={2}
                fill="#7c3aed"
              />
              <Tooltip
                cursor={{ strokeWidth: 0 }}
                contentStyle={{ background: "transparent", border: "none" }}
                itemStyle={{ display: "none" }}
                labelStyle={{ color: "#f3f4f7", fontWeight: "bold" }}
                labelFormatter={(index) =>
                  `${(socialMediaData[index] && socialMediaData[index].name) || ""}`
                }
              />
            </LineChart>
          </ResponsiveContainer>

          {/* chart content */}
        </div>
      </div>
    </div>
  );
}

export default UsersChart;
