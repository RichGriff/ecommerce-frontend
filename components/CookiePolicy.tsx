export default function CookiePolicy() {
  return (
    <div className="fixed inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 bg-slate-900 p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8">
      <p className="max-w-4xl text-sm leading-6 text-white">
        This website uses cookies to supplement a balanced diet and provide a much deserved reward to the senses after
        consuming bland but nutritious meals. Accepting our cookies is optional but recommended, as they are delicious.
        See our{' '}
        <a href="#" className="font-semibold text-indigo-500">
          cookie policy
        </a>
        .
      </p>
      <div className="flex flex-none items-center gap-x-5">
        <button
          type="button"
          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Accept all
        </button>
        <button type="button" className="text-sm font-semibold leading-6 text-white">
          Reject all
        </button>
      </div>
    </div>
  )
}
