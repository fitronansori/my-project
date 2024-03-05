import {
  Categories,
  About,
  Community,
  Support,
  More,
} from "@/constants/footer";
import { Separator } from "../ui/separator";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="md:pt-5 bg-gray-50">
      <div className="container">
        <div className="hidden pb-2 lg:flex justify-between">
          <div className="space-y-2">
            <h2 className="font-bold text-xl">Categories</h2>
            <ul className="space-y-1">
              {Categories.map((item) => (
                <li
                  key={item.id}
                  className="text-gray-600 hover:text-foreground cursor-pointer"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="font-bold text-xl">About</h2>
            <ul className="space-y-1">
              {About.map((item) => (
                <li
                  key={item.id}
                  className="text-gray-600 hover:text-foreground cursor-pointer"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="font-bold text-xl">Support</h2>
            <ul className="space-y-1">
              {Support.map((item) => (
                <li
                  key={item.id}
                  className="text-gray-600 hover:text-foreground cursor-pointer"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="font-bold text-xl">Community</h2>
            <ul className="space-y-1">
              {Community.map((item) => (
                <li
                  key={item.id}
                  className="text-gray-600 hover:text-foreground cursor-pointer"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="font-bold text-xl">More From Fiverr</h2>
            <ul className="space-y-1">
              {More.map((item) => (
                <li
                  key={item.id}
                  className="text-gray-600 hover:text-foreground cursor-pointer"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator />

        <Copyright />
      </div>
    </footer>
  );
};
export default Footer;
