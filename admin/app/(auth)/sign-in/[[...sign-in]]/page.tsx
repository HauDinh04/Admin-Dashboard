import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div
      className=""
      style={{
        backgroundImage: "url('bg-auth/bg.jpg')",
        backgroundSize: "Cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex h-screen justify-center items-center  ">
        <SignIn />
      </div>
    </div>
  );
}
