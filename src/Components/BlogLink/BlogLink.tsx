interface IBlog {
  title: string;
  description: string;
  date: string;
}

export const BlogLink = ({ title, description, date }: IBlog) => {
  return (
    <div className="flex gap-4 capitalize p-4 border-b hover:bg-gray-50 cursor-pointer">
      <span className="flex flex-col gap-2">
        <p className="font-semibold text-xl">{title}</p>
        <p className="w-11/12 text-gray-700">{description}</p>
        <p className="mt-4">{date}</p>
      </span>
    </div>
  );
};
