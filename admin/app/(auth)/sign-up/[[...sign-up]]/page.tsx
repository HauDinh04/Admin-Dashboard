import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div
      className=""
      style={{
        backgroundImage: "url('bg-auth/bg-signup.jpg')",
        backgroundSize: "Cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex h-screen justify-center items-center">
        <SignUp />
      </div>
    </div>
  );
}
