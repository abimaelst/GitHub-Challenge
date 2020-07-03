import React from 'react';

export default function ButtomNext({ currectPage, changePage }) {
  const handlePreviousPage = (event) => {
    const page = currectPage;
    const numberPage = currectPage > 1 && page - 1;
    changePage(numberPage);
    window.scrollTo(0, 200);
  };

  const disableTest = currectPage === 1 ? true : false;
  return (
    <div>
      <button
        href="#!"
        className="btn waves-effect waves-teal"
        style={styles.bottom}
        onClick={handlePreviousPage}
        disabled={disableTest}
      >
        Previous
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
