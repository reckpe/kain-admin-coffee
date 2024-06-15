import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="p-4 flex items-center justify-center">
      <SignUp />
    </div>
  );
}
