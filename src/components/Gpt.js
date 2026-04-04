import { useSelector } from "react-redux";
import language from "../utils/language";

const Gpt = () => {

  const appLanguage = useSelector(store=>store.appConfig?.appLanguage);

  return (
    <div className="min-h-screen bg-black px-4 pt-28">
      <form className="mx-auto flex w-full max-w-3xl flex-col gap-3 rounded-xl bg-black/70 p-4 shadow-lg md:flex-row md:items-center">
        <input
          type="text"
          placeholder={language[appLanguage].inputPlaceHolder}
          className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none placeholder:text-zinc-400 focus:border-red-500"
        />
        <button
          type="submit"
          className="rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          {language[appLanguage].searchButtonLabel}
        </button>
      </form>
    </div>
  );
};

export default Gpt;
