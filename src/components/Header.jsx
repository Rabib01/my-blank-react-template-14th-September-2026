const options = {
  weekday: "long", // sunday - saturday
  month: "short", // month is month
  day: "numeric", // this is the date
  dayPeriod: "narrow",
};

const currentTime = Date.now();
const formattedTimeParts = new Intl.DateTimeFormat(
  "en-Us",
  options,
).formatToParts(currentTime);

const weekday = formattedTimeParts.find((p) => p.type === "weekday").value;
console.log(weekday);
const month = formattedTimeParts.find((p) => p.type === "month").value;
console.log(month);
const day = formattedTimeParts.find((p) => p.type === "day").value;
console.log(day);
const dayPeriod = formattedTimeParts.find((p) => p.type === "dayPeriod").value; // doing this in one line is so very confusing man
const status =
  dayPeriod
    .slice(dayPeriod.lastIndexOf(" ") + 1)
    .charAt(0)
    .toUpperCase() + dayPeriod.slice(dayPeriod.lastIndexOf(" ") + 1).slice(1);

export default function Header() {
  return (
    <header className="border-b border-neutral-800 bg-gradient-to-b from-neutral-950 via-neutral-900/80 to-transparent">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Vault overview
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <h1 className="text-4xl font-semibold tracking-tight">
              Good Morning, World!
            </h1>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800/80 bg-neutral-900/70 px-4 py-1 text-xs font-medium text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              Monday, Nov 10
            </span>
          </div>
          <p className="text-sm text-neutral-400 max-w-2xl">
            Keep your most-used credentials organised and in sync with every
            device. Review the snapshot below before adding a new bookmark.
          </p>
        </div>
      </div>
    </header>
  );
}

// {
//   const options = {
//     weekday: "long", // sunday - saturday
//     month: "short", // month is month
//     day: "numeric", // this is the date
//   };
//   const currentTime = Date.now();

//   const dateFormat = new Intl.DateTimeFormat("en-US", options);

//   console.log(dateFormat.format(currentTime));

//   // Output : Fridat Sept 18.
//   // Dont want to depend on no Stupid Locale, want to create my own version and this sh** too easy
// }
