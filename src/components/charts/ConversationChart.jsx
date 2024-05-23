import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import DropDownBtn from "../../ui/DropDownBtn";

function ConversationChart({ socialMediaData }) {
  const totalConversation = socialMediaData.reduce(
    (acc, item) => acc + item.conversation_rate,
    0,
  );
  const averageConversation = Math.round(
    totalConversation / socialMediaData.length,
  );

  return (
    <div className="col-span-1 h-40 w-full rounded-md bg-yellow-500">
      <div className="flex h-full w-full flex-col items-baseline text-black">
        <div className="flex h-full w-full flex-col items-start justify-around p-4 text-slate-100">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-xl font-semibold">{averageConversation}%</h1>
            <DropDownBtn />
          </div>
          <p>Conversation Rate</p>
        </div>

        <div className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={150}
              height={90}
              data={socialMediaData}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <Area
                type="monotone"
                dataKey="conversation_rate"
                stroke="#cbd5e1"
                fill="#fcd34d"
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
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ConversationChart;
