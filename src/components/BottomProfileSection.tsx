import { socialLinks } from "../constants";

const BottomProfileSection = () => {
  return (
    <div className="flex flex-col gap-6 self-stretch">
      <button className="font-medium text-base text-white px-4 py-2.5 rounded shadow-[0px_1px_2px_-1px_rgb(0_0_0_/_0.10),0px_1px_3px_0_rgb(0_0_0_/_0.10)] bg-indigo-700 hover:bg-indigo-800 focus:ring focus:ring-indigo-100 disabled:cursor-not-allowed disabled:text-neutral-400 disabled:bg-neutral-100 disabled:shadow-none">
        Contact me
      </button>

      <div className="flex justify-center gap-4">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              aria-label={link.ariaLabel}
              className="w-9 h-9 flex justify-center items-center text-indigo-700 rounded hover:text-indigo-800 focus:ring focus:ring-indigo-100 disabled:cursor-not-allowed disabled:text-neutral-400"
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default BottomProfileSection;
