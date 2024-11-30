import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-teal-950  flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="mt-2 text-gray-500">
        Sorry, we couldn not find the page you are looking for.
      </p>
      <Link href="/">
        <h1>Go back Home</h1>
      </Link>
    </div>
  );
}
