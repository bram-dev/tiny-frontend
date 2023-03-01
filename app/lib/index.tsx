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
                <div className="taa-divide-y taa-p-4">
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
                  <div className="taa-border-t taa-border-gray-300 taa-p-4">
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
        className="taa-rounded taa-flex taa-justify-center taa-items-center taa-bg-blue-700 taa-p-3 hover:taa-bg-blue-800 focus:taa-outline-none"
      >
        <FontAwesomeIcon icon={faBell} className="taa-h-4 taa-w-4 taa-text-white" />
      </button>
      {isOpen && (
        <Card className="taa-relative taa-border taa-rounded-lg taa-max-w-[500px] taa-mt-1 taa-z-50">
          {isOpenMessage ? <>{messageContent}</> : <>{messagesList}</>}
        </Card>
      )}
    </>
  );
}
