export default function NotFound() {
  return (
    <div className="bg-teal-950  flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="mt-2 text-gray-500">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <a href="/" className="mt-4 text-blue-500 underline">
        Go back home
      </a>
    </div>
  );
}
