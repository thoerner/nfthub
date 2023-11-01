const LoadingModal = ({ message }: { message: string }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center">
        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
        <div className="mt-3 text-gray-700">{message}</div>
      </div>
    </div>
  );
};

export default LoadingModal;