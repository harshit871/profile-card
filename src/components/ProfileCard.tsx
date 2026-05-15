import { socialLinks } from "../constants";

const ProfileCard = () => {
  return (
    <main className="flex justify-center py-[200px]">
      <article
        className="w-[340px] flex flex-col gap-10 bg-white px-4 py-6 rounded-lg shadow-[0px_1px_2px_-1px_rgb(0_0_0_/_0.10),0px_1px_3px_0_rgb(0_0_0_/_0.10)]"
        aria-label="Profile Details of Sarah Dole"
      >
        <div className="flex flex-col items-center gap-6 self-stretch">
          <div className="w-16 h-16">
            <img
              src="/img/profile.png"
              className="w-16 h-16 object-cover"
              loading="lazy"
              alt="Portrait of Sarah Dole"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-1 self-stretch">
            <span className="font-medium text-xl text-center text-neutral-900">
              Sarah Dole
            </span>
            <span className="font-normal text-sm text-center text-neutral-600">
              Front End Engineer @ Microsoft
            </span>
          </div>
          <span className="font-normal text-base text-center text-neutral-600">
            I turn coffee into bugs which are fixed by someone else. Certified
            Stack Overflow and ChatGPT developer.
          </span>
        </div>
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
      </article>
    </main>
  );
};

export default ProfileCard;
