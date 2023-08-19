import Image from "next/image";
import Link from "next/link";
import booksImage from "public/images/books.avif";
import bootsImage from "public/images/boots.avif";
import personalTrainingImage from "public/images/workout-plan.jpg";

export default function Home() {
  return (
    <div className="flex w-full">
      <div className="relative flex h-[500px] min-w-[200px] flex-1 flex-col items-center justify-center overflow-hidden">
        <h2 className="z-10 text-xl font-black">Books</h2>
        <p className="z-10">
          <Link href="/shop/books">See all available books</Link>
        </p>
        <Image
          className="absolute h-full object-cover opacity-60"
          src={booksImage}
          alt="stack of books"
        />
      </div>
      <div className="relative flex h-[500px] min-w-[200px] flex-1 items-center justify-center overflow-hidden">
        <h2 className="z-10 text-xl font-black">Boots</h2>
        <Image
          className="absolute h-full object-cover opacity-60"
          src={bootsImage}
          alt="shoes and boots"
        />
      </div>
      <div className="relative flex h-[500px] min-w-[200px] flex-1 items-center justify-center overflow-hidden">
        <h2 className="z-10 text-xl font-black">Personal training</h2>
        <Image
          className="absolute h-full object-cover opacity-60"
          src={personalTrainingImage}
          alt="personal training plans"
        />
      </div>
    </div>
  );
}
