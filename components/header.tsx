import { RotateCcw, ArrowLeft } from 'lucide-react';
import { useImageContext } from '../app/context/CardFlipContext'; // Adjust the path accordingly

export default function Header() {
  const { toggleImage } = useImageContext(); // Access toggle function from context

  return (
    <div className="bg-[#3673bd] text-white px-4 py-3 flex justify-between items-center header-borders">
      <div className="flex flex-row">
        <button className="hover:opacity-80">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-medium ml-5">DNI Digital</h1>
      </div>
      <button
        className="hover:opacity-80"
        onClick={toggleImage} // Call toggle image when clicked
      >
        <RotateCcw className="h-6 w-6" />
      </button>
    </div>
  );
}
