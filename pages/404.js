import Link from "next/link";

export default function Custom404() {
  return (
    <div className="public-layout">
      <div className="flex flex-col text-center w-full mt-44">
        <h1 className="text-red-500 text-4xl">404 - Page Not Found</h1>
        <p className="my-2">The page you are looking for does not exist.</p>
        <Link href="/" className="text-primary-500">Go back to the homepage</Link>
      </div>
    </div>
  );
}
