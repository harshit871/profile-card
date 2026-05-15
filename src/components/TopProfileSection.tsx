const TopProfileSection = () => {
  return (
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
        I turn coffee into bugs which are fixed by someone else. Certified Stack
        Overflow and ChatGPT developer.
      </span>
    </div>
  );
};

export default TopProfileSection;
