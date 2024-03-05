import { useRef, useState, RefObject } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaAngleDown } from "react-icons/fa6";

const GigsSearch = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

  const minRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const maxRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const reSort = (type: string) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current?.value);
    console.log(maxRef.current?.value);
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="text-lg">Budget</span>
          <Input
            ref={minRef}
            className="border border-solid border-gray-600 rounded sm:w-32 lg:w-full"
            type="number"
            placeholder="min"
          />
          <Input
            ref={maxRef}
            className="border border-solid border-gray-600 rounded sm:w-32 lg:w-full"
            type="number"
            placeholder="max"
          />
          <Button onClick={apply}>Apply</Button>
        </div>

        <div className="relative flex items-center gap-4 z-10">
          <span className="text-lg">Sort by</span>
          <div
            className="flex gap-1 items-center cursor-pointer select-none"
            onClick={() => setOpen(!open)}
          >
            <span className="text-lg cursor-pointer select-none">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <FaAngleDown className="h-5 w-5" />
          </div>
          {open && (
            <div className="absolute top-8 left-[73px] lg:right-0 flex flex-col bg-white shadow-md rounded-md p-5 border border-solid border-gray-300">
              {sort === "sales" ? (
                <span
                  onClick={() => reSort("createdAt")}
                  className="text-lg cursor-pointer select-none"
                >
                  Newest
                </span>
              ) : (
                <span
                  onClick={() => reSort("sales")}
                  className="text-lg cursor-pointer select-none"
                >
                  Best Selling
                </span>
              )}
              <span
                onClick={() => reSort("sales")}
                className="text-lg cursor-pointer select-none"
              >
                Popular
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default GigsSearch;
