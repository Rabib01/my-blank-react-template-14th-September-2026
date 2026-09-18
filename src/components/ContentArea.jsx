export default function ContentArea() {
  return (
    <main class="p-8">
      <div class="max-w-7xl mx-auto space-y-10 px-4">
        {/* <!-- Search, Sort, and Filter Buttons --> */}
        <section class="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 p-6 shadow-2xl shadow-black/40 backdrop-blur">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-center">
            {/* <!-- Search Bar --> */}
            <label class="relative flex-1">
              <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
                <svg
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search saved credentials"
                class="w-full rounded-2xl border border-neutral-800 bg-neutral-950/60 py-3 pl-11 pr-4 text-sm text-white placeholder:text-neutral-500 transition focus:border-blue-500 focus:bg-neutral-950 focus:outline-none"
              />
            </label>

            <div class="flex flex-wrap gap-2">
              <button class="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white">
                <svg
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 4h18l-8 8v6l-4 4v-8z"
                  ></path>
                </svg>
                Sort by
              </button>
            </div>
          </div>
        </section>

        {/* <!-- Password Cards Grid --> */}
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* <!-- Card 1 - Facebook --> */}
          <article class="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-blue-500/10 text-sm font-semibold uppercase text-blue-400">
                  Fb
                </div>
                <div>
                  <h3 class="text-lg font-semibold">Facebook</h3>
                  <p class="text-xs uppercase tracking-wide text-neutral-500">
                    Social
                  </p>
                </div>
              </div>
            </div>
            <p class="mt-4 text-sm text-neutral-400">facebook.com</p>
            <dl class="mt-5 space-y-3 text-sm">
              <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt class="text-xs uppercase tracking-wide text-neutral-500">
                  Username
                </dt>
                <dd class="text-neutral-50">john.doe@email.com</dd>
              </div>
              <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt class="text-xs uppercase tracking-wide text-neutral-500">
                  Password
                </dt>
                <dd class="flex items-center gap-2 text-neutral-50">
                  <span>••••••••</span>
                  <button class="text-xs font-semibold text-blue-400">
                    Reveal
                  </button>
                </dd>
              </div>
            </dl>
          </article>

          {/* <!-- Card 2 - YouTube --> */}
          <article class="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-red-500/10 text-sm font-semibold uppercase text-red-400">
                  Yt
                </div>
                <div>
                  <h3 class="text-lg font-semibold">YouTube</h3>
                  <p class="text-xs uppercase tracking-wide text-neutral-500">
                    Video
                  </p>
                </div>
              </div>
            </div>
            <p class="mt-4 text-sm text-neutral-400">youtube.com</p>
            <dl class="mt-5 space-y-3 text-sm">
              <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt class="text-xs uppercase tracking-wide text-neutral-500">
                  Username
                </dt>
                <dd class="text-neutral-50">myaccount</dd>
              </div>
              <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt class="text-xs uppercase tracking-wide text-neutral-500">
                  Password
                </dt>
                <dd class="flex items-center gap-2 text-neutral-50">
                  <span>••••••••</span>
                  <button class="text-xs font-semibold text-blue-400">
                    Reveal
                  </button>
                </dd>
              </div>
            </dl>
          </article>

          {/* <!-- Card 3 - Dribbble --> */}
          <article class="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-pink-500/10 text-sm font-semibold uppercase text-pink-300">
                  Db
                </div>
                <div>
                  <h3 class="text-lg font-semibold">Dribbble</h3>
                  <p class="text-xs uppercase tracking-wide text-neutral-500">
                    Design
                  </p>
                </div>
              </div>
            </div>
            <p class="mt-4 text-sm text-neutral-400">dribbble.com</p>
            <dl class="mt-5 space-y-3 text-sm">
              <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt class="text-xs uppercase tracking-wide text-neutral-500">
                  Username
                </dt>
                <dd class="text-neutral-50">designer_pro</dd>
              </div>
              <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt class="text-xs uppercase tracking-wide text-neutral-500">
                  Password
                </dt>
                <dd class="flex items-center gap-2 text-neutral-50">
                  <span>••••••••</span>
                  <button class="text-xs font-semibold text-blue-400">
                    Reveal
                  </button>
                </dd>
              </div>
            </dl>
          </article>

          {/* <!-- Card 4 - Twitch --> */}
          <article class="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-purple-500/10 text-sm font-semibold uppercase text-purple-300">
                  Tw
                </div>
                <div>
                  <h3 class="text-lg font-semibold">Twitch</h3>
                  <p class="text-xs uppercase tracking-wide text-neutral-500">
                    Streaming
                  </p>
                </div>
              </div>
            </div>
            <p class="mt-4 text-sm text-neutral-400">twitch.tv</p>
            <dl class="mt-5 space-y-3 text-sm">
              <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt class="text-xs uppercase tracking-wide text-neutral-500">
                  Username
                </dt>
                <dd class="text-neutral-50">streamer_123</dd>
              </div>
              <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt class="text-xs uppercase tracking-wide text-neutral-500">
                  Password
                </dt>
                <dd class="flex items-center gap-2 text-neutral-50">
                  <span>••••••••</span>
                  <button class="text-xs font-semibold text-blue-400">
                    Reveal
                  </button>
                </dd>
              </div>
            </dl>
          </article>

          {/* <!-- Card 5 - GitHub --> */}
          <article class="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-500/10 text-sm font-semibold uppercase text-neutral-300">
                  Gh
                </div>
                <div>
                  <h3 class="text-lg font-semibold">GitHub</h3>
                  <p class="text-xs uppercase tracking-wide text-neutral-500">
                    Productivity
                  </p>
                </div>
              </div>
            </div>
            <p class="mt-4 text-sm text-neutral-400">github.com</p>
            <dl class="mt-5 space-y-3 text-sm">
              <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt class="text-xs uppercase tracking-wide text-neutral-500">
                  Username
                </dt>
                <dd class="text-neutral-50">devuser</dd>
              </div>
              <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt class="text-xs uppercase tracking-wide text-neutral-500">
                  Password
                </dt>
                <dd class="flex items-center gap-2 text-neutral-50">
                  <span>••••••••</span>
                  <button class="text-xs font-semibold text-blue-400">
                    Reveal
                  </button>
                </dd>
              </div>
            </dl>
          </article>

          {/* <!-- Card 6 - Netflix --> */}
          <article class="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-red-600/10 text-sm font-semibold uppercase text-red-400">
                  Nx
                </div>
                <div>
                  <h3 class="text-lg font-semibold">Netflix</h3>
                  <p class="text-xs uppercase tracking-wide text-neutral-500">
                    Entertainment
                  </p>
                </div>
              </div>
            </div>
            <p class="mt-4 text-sm text-neutral-400">netflix.com</p>
            <dl class="mt-5 space-y-3 text-sm">
              <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt class="text-xs uppercase tracking-wide text-neutral-500">
                  Username
                </dt>
                <dd class="text-neutral-50">user@email.com</dd>
              </div>
              <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt class="text-xs uppercase tracking-wide text-neutral-500">
                  Password
                </dt>
                <dd class="flex items-center gap-2 text-neutral-50">
                  <span>••••••••</span>
                  <button class="text-xs font-semibold text-blue-400">
                    Reveal
                  </button>
                </dd>
              </div>
            </dl>
          </article>

          {/* <!-- Card 7 - Amazon --> */}
          <article class="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-yellow-500/10 text-sm font-semibold uppercase text-yellow-400">
                  Am
                </div>
                <div>
                  <h3 class="text-lg font-semibold">Amazon</h3>
                  <p class="text-xs uppercase tracking-wide text-neutral-500">
                    Shopping
                  </p>
                </div>
              </div>
            </div>
            <p class="mt-4 text-sm text-neutral-400">amazon.com</p>
            <dl class="mt-5 space-y-3 text-sm">
              <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt class="text-xs uppercase tracking-wide text-neutral-500">
                  Username
                </dt>
                <dd class="text-neutral-50">shopper@email.com</dd>
              </div>
              <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt class="text-xs uppercase tracking-wide text-neutral-500">
                  Password
                </dt>
                <dd class="flex items-center gap-2 text-neutral-50">
                  <span>••••••••</span>
                  <button class="text-xs font-semibold text-blue-400">
                    Reveal
                  </button>
                </dd>
              </div>
            </dl>
          </article>

          {/* <!-- Card 8 - Spotify --> */}
          <article class="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-green-500/10 text-sm font-semibold uppercase text-green-400">
                  Sp
                </div>
                <div>
                  <h3 class="text-lg font-semibold">Spotify</h3>
                  <p class="text-xs uppercase tracking-wide text-neutral-500">
                    Music
                  </p>
                </div>
              </div>
            </div>
            <p class="mt-4 text-sm text-neutral-400">spotify.com</p>
            <dl class="mt-5 space-y-3 text-sm">
              <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt class="text-xs uppercase tracking-wide text-neutral-500">
                  Username
                </dt>
                <dd class="text-neutral-50">musiclover</dd>
              </div>
              <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt class="text-xs uppercase tracking-wide text-neutral-500">
                  Password
                </dt>
                <dd class="flex items-center gap-2 text-neutral-50">
                  <span>••••••••</span>
                  <button class="text-xs font-semibold text-blue-400">
                    Reveal
                  </button>
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </main>
  );
}
