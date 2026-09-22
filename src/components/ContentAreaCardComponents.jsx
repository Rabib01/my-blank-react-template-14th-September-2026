// divide and conquer, aint nothing more there is to this ✅
// first step would be to iterate with the data as it,✅
//  After all of the cards are rendered, I will figure out how I can set the color of text and the background color dynamically ?? brandBackGround ✅
// After this I will figure out how the reveal Onclick works to reveal the password✅
//  this I will figure out once I can see All of the cards being rendered - map shorthand forms by data array with platform Abbreviatopn object ⚠️ - korleo ekdom sesh e korbo eita

import { useState } from "react";

// const platformAbbreviations = {
//   facebook: "Fb",
//   twitch: "Tw",
//   spotify: "Sp",
//   youTube: "Yt",
//   instagram: "Ig",
//   linkedIn: "Li",
// };

export default function ContentAreaCardComponents({ data }) {
  const [revealPassword, setReavealPassword] = useState(false);

  // scope and function declaration is hoisted type shit
  function handleButtonClick() {
    setReavealPassword(!revealPassword);
  }

  return (
    <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div
            style={{
              color: data.brandColor,
              backgroundColor: data.brandBackGround,
            }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 text-sm font-semibold uppercase "
          >
            {data.url.endsWith("/")
              ? data.url.slice(
                  data.url.indexOf("/") + 2,
                  data.url.indexOf("/") + 4,
                )
              : data.url.slice(
                  data.url.lastIndexOf("/") + 1,
                  data.url.lastIndexOf("/") + 3,
                )}
            {/* // figure out how to extract the url data to short form later  */}
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              {data.url.endsWith("/")
                ? data.url.slice(
                    data.url.indexOf("/") + 2,
                    data.url.indexOf("."),
                  )
                : data.url.slice(
                    data.url.lastIndexOf("/") + 1,
                    data.url.lastIndexOf("."),
                  )}
            </h3>
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              {data.category}
            </p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-neutral-400">
        {data.url.slice(data.url.lastIndexOf("/") + 1)}
      </p>
      <dl className="mt-5 space-y-3 text-sm">
        <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
          <dt className="text-xs uppercase tracking-wide text-neutral-500">
            Username
          </dt>
          <dd className="text-neutral-50">{data.userName}</dd>
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
          <dt className="text-xs uppercase tracking-wide text-neutral-500">
            Password
          </dt>
          <dd className="flex items-center gap-2 text-neutral-50">
            {/* stupid way of doing it woithout declaratively using a for loop or imperatively using a split().map().join() */}
            {!revealPassword ? (
              <span>{"😹".repeat(data.password.length)}</span>
            ) : (
              <span>{data.password}</span>
            )}
            <button
              onClick={handleButtonClick}
              className="text-xs font-semibold text-blue-400"
            >
              Reveal
            </button>
          </dd>
        </div>
      </dl>
    </article>
  );
}

{
  /**
   *
   * onClick={() => handleButtonClick}
   * this means we are giving react a new function and when clicked the function executes and returns the "handleClickButton" function
   * onClick={handleButtonClick}
   * this means I ma giving react thefunction itself, this also means to call "handleClickButton" when a click happens
   * onClick={function}       → React calls it later
   * onClick={() => function} → returns the function; doesn't call it
   * onClick={() => function()} → calls the function later
   *
   */
}

{
  /**
     * <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-blue-500/10 text-sm font-semibold uppercase text-blue-400">
            Fb
          </div>
          <div>
            <h3 className="text-lg font-semibold">Facebook</h3>
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              Social
            </p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-neutral-400">facebook.com</p>
      <dl className="mt-5 space-y-3 text-sm">
        <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
          <dt className="text-xs uppercase tracking-wide text-neutral-500">
            Username
          </dt>
          <dd className="text-neutral-50">john.doe@email.com</dd>
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
          <dt className="text-xs uppercase tracking-wide text-neutral-500">
            Password
          </dt>
          <dd className="flex items-center gap-2 text-neutral-50">
            <span>••••••••</span>
            <button className="text-xs font-semibold text-blue-400">
              Reveal
            </button>
          </dd>
        </div>
      </dl>
    </article>
     */
}
