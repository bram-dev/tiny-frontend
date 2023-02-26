import { useQuery } from "@apollo/client";
import { faBell, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useState } from "react";
import {
  GetMessagesQuery,
  GetMessagesQueryVariables,
  GetMessagesDocument,
} from "../graphql/schema";
import { PaginationComponent as Pagination } from "../components/pagination";
import { Alert } from "../components/alert";
import { Card } from "../components/card";
import { MessageListItem } from "../components/message";
import { MessageContentComponent } from "../components/message-content";

export default function ExampleTinyFrontend() {
  const { data } = useQuery<GetMessagesQuery, GetMessagesQueryVariables>(
    GetMessagesDocument
  );
  const [messages, setMessages] = useState<GetMessagesQuery["messages"]>([]);
  const [page, setPage] = useState<number>(0);
  const [messagesPerPage] = useState(5);
  const indexOfLastMessage = (page + 1) * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = messages?.slice(
    indexOfFirstMessage,
    indexOfLastMessage
  );
  const [isOpen, setIsOpen] = useState(false);
  const [messageContent, setMessageContent] = useState<JSX.Element>(<></>);
  const [isOpenMessage, setIsOpenMessage] = useState(false);
  const [messagesList, setMessagesList] = useState<JSX.Element>(<></>);

  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        const dataMessages = await data.messages
        setMessages(dataMessages);
      } else {
        setMessages([]);
      }
    };
    fetchData();
  }, [data]);

  useMemo(() => {
    if (currentMessages) {
      setMessagesList(
        <>
          {currentMessages!.length === 0 ? (
            <Card.Section>
              <Alert type="info" icon={faCircleInfo}>
                Geen berichten gevonden
              </Alert>
            </Card.Section>
          ) : (
            currentMessages!.length > 0 && (
              <Card.Empty>
                <div className="divide-y p-4">
                  {currentMessages!.map((message) => (
                    <div
                      onClick={() => {
                        setIsOpenMessage(true),
                          setMessageContent(
                            <MessageContentComponent
                              message={message}
                              setIsOpenMessage={setIsOpenMessage}
                              setMessageContent={setMessageContent}
                            />
                          );
                      }}
                    >
                      <MessageListItem key={message?.id} message={message} />
                    </div>
                  ))}
                </div>
                {messages!.length > 5 && (
                  <div className="border-t border-gray-300 p-4">
                    <Pagination
                      currentMessages={currentMessages}
                      page={page}
                      setPage={setPage}
                      messages={messages}
                      messagesPerPage={messagesPerPage}
                    />
                  </div>
                )}
              </Card.Empty>
            )
          )}
        </>
      );
    }
  }, [messages, page]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded flex justify-center items-center bg-blue-700 p-3 hover:bg-blue-800 focus:outline-none"
      >
        <FontAwesomeIcon icon={faBell} className="h-4 w-4 text-white" />
      </button>
      {isOpen && (
        <Card className="relative border rounded-lg max-w-[500px] mt-1 z-50">
          {isOpenMessage ? <>{messageContent}</> : <>{messagesList}</>}
        </Card>
      )}
    </>
  );
}
