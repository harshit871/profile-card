import BottomProfileSection from "./BottomProfileSection";
import TopProfileSection from "./TopProfileSection";

const ProfileCard = () => {
  return (
    <main className="flex justify-center py-[200px]">
      <article
        className="w-[340px] flex flex-col gap-10 bg-white px-4 py-6 rounded-lg shadow-[0px_1px_2px_-1px_rgb(0_0_0_/_0.10),0px_1px_3px_0_rgb(0_0_0_/_0.10)]"
        aria-label="Profile Details of Sarah Dole"
      >
        <TopProfileSection />
        <BottomProfileSection />
      </article>
    </main>
  );
};

export default ProfileCard;
