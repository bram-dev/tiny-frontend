import React from "react";
import { Card } from "../components/card";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";
import UnderLine from "@tiptap/extension-underline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

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
  setIsOpenMessage: React.Dispatch<React.SetStateAction<boolean>>;
  setMessageContent: React.Dispatch<React.SetStateAction<JSX.Element>>;
}

export function MessageContentComponent({
  message,
  setIsOpenMessage,
  setMessageContent,
}: Props) {
  const editor = useEditor({
    extensions: [StarterKit, UnderLine, TextStyle, FontFamily],
    editorProps: {
      attributes: {
        class:
          "taa-w-full taa-pl-4 taa-prose taa-prose-sm taa-pt-2 focus:taa-outline-none",
      },
    },
    content: message?.content,
    editable: false,
  });

  return (
    <Card.Empty>
      <div className="taa-p-4">
        <button
          className="taa-relative taa-inline-flex taa-items-center taa-rounded-lg taa-border taa-border-gray-700 taa-py-2.5 taa-pr-5 taa-pl-3 taa-text-center taa-text-sm taa-font-medium taa-text-gray-700 hover:taa-bg-gray-200 hover:taa-text-gray-700 focus:taa-outline-none"
          onClick={() => {
            setIsOpenMessage(false), setMessageContent(<></>);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeftLong} className="taa-mr-3 taa-h-5 taa-w-5" />
          Vorige
        </button>
        <div className="taa-flex taa-flex-col taa-pt-2 taa-gap-2 taa-divide-y">
          <div className="taa-flex taa-flex-col">
            <span className="taa-text-2xl taa-text-gray-900">{message?.title}</span>
            <span className="taa-flex taa-items-end	 taa-text-[0.8rem] taa-text-gray-600">
              {new Date(message?.startingDate).toLocaleDateString(
                "nl-NL",
                options
              )}
            </span>
          </div>
          <div className="taa-text-sm taa-text-gray-500">
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
    </Card.Empty>
  );
}
