const ErrorMessage = ({ foodItems }) => {
  return (
    <>
      {foodItems.length === 0 && (
        <div className="alert alert-info" role="alert">
          I am still hungry
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
