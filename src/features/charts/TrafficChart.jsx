import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import TrafficChartHeader from "./TrafficChartHeader";
import TrafficChartFooter from "./TrafficChartFooter";

function TrafficChart({ socialMediaData }) {
  const yTicks = [0, 50, 100];

  return (
    <div className="flex h-auto w-full flex-col gap-6 rounded-md border border-gray-600 bg-primary">
      <TrafficChartHeader />
      <div className="h-full w-full">
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart
            width={500}
            height={400}
            data={socialMediaData}
            margin={{
              top: 20,
              right: 40,
              bottom: 20,
            }}
          >
            <CartesianGrid stroke="#374151" />
            <XAxis
              dataKey="name"
              stroke="#cbd5e1"
              fontSize={12}
              fontWeight={500}
            />
            <YAxis
              ticks={yTicks}
              stroke="#cbd5e1"
              fontSize={12}
              fontWeight={500}
            />
            <Tooltip
              cursor={{ fill: "transparent", strokeWidth: 0 }}
              contentStyle={{ background: "transparent", border: "none" }}
              itemStyle={{ display: "none" }}
              labelStyle={{ color: "#374151", fontWeight: "bold" }}
              labelFormatter={(index) =>
                `${(socialMediaData[index] && socialMediaData[index].name) || ""}`
              }
            />
            <Area
              type="monotone"
              dataKey="unique"
              stroke="#1f77b4"
              fill="#cce5ff"
            />
            <Area
              type="monotone"
              dataKey="unique"
              stroke="#1f77b4"
              strokeWidth={2}
            />

            <Line
              type="monotone"
              dataKey="visits"
              stroke="#166534"
              strokeWidth={2}
            />

            <Line
              type="monotone"
              fill="#b91c1c"
              dataKey="new_users"
              stroke="#b91c1c"
              strokeDasharray="5 5"
              strokeWidth={2}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <TrafficChartFooter socialMediaData={socialMediaData} />
    </div>
  );
}

export default TrafficChart;
