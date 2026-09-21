export default function ErrorCard() {
  return (
    <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-8 text-center shadow-2xl shadow-black/30">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-800/60 text-2xl">
        🔍
      </div>

      <h3 className="mt-5 text-lg font-semibold text-red-400">
        Opps sorry, mini 404 error: No results were found
      </h3>

      <p className="mt-2 text-sm text-orange-500">
        We couldn't find anything matching your search.
      </p>
    </article>
  );
}
