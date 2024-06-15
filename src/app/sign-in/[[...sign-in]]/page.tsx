import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="p-4 flex items-center justify-center">
      <SignIn />
    </div>
  );
}
