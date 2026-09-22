import { useState } from "react";

function SortButton({ handleSortClick }) {
  return (
    <button
      onClick={handleSortClick}
      className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white"
    >
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 4h18l-8 8v6l-4 4v-8z"
        ></path>
      </svg>
      Remove Sort: Click to select a sort option
    </button>
  );
}

function SortCategoriesButton({ handleCategoriesClicked }) {
  return (
    <>
      <button
        onClick={handleCategoriesClicked}
        className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white"
      >
        Name: A → Z
      </button>

      <button
        onClick={handleCategoriesClicked}
        className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white"
      >
        Name: Z → A
      </button>

      <button
        onClick={handleCategoriesClicked}
        className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white"
      >
        Date: Oldest
      </button>

      <button
        onClick={handleCategoriesClicked}
        className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white"
      >
        Date: Newest
      </button>
    </>
  );
}

export default function SearchSortFilter({ onSearchChange, handleSortState }) {
  const [showSortButton, setShowSortButton] = useState(true);

  function handleTextFieldChange(e) {
    const state = e.target.value;
    onSearchChange(state);
  }

  function handleSortClick(e) {
    // e.target         → <path>
    // e.currentTarget  → <button></button>
    if (e.target) {
      setShowSortButton((prev) => !prev);
      handleSortState("");
    }
  }

  function handleCategoriesClicked(e) {
    setShowSortButton((prev) => !prev);
    handleSortState(e.target.textContent);
  }

  // wanted to implement this based on the categories of the form - Just because I can do that means that I should definetly choose the otyher option

  return (
    <section className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 p-6 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* <!-- Search Bar --> */}
        <label className="relative flex-1">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
          <input
            onChange={handleTextFieldChange}
            type="text"
            placeholder="Search saved credentials"
            className="w-full rounded-2xl border border-neutral-800 bg-neutral-950/60 py-3 pl-11 pr-4 text-sm text-white placeholder:text-neutral-500 transition focus:border-blue-500 focus:bg-neutral-950 focus:outline-none"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          {showSortButton ? (
            <SortButton handleSortClick={handleSortClick} />
          ) : (
            <SortCategoriesButton
              handleCategoriesClicked={handleCategoriesClicked}
            />
          )}
        </div>
      </div>
    </section>
  );
}

{
  /** Should know the difference between all these by now - gues the rest will come to me naturally after everytrhing falls apart and with more practise 
onClick={handleSortButtonClick}     // ✅ React calls it on click
onClick={handleSortButtonClick()}   // ❌ calls it during render
onClick={() => handleSortButtonClick()} // ✅ wrapper calls it on click
   */
}

{
  /* this is a simple way to be doing this, but i will instead do it in my ternry option way
          {showSortOptions && (
          <div>
          <button>Name</button>
          <button>Category</button>
          <button>Date added</button>
          </div>
          )}
          */
}
