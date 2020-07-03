import React from 'react';

export default function ButtomNext({ currectPage, changePage, maxPages }) {
  const handleNextPage = (event) => {
    const page = currectPage;
    const numberPage = maxPages > currectPage && page + 1;
    changePage(numberPage);
    window.scrollTo(0, 200);
  };

  const disableTest = maxPages === currectPage ? true : false;
  return (
    <div>
      <button
        href="#!"
        className="btn waves-effect waves-teal"
        style={styles.bottom}
        onClick={handleNextPage}
        disabled={disableTest}
      >
        Next
      </button>
    </div>
  );
}

const styles = {
  bottom: {
    width: '120px',
    borderRadius: '0 18px',
  },
};
