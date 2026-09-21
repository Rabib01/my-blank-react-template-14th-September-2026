import { useState, useCallback, useEffect } from "react";

import ContentAreaCardComponents from "./ContentAreaCardComponents";
import SearchSortFilter from "./SearchSortFilter";

{
  /**
   * steps to pass data from the parent component to the child component
   * create a state in the parent component
   * pass the state value and setterFunction from parent as props to children
   * handle the setter functionality, whatever it may be inside of the of the child component
   *
   * Easy way to pass data from child to parent
   * taken from https://dev.to/bcostaaa01/how-to-pass-props-from-child-to-parent-component-in-react-1ci4
   * commoon pitfall - forgetting to pass the callback function as a prop to the child component
   * can be fixed byt implementing a useCallback hook -
   * makes sure that the callback that you pass to the child component remains stable across renders and does not unncessartily rerender improving performance
   *
   */
}
{
  /**
   * take the data from child prop ✅
   *
   * search based on the text passed - this is a js task and not a react task
   * divide and conquer -
   * - 1st - filter based on a given text ✅
   * - 2nd - search based on searchState value ✅
   *
   *  search field faka hoile - default vabe sob card dekha jabe
   *
   *  search term na ber korte parle dekhaite hobe not found
   *
   *
   *
   */
}
{
  /**passing the value from the child to the parent - use a useCallback hook */
  // callback needs to receive the value from the child !
  // [searchState] does not need to be a dependency here as setSearchState is a stable react setter
  // -
  // to filter first set up the filter parameter using array.filter()
  // then map over that filtered data array of objects
}

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
    url: "https://youtube.com",
    userName: "designer_pro",
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
    url: "https://netflix.com",
    userName: "user@gmail.com",
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
  const [searchState, setSearchState] = useState("");

  const handleKeyStrokeChange = useCallback((value) => {
    setSearchState(value);
  }, []);

  useEffect(() => {
    console.log(searchState);
  }, [searchState]);

  // lets say i want to filter data for text = youtube

  // const searchTerm = "designer_pro";
  // const urlTerm = "https://netflix.com";
  const filtered = dataToBeMapped.filter((eachData) => {
    if (searchState !== "") {
      return eachData.userName === searchState || eachData.url === searchState;
    }
  });

  return (
    <main className="p-8">
      <div className="max-w-7xl mx-auto space-y-10 px-4">
        {/* work on this at last  */}
        {/* <!-- Search, Sort, and Filter Buttons --> */}
        <SearchSortFilter onSearchChange={handleKeyStrokeChange} />

        {/* <!-- Password Cards Grid --> */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* <!-- Card 1 - Facebook --> */}
          {filtered.map((eachData) => (
            <ContentAreaCardComponents key={eachData.id} data={eachData} />
          ))}
          {/* All cards ends  */}
        </div>
      </div>
    </main>
  );
}

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
  //
  // from the url i have to extract the form name like facebook from facebook.com
  // from the url i also have to extract the short form literal like FB from facebook
  // Divide and conquer ✅ ⚠️
  // Implement a way to search and fildter them by the given categories
  // searching is a data flow problem and not a component problem
}

{
  /**
   *
   * search using name and url
   *
   * serach field khali thakle or muche felle default vabe jei card gulo chilo oita dekha jabe
   *
   * kono folafol na paoa gele UI theme and colort typography onujai not found dekhate hobe
   *
   */
}

{
  /**
   *
   */
}
