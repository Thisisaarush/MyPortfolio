import { useRouter } from "next/router";

export const Back = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="py-2 cursor-pointer underline underline-offset-4 decoration-black/20 hover:decoration-black"
    >
      &larr; back
    </div>
  );
};
