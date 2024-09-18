import GetYears from "./GetYears";
import GetRepos from "./GetRepos";

function Github() {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-12">
        <div className="flex flex-col gap-8 max-w-5xl items-center justify-center">
          <GetYears />
          <div>
            <GetRepos />
          </div>
        </div>
      </div>
    </>
  );
}

export default Github;
