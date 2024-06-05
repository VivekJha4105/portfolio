const Contacts = () => {
  return (
    <div className="border-b border-neutral-800 pb-16">
      <div className="flex flex-col flex-wrap justify-center items-center">
        <h2 className="text-4xl font-bold my-8">Contacts</h2>

        <a
          href="#"
          className="ml-2 border-b cursor-pointer bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 bg-clip-text text-xl text-transparent font-medium"
        >
          vivek.ajay.p50@gmail.com
        </a>
        <p className="ml-2 mt-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 bg-clip-text text-xl text-transparent font-medium">
          +91 8709432583
        </p>
      </div>
    </div>
  );
};

export default Contacts;
