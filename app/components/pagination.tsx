import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  NextButton,
  PageButton,
  Pagination,
  PrevButton,
} from "react-headless-pagination";
import { GetMessagesQuery } from "../graphql/schema";

interface Props {
  messages: GetMessagesQuery["messages"];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  messagesPerPage: number;
  currentMessages: GetMessagesQuery["messages"];
}

export function PaginationComponent({
  messages,
  messagesPerPage,
  page,
  setPage,
}: Props) {
  const totalPages = Math.ceil(
    messages!.length / messagesPerPage
  );

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <Pagination
      className="flex h-10 w-full select-none items-center justify-end text-sm"
      currentPage={page}
      edgePageCount={1}
      middlePagesSiblingCount={1}
      setCurrentPage={handlePageChange}
      totalPages={totalPages}
      truncableClassName="w-10 px-0.5 text-center"
      truncableText="..."
    >
      <PrevButton
        className={`${
          page === 0 ? "opacity-50" : ""
        } ml-2 flex items-center text-gray-500 hover:text-gray-600 focus:outline-none`}
      >
        <FontAwesomeIcon className="mr-3 h-5 w-5" icon={faChevronLeft} />
        Vorige
      </PrevButton>
      <div className="flex flex-grow list-none items-center justify-center">
        <PageButton
          activeClassName="bg-gray-500 text-primary-600 text-gray-900"
          className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full"
          inactiveClassName="text-gray-500"
        />
      </div>
      <NextButton
        className={`${
          page === totalPages - 1 ? "opacity-50" : ""
        } ml-2 flex items-center text-gray-500 hover:text-gray-600 focus:outline-none`}
      >
        Volgende
        <FontAwesomeIcon className="ml-3 h-5 w-5" icon={faChevronRight} />
      </NextButton>
    </Pagination>
  );
}
