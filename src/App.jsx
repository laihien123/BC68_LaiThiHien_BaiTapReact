import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <a className="text-2xl font-bold" href="#">
              Start Bootstrap
            </a>
            <div className="flex space-x-4">
              <a className="hover:text-yellow-500" href="#">
                Home
              </a>
              <a className="hover:text-yellow-500" href="#">
                About
              </a>
              <a className="hover:text-yellow-500" href="#">
                Services
              </a>
              <a className="hover:text-yellow-500" href="#">
                Contact
              </a>
            </div>
          </nav>
        </header>

        <div className="flex-grow p-8">
          <div className="text-center bg-gray-100 p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4">A Warm Welcome!</h1>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
              ipsam, eligendi, in quo sunt possimus non incidunt odit vero
              aliquid similique quaerat nam nobis aspernatur vitae fugiat
              numquam repellat.
            </p>
            <a
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              href="#"
              role="button"
            >
              Call to action!
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="http://placehold.it/500x325"
                alt="Card image cap"
              />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">Card title</h5>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapiente esse necessitatibus neque.
                </p>
                <a
                  href="#"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Find Out M!
                </a>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="http://placehold.it/500x325"
                alt="Card image cap"
              />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">Card title</h5>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapiente esse necessitatibus neque.
                </p>
                <a
                  href="#"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Find Out M!
                </a>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="http://placehold.it/500x325"
                alt="Card image cap"
              />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">Card title</h5>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapiente esse necessitatibus neque.
                </p>
                <a
                  href="#"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Find Out M!
                </a>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="http://placehold.it/500x325"
                alt="Card image cap"
              />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">Tiêu Đề Thẻ</h5>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapiente esse necessitatibus neque.
                </p>
                <a
                  href="#"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Find Out M!
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-gray-800 text-white p-4 text-center">
          Bản quyền © Website của bạn 2019
        </footer>
      </div>
    </>
  );
}

export default App;
