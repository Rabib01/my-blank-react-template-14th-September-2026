import { useState, useCallback, useEffect } from "react";

import ContentAreaCardComponents from "./ContentAreaCardComponents";
import SearchSortFilter from "./SearchSortFilter";
import ErrorCard from "./ErrorCard";

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
  /** To Do
   * take the data from child prop ✅
   *
   * Fix the filter conditions so that I can see the results as I am typing them - without debouncing ✅
   *
   * sorting
   * - Create a category like button that opens up a form and then create states inside of the ✅
   * - Create the onclick handlers and then handle the click states of filtering inside of the child components ✅
   * - just implement a way to filter things according to date and name - ascendig and descending
   * -
   *
   */
}
{
  /** T H I S     S H I T     I S     V E R Y     I M P O R T A N T
   * passing the value from the child to the parent - use a useCallback hook */
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
    dateCreated: new Date(),
  },
  {
    id: crypto.randomUUID(),
    url: "https://youtube.com",
    userName: "designerpro",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
    dateCreated: new Date(),
  },
  {
    id: crypto.randomUUID(),
    url: "https://youtube.com",
    userName: "designerpro",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
    dateCreated: new Date(),
  },
  {
    id: crypto.randomUUID(),
    url: "https://youtube.com",
    userName: "designerpro",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
    dateCreated: new Date(),
  },
  {
    id: crypto.randomUUID(),
    url: "https://youtube.com",
    userName: "designerpro",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
    dateCreated: new Date(),
  },
  {
    id: crypto.randomUUID(),
    url: "https://dribbble.com",
    userName: "streamer_123",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
    dateCreated: new Date(),
  },
  {
    id: crypto.randomUUID(),
    url: "https://twitch.tv",
    userName: "streamer_123",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
    dateCreated: new Date(),
  },
  {
    id: crypto.randomUUID(),
    url: "https://github.com",
    userName: "devuser",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
    dateCreated: new Date(),
  },
  {
    id: crypto.randomUUID(),
    url: "https://netflix.com",
    userName: "user@gmail.com",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
    datecreated: new Date(),
  },
  {
    id: crypto.randomUUID(),
    url: "https://netflix.com",
    userName: "user@gmail.com",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
    datecreated: new Date(),
  },
  {
    id: crypto.randomUUID(),
    url: "https://netflix.com",
    userName: "user@gmail.com",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
    datecreated: new Date(),
  },
  {
    id: crypto.randomUUID(),
    url: "https://amazon.com",
    userName: "shopper@gmail.com",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
    datecreated: new Date(),
  },
  {
    id: crypto.randomUUID(),
    url: "https://spotify.com",
    userName: "musiclover",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
    datecreated: new Date(),
  },
];

export default function ContentArea() {
  const [searchState, setSearchState] = useState("");
  const [sortValue, setSortValue] = useState("");

  const handleKeyStrokeChange = useCallback((value) => {
    setSearchState(value.toLowerCase());
  }, []);

  const handleSortState = useCallback((value) => {
    setSortValue(value);
  }, []);

  useEffect(() => {
    console.log(sortValue);
  }, [sortValue]);

  // lets say i want to filter data for text = youtube

  // const searchTerm = "designer_pro";
  // const urlTerm = "https://netflix.com";
  const filtered = dataToBeMapped.filter((eachData) => {
    return (
      eachData.userName.toLowerCase().includes(searchState) ||
      eachData.url.toLowerCase().includes(searchState)
    );
  });

  // const filteredWithSorted = dataToBeMapped.filter((eachData) => { cannot do this here as eachData is an object key value pair, but can do it on filtered yhourg as filtered already contains the filtered array and
  //   if(!sortValue) {                                               .filter creates a new array instead of mutating hte original array.
  //     return (
  //       eachData.userName.toLowerCase().includes(searchState) ||
  //       eachData.url.toLowerCase().includes(searchState)
  //     );
  //   }
  //   if(sortValue === "Date: Newest"){
  //     eachData.userName.toLowerCase().includes(searchState)
  //   }
  // });

  const sorted = filtered.sort((a, b) => {
    // if (sortValue === "") return 0; this works, but will mutate the array, which means it will not change the sorting order, best case is not to call it in the first place
    if (sortValue === "Name: A → Z") {
      const nameA = a.userName.toLowerCase();
      const nameB = b.userName.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    }
    if (sortValue === "Name: Z → A") {
      const nameA = a.userName.toLowerCase();
      const nameB = b.userName.toLowerCase();
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0;
    }
    if (sortValue === "Date: Newest") return a.datecreated - b.datecreated;
    if (sortValue === "Date: Oldest") return b.datecreated - a.datecreated;
  });

  return (
    <main className="p-8">
      <div className="max-w-7xl mx-auto space-y-10 px-4">
        {/* work on this at last  */}
        {/* <!-- Search, Sort, and Filter Buttons --> */}
        <SearchSortFilter
          onSearchChange={handleKeyStrokeChange}
          handleSortState={handleSortState}
        />

        {/* <!-- Password Cards Grid --> */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* <!-- Card 1 - Facebook --> */
          /**Appplyind Demorgans Law */}
          {!(searchState || sortValue) ? (
            dataToBeMapped.map((eachData) => (
              <ContentAreaCardComponents key={eachData.id} data={eachData} />
            ))
          ) : sortValue ? (
            sorted.map((eachData) => (
              <ContentAreaCardComponents key={eachData.id} data={eachData} />
            ))
          ) : filtered.length ? (
            filtered.map((eachData) => (
              <ContentAreaCardComponents key={eachData.id} data={eachData} />
            ))
          ) : (
            <ErrorCard />
          )}
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
