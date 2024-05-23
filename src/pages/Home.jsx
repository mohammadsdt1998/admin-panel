import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import DropDownBtn from "../ui/DropDownBtn";
import { getSocialMedia } from "../services/getData";
import { useLoaderData } from "react-router-dom";
import UsersChart from "../components/charts/UsersChart";
import IncomeChart from "../components/charts/IncomeChart";
import ConversationChart from "../components/charts/ConversationChart";
import SessionsChart from "../components/charts/SessionsChart";

function Home() {
  const socialMediaData = useLoaderData();

  return (
    <div className="mx-auto flex h-screen w-full flex-col p-4">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
        <UsersChart socialMediaData={socialMediaData} />
        <IncomeChart socialMediaData={socialMediaData} />
        <ConversationChart socialMediaData={socialMediaData} />
        <SessionsChart socialMediaData={socialMediaData} />
      </div>
    </div>
  );
}

export async function loader() {
  const socialMediaData = await getSocialMedia();
  return socialMediaData;
}

export default Home;
