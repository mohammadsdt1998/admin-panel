import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import DropDownBtn from "../../ui/DropDownBtn";

function IncomeChart({ socialMediaData }) {
  const totalIncome = socialMediaData.reduce(
    (acc, item) => acc + item.income,
    0,
  );
  const averageIncome = Math.round(totalIncome / socialMediaData.length);

  return (
    <div className="col-span-1 h-40 w-full rounded-md bg-blue-500">
      <div className="flex h-full w-full flex-col items-baseline text-black">
        {/* chart header */}
        <div className="flex h-full w-full flex-col items-start justify-around p-4 text-slate-100">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-xl font-semibold">${averageIncome}</h1>
            <DropDownBtn />
          </div>
          <p>Income</p>
        </div>

        {/* chart header */}

        {/* chart content */}
        <div className="mb-3 h-full w-full">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart width={150} height={100} data={socialMediaData}>
              <Line
                type="monotone"
                dataKey="income"
                stroke="#cbd5e1"
                strokeWidth={2}
                fill="#60a5fa"
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
        </div>

        {/* chart content */}
      </div>
    </div>
  );
}

export default IncomeChart;
