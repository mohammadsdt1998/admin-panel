import CalendarChart from "./CalendarChart";
import FacebookChart from "./FacebookChart";
import LinkedinChart from "./LinkedinChart";
import TwitterChart from "./TwitterChart";

function SmallCharts({
  facebookData,
  twitterData,
  linkedinData,
  calendarData,
}) {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
      <FacebookChart facebookData={facebookData} />
      <TwitterChart twitterData={twitterData} />
      <LinkedinChart linkedinData={linkedinData} />
      <CalendarChart calendarData={calendarData} />
    </div>
  );
}

export default SmallCharts;
