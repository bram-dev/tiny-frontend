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
      <div className="taa-cursor-pointer taa-p-4 hover:taa-bg-gray-200">
        <div className="taa-relative taa-inline-flex taa-w-full taa-justify-between">
          <div className="taa-flex taa-flex-col taa-gap-1">
            <div className="taa-flex taa-items-center">
              <span className="taa-text-md taa-text-gray-900">{message?.title}</span>
            </div>
            <span className="taa-text-[0.8rem] taa-text-gray-600">
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
