const options: Intl.DateTimeFormatOptions = {
  month: "long",
  day: "numeric",
  year: "numeric",
};

interface Props {
  message: {
    __typename?: "Message" | undefined;
    id: string;
    applications: string[];
    title: string;
    content: string;
    published: boolean;
    startingDate: any;
  } | null;
}

export function MessageListItem({ message }: Props) {
  return (
      <div className="cursor-pointer p-4 hover:bg-gray-200">
        <div className="relative inline-flex w-full justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <span className="text-md text-gray-900">{message?.title}</span>
            </div>
            <span className="text-[0.8rem] text-gray-600">
              {new Date(message?.startingDate).toLocaleDateString(
                "nl-NL",
                options
              )}
            </span>
          </div>
        </div>
      </div>
  );
}
