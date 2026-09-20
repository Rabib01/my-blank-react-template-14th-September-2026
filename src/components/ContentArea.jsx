import ContentAreaCardComponents from "./ContentAreaCardComponents";

// import SearchSortFilter from "./SearchSortFilter";

{
  /**
  {
        id: crypto.randomUUID(),
        url,
        userName,
        category,
        password,
        brandColor: colorPickerHex,
        brandBackGround: lighterBackGround,
      }, 
      */
}
//
// from the url i have to extract the form name like facebook from facebook.com
// from the url i also have to extract the short form literal like FB from facebook

const dataToBeMapped = [
  {
    id: crypto.randomUUID(),
    url: "https://facebook.com",
    userName: "myaccount",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
  },
  {
    id: crypto.randomUUID(),
    url: "https://youtube.com",
    userName: "designer_pro",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
  },
  {
    id: crypto.randomUUID(),
    url: "https://dribbble.com",
    userName: "streamer_123",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
  },
  {
    id: crypto.randomUUID(),
    url: "https://twitch.tv",
    userName: "streamer_123",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
  },
  {
    id: crypto.randomUUID(),
    url: "https://github.com",
    userName: "devuser",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
  },
  {
    id: crypto.randomUUID(),
    url: "https://netflix.com",
    userName: "user@gmail.com",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
  },
  {
    id: crypto.randomUUID(),
    url: "https://amazon.com",
    userName: "shopper@gmail.com",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
  },
  {
    id: crypto.randomUUID(),
    url: "https://spotify.com",
    userName: "musiclover",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
  },
];

export default function ContentArea() {
  return (
    <main className="p-8">
      <div className="max-w-7xl mx-auto space-y-10 px-4">
        {/* work on this at last  */}
        {/* <!-- Search, Sort, and Filter Buttons --> */}
        {/* <SearchSortFilter /> */}

        {/* <!-- Password Cards Grid --> */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* <!-- Card 1 - Facebook --> */}
          {dataToBeMapped.map((eachData) => (
            <ContentAreaCardComponents key={eachData.id} data={eachData} />
          ))}
          {/* All cards ends  */}
        </div>
      </div>
    </main>
  );
}
