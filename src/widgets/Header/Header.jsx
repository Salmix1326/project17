import { MainMenu } from "./MainMenu";
import { UserInfo } from "./UserInfo";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-yellow-400 bg-black shadow-md">
      <div className="flex items-center gap-6">
        <h1 className="text-yellow-400 text-xl font-bold tracking-wide">
          PostMania
        </h1>
        <MainMenu />
      </div>
      <UserInfo />
    </header>
  );
}
