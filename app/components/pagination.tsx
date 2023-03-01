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
      className="taa-flex taa-h-10 taa-w-full taa-select-none taa-items-center taa-justify-end taa-text-sm"
      currentPage={page}
      edgePageCount={1}
      middlePagesSiblingCount={1}
      setCurrentPage={handlePageChange}
      totalPages={totalPages}
      truncableClassName="taa-w-10 taa-px-0.5 taa-text-center"
      truncableText="..."
    >
      <PrevButton
        className={`${
          page === 0 ? "taa-opacity-50" : ""
        } taa-ml-2 taa-flex taa-items-center taa-text-gray-500 hover:taa-text-gray-600 focus:taa-outline-none`}
      >
        <FontAwesomeIcon className="taa-mr-3 taa-h-5 taa-w-5" icon={faChevronLeft} />
        Vorige
      </PrevButton>
      <div className="taa-flex taa-flex-grow taa-list-none taa-items-center taa-justify-center">
        <PageButton
          activeClassName="taa-bg-gray-500 taa-text-primary-600 taa-text-gray-900"
          className="taa-flex taa-h-6 taa-w-6 taa-cursor-pointer taa-items-center taa-justify-center taa-rounded-full"
          inactiveClassName="taa-text-gray-500"
        />
      </div>
      <NextButton
        className={`${
          page === totalPages - 1 ? "taa-opacity-50" : ""
        } taa-ml-2 taa-flex taa-items-center taa-text-gray-500 hover:taa-text-gray-600 focus:taa-outline-none`}
      >
        Volgende
        <FontAwesomeIcon className="taa-ml-3 taa-h-5 taa-w-5" icon={faChevronRight} />
      </NextButton>
    </Pagination>
  );
}
