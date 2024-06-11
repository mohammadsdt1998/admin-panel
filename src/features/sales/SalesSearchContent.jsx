import { CiUser } from "react-icons/ci";
import { SlUserFemale } from "react-icons/sl";
import { useSales } from "../../contexts/SalesContext";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

function SalesSearchContent() {
  const { viewsData, organicData } = useSales();

  {
    /* pageviews data */
  }

  const male = (viewsData[0] && viewsData[0].male) || 0;
  const female = (viewsData[0] && viewsData[0].female) || 0;

  const totalPageviews = male + female;

  const malePercentage = Math.round((male * 100) / totalPageviews);
  const femalePercentage = Math.round((female * 100) / totalPageviews);

  {
    /* pageviews data */
  }

  {
    /* organic data */
  }
  const organicSearch = (organicData[0] && organicData[0].organicSearch) || 0;
  const facebook = (organicData[0] && organicData[0].facebook) || 0;
  const twitter = (organicData[0] && organicData[0].twitter) || 0;
  const linkedin = (organicData[0] && organicData[0].linkedin) || 0;

  const totalOrganic = Object.values(organicData[0] || {}).reduce(
    (acc, curr) => acc + curr,
    0,
  );

  const organicSearchPercentage = Math.round(
    (organicSearch * 100) / totalOrganic,
  );
  const facebookPercentage = Math.round((facebook * 100) / totalOrganic);
  const twitterPercentage = Math.round((twitter * 100) / totalOrganic);
  const linkedinPercentage = Math.round((linkedin * 100) / totalOrganic);
  {
    /* organic data */
  }
  return (
    <div className="col-span-1 flex flex-col gap-12">
      {/* pageviews content and progress */}
      <div className="w-full space-y-4 px-3 py-2">
        <div className="flex w-full flex-col items-start gap-1">
          <div className="flex w-full items-center justify-between text-slate-100">
            <p className="flex items-center gap-2">
              <CiUser className="text-xl" />
              Male
            </p>

            <p className="font-semibold">{malePercentage}%</p>
          </div>
          <progress
            value={male}
            max={totalPageviews}
            className="pageviews-progress h-1 w-full"
          />
        </div>
        <div className="flex w-full flex-col items-start gap-1">
          <div className="flex w-full items-center justify-between gap-3 text-slate-100">
            <p className="flex items-center gap-2">
              <SlUserFemale className="text-lg" />
              Female
            </p>

            <p className="font-semibold">{femalePercentage}%</p>
          </div>
          <progress
            value={female}
            max={totalPageviews}
            className="pageviews-progress h-1 w-full"
          />
        </div>
      </div>

      {/* pageviews content and progress */}

      {/* organic content and progress */}

      <div className="w-full space-y-4 px-3 py-2">
        <div className="flex w-full flex-col items-start gap-1">
          <div className="flex w-full items-center justify-between text-slate-100">
            <p className="flex items-center gap-2">
              <FaGoogle className="text-xl" />
              Organic Search
            </p>

            <p className="font-semibold">
              {organicSearch}{" "}
              <span className="text-sm text-slate-400">
                ({organicSearchPercentage}%)
              </span>
            </p>
          </div>
          <progress
            value={organicSearch}
            max={totalOrganic}
            className="organic-progress h-1 w-full"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-1">
          <div className="flex w-full items-center justify-between text-slate-100">
            <p className="flex items-center gap-2">
              <FaFacebook className="text-xl" />
              Facebook
            </p>

            <p className="font-semibold">
              {facebook}{" "}
              <span className="text-sm text-slate-400">
                ({facebookPercentage}%)
              </span>
            </p>
          </div>
          <progress
            value={facebook}
            max={totalOrganic}
            className="organic-progress h-1 w-full"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-1">
          <div className="flex w-full items-center justify-between text-slate-100">
            <p className="flex items-center gap-2">
              <FaTwitter className="text-xl" />
              Twitter
            </p>

            <p className="font-semibold">
              {twitter}{" "}
              <span className="text-sm text-slate-400">
                ({twitterPercentage}%)
              </span>
            </p>
          </div>
          <progress
            value={twitter}
            max={totalOrganic}
            className="organic-progress h-1 w-full"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-1">
          <div className="flex w-full items-center justify-between text-slate-100">
            <p className="flex items-center gap-2">
              <IoLogoLinkedin className="text-xl" />
              Linkedin
            </p>

            <p className="font-semibold">
              {linkedin}{" "}
              <span className="text-sm text-slate-400">
                ({linkedinPercentage}%)
              </span>
            </p>
          </div>
          <progress
            value={linkedin}
            max={totalOrganic}
            className="organic-progress h-1 w-full"
          />
        </div>
      </div>

      {/* organic content and progress */}
    </div>
  );
}

export default SalesSearchContent;
