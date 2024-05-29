import {
  getCalendarData,
  getFacebookData,
  getLinkedinData,
  getSocialMedia,
  getTwitterData,
} from "../services/getData";
import { useLoaderData } from "react-router-dom";
import UsersChart from "../components/charts/UsersChart";
import IncomeChart from "../components/charts/IncomeChart";
import ConversationChart from "../components/charts/ConversationChart";
import SessionsChart from "../components/charts/SessionsChart";
import TrafficChart from "../components/charts/TrafficChart";
import SmallCharts from "../components/charts/SmallCharts";

function Home() {
  const {
    socialMediaData,
    facebookData,
    twitterData,
    linkedinData,
    calendarData,
  } = useLoaderData();

  return (
    <div className="mx-auto flex h-auto w-full max-w-7xl flex-col gap-5 p-4">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
        <UsersChart socialMediaData={socialMediaData} />
        <IncomeChart socialMediaData={socialMediaData} />
        <ConversationChart socialMediaData={socialMediaData} />
        <SessionsChart socialMediaData={socialMediaData} />
      </div>
      <TrafficChart socialMediaData={socialMediaData} />
      <SmallCharts
        facebookData={facebookData}
        twitterData={twitterData}
        linkedinData={linkedinData}
        calendarData={calendarData}
      />
    </div>
  );
}

export async function loader() {
  const [
    socialMediaData,
    facebookData,
    twitterData,
    linkedinData,
    calendarData,
  ] = await Promise.all([
    getSocialMedia(),
    getFacebookData(),
    getTwitterData(),
    getLinkedinData(),
    getCalendarData(),
  ]);

  return {
    socialMediaData,
    facebookData,
    twitterData,
    linkedinData,
    calendarData,
  };
}

export default Home;
