import { cn } from "@/lib/utils";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

function AnalyticsCard({
  aria,
  change,
  increament,
  total,
  title,
}: {
  total: string | number;
  aria: string;
  increament: boolean;
  change: string;
  title: string;
}) {
  return (
    <article
      className="bg-gray-100 dark:bg-[#262627] w-full md:shrink-0 md:w-[306.59px] h-[120.34px] flex items-center gap-5 p-6 rounded-[19px]"
      role="region"
      aria-label={aria}
    >
      {increament ? (
        <div className="items-center justify-center rounded-lg shrink-0 bg-[#6359E9] h-[42.98px] w-[42.98px] flex">
          <ArrowUpRight aria-hidden="true" />
        </div>
      ) : (
        <div className="items-center justify-center rounded-lg shrink-0 bg-[#64CFF6] h-[42.98px] w-[42.98px] flex">
          <ArrowDownLeft aria-hidden="true" />
        </div>
      )}
      <div className="w-full gap-1">
        <h3 className="text-base font-normal text-[#8C89B4]">{title}</h3>
        <div className="flex items-center gap-1 justify-between">
          <p className="text-2xl font-extrabold">{total}</p>
          <div
            className={cn(
              "flex items-center justify-center bg-[#EB001B26]/15 w-[60.17px] h-[22px] rounded-lg",
              increament && "bg-[#02b15a]/15"
            )}
          >
            <p
              className={cn(
                "text-red-500 text-xs",
                increament && "text-green-500"
              )}
            >
              {change}%
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default AnalyticsCard;
