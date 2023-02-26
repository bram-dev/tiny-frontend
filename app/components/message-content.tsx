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
          "w-full pl-4 prose prose-sm pt-2 focus:outline-none",
      },
    },
    content: message?.content,
    editable: false,
  });

  return (
    <Card.Empty>
      <div className="p-4">
        <button
          className="relative inline-flex items-center rounded-lg border border-gray-700 py-2.5 pr-5 pl-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-700 focus:outline-none"
          onClick={() => {
            setIsOpenMessage(false), setMessageContent(<></>);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeftLong} className="mr-3 h-5 w-5" />
          Vorige
        </button>
        <div className="flex flex-col pt-2 gap-2 divide-y">
          <div className="flex flex-col">
            <span className="text-2xl text-gray-900">{message?.title}</span>
            <span className="flex items-end	 text-[0.8rem] text-gray-600">
              {new Date(message?.startingDate).toLocaleDateString(
                "nl-NL",
                options
              )}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
    </Card.Empty>
  );
}
