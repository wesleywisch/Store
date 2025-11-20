export function ProductListSkeleton() {
  return (
    <div className="mt-10">
      <p className="bg-gray-200 rounded w-52 h-8 mb-4 mx-auto md:mx-0 animate-pulse"></p>
      <p className="bg-gray-200 rounded w-64 h-5 mx-auto md:mx-0 animate-pulse"></p>

      <div className="mt-9 grid grid-cols-1 gap-8 md:grid-cols-4">
        {[0, 1, 2, 3].map((item, key) => (
          <div key={key} className="bg-gray-200 h-80 rounded animate-pulse" />
        ))}
      </div>
    </div>
  );
}
