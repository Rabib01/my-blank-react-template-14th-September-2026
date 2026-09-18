import { useState, useEffect } from "react";

export default function Form() {
  const [cardInfo, setCardInfo] = useState([]);
  const [urlError, setUrlError] = useState("");
  const [colorPickerHex, setColorPickerHex] = useState("");
  const [lighterBackGround, setLighterBackGround] = useState("");
  const [urlValidStatus, seturlValidStatus] = useState(false);

  // useEffect(() => {
  //   console.log(cardInfo);
  // }, [cardInfo]);

  function handleURLBlur(e) {
    // validation steps for correct format and turns blank
    // e.target.parentNode.childNode[childNode.lenght-1] = console.log("Please, this field cannot be empty"); // stupid way tyo handle this in reactt
    // console.log(e.target.value);
    const websiteURLString = e.target.value;
    if (websiteURLString === "") {
      setUrlError("Please, this field cannot be empty ");
    } else {
      try {
        const url = new URL(websiteURLString);
        setUrlError("");
        seturlValidStatus(true);

        // this is to go back to Please Enter URL with text-neutral-400 after URL looks good homie, 😉 😉 😉
        setTimeout(() => {
          seturlValidStatus(false);
        }, 5000);

        // url = will go to the state where on clicking create bookmark - nothing else to do here !!!
      } catch {
        console.log(`not a valid url`);
        setUrlError(
          "Invalid URL, please correct format - https://something.com",
        );
      }
    }
  }

  function handleColorChange(e) {
    // console.log(e.target.value);
    setColorPickerHex(e.target.value);

    // all of this to get a lighter background after color picker is clickerd
    // flow hooche e.target.value theke hex strng ber korbo -> lighten color function e hexToHSL conversion function and e.target.value pass korbo -> hex string is directly destructured to hsl array values inside of lighten color function -> lighten color function takes the hsl values and comes with a lighter lumonisoty value for setting the background of the color picker -> lighter background state is set here -> this changes the backgeound color of lighter background on style since tailwind is stupid and cannot do this thing in runtime
    // guess i am a developer now, lol
    // a function should only do one thing, here there are two functions inside of a function
    function hexToHSL(hex) {
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);

      let h;
      let s;
      const l = (max + min) / 2;
      // unimportant logic that cinverts hex to hsl
      if (max === min) {
        h = s = 0;
      } else {
        const d = max - min;

        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;

          case g:
            h = (b - r) / d + 2;
            break;

          case b:
            h = (r - g) / d + 4;
            break;
        }

        h /= 6;
      }

      return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
    }

    /**
     *
     * @param {*this is the stupid hexToHSl function} conversionFunction
     * @param {*this is e.target.value's returned array of hsl} hexValue
     * @param {*this is because i want to make the background 10% lighter} amount
     * @returns
     */
    function lightenColor(conversionFunction, hexValue, amount = 30) {
      const [h, s, l] = conversionFunction(hexValue);
      setLighterBackGround(`hsl(${h}, ${s}%, ${Math.min(l + amount, 100)}%)`);
    }

    lightenColor(hexToHSL, e.target.value);

    // const lightenedColor = lightenColor(hexToHSL, e.target.value);
    // console.log(lightenedColor);
  }

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4">
      {/* The form elements starts here !!  */}
      <form className="mb-10 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/70 to-neutral-800/40 p-8 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="mb-8 flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            New bookmark
          </p>
          <h2 className="text-2xl font-semibold">
            Store website credentials safely
          </h2>
          <p className="text-sm text-neutral-400">
            Fill the details below. Your brand color helps us render a matching
            favicon.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* <!-- Website URL Input starts here --> */}
            {/* Validate whether the field is empty - if empty show error */}
            {/* validate whether the format of the url is ok */}
            {/* some extra logic to extract the name for example : facebook from facebook.com whiuch is the easiest part imp */}
            <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
              {/* never thought a day would come when I would be using a ternary operator with multiple conditions, well it is here */}
              {urlError ? (
                <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                  {urlError}
                </span>
              ) : urlValidStatus ? (
                <span className="text-xs font-semibold uppercase tracking-wider text-green-400">
                  URL looks good homie, 😉 😉 😉
                </span>
              ) : (
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Please Enter URL
                </span>
              )}

              <input
                onBlur={(e) => handleURLBlur(e)}
                type="url"
                placeholder="https://example.com"
                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
              />
              <span className="text-xs text-neutral-500">
                Include https:// for best results.
              </span>
            </label>

            {/* <!-- Color Picker --> */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Favicon color
                  </p>
                  <p className="text-xs text-neutral-500">
                    Select the accent color we should render.
                  </p>
                </div>
                <input
                  onChange={(e) => handleColorChange(e)}
                  type="color"
                  value={colorPickerHex}
                  className="h-12 w-12 cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 p-1 shadow-inner shadow-black/50"
                  style={{ backgroundColor: lighterBackGround }}
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs text-neutral-500">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800/80 text-[10px] font-semibold uppercase text-neutral-400">
                  Hex
                </span>
                <span>Matches any brand primary color.</span>
              </div>
            </div>

            {/* <!-- Category Select --> */}
            <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Category
              </span>
              <select className="w-full bg-transparent text-base text-white outline-none">
                <option className="bg-neutral-900 text-white">
                  Select category
                </option>
                <option className="bg-neutral-900 text-white">Social</option>
                <option className="bg-neutral-900 text-white">Video</option>
                <option className="bg-neutral-900 text-white">Design</option>
                <option className="bg-neutral-900 text-white">Streaming</option>
                <option className="bg-neutral-900 text-white">
                  Productivity
                </option>
                <option className="bg-neutral-900 text-white">
                  Entertainment
                </option>
                <option className="bg-neutral-900 text-white">Shopping</option>
                <option className="bg-neutral-900 text-white">Music</option>
              </select>
              <span className="text-xs text-neutral-500">
                Helps you filter quicker later.
              </span>
            </label>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* <!-- Username Input --> */}
            <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Username
              </span>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
              />
              <span className="text-xs text-neutral-500">
                Use workspace or personal handle.
              </span>
            </label>

            {/* <!-- Password Input --> */}
            <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Password
              </span>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
              />
              <span className="text-xs text-neutral-500">
                Choose at least 6 characters.
              </span>
            </label>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-neutral-500">
            By submitting you confirm the entry is safe to store.
          </div>
          <div className="flex flex-1 justify-end gap-3">
            <button
              type="reset"
              className="w-full rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500 hover:text-white md:w-auto"
            >
              Clear
            </button>
            <button
              type="submit"
              className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 md:w-auto"
            >
              Add Bookmark
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
