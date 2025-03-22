import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Contact Form */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-lg bg-gradient-to-br from-gray-900 to-gray-700 px-8 py-11 shadow-lg dark:bg-gray-800 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-10 text-lg font-medium text-gray-300">
                Our support team will get back to you ASAP via email.
              </p>

              <form>
                <div className="-mx-4 flex flex-wrap">
                  {/* Name Input */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-3 block text-sm font-semibold text-gray-200">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-gray-600 bg-gray-800 px-6 py-3 text-base text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-3 block text-sm font-semibold text-gray-200">
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-gray-600 bg-gray-800 px-6 py-3 text-base text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label className="mb-3 block text-sm font-semibold text-gray-200">
                        Your Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Enter your message"
                        className="w-full resize-none rounded-md border border-gray-600 bg-gray-800 px-6 py-3 text-base text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="w-full px-4">
                    <button className="w-full rounded-md bg-blue-600 px-9 py-4 text-lg font-semibold text-white shadow-lg duration-300 hover:bg-blue-500">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
