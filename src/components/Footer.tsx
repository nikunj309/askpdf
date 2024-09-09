
// import Image from 'next/image';
// import logo from '../public/assets/logo_1.png';

function Footer() {
  return (
    <div className="py-8 px-24 bg-transparent/75 text-white">
      <div className="flex space-x-4">
      <h1 className="text-3xl font-bold text-green-600">Ask<span className='text-white flex-col flex ml-10' >Pdf</span></h1>
      </div>

      <div className="pt-8 flex flex-wrap justify-between text-left">
        <div className="flex flex-col">
          <h4 className="text-lg pb-4">Project</h4>
          <a href="/" className="text-gray-300 pb-2 text-base">Changelog</a>
          <a href="/" className="text-gray-300 pb-2 text-base">Status</a>
          <a href="/" className="text-gray-300 pb-2 text-base">License</a>
          <a href="/" className="text-gray-300 pb-2 text-base">All Versions</a>
        </div>

        <div className="flex flex-col">
          <h4 className="text-lg pb-4">Community</h4>
          <a href="/" className="text-gray-300 pb-2 text-base">GitHub</a>
          <a href="/" className="text-gray-300 pb-2 text-base">Issues</a>
          <a href="/" className="text-gray-300 pb-2 text-base">Project</a>
          <a href="/" className="text-gray-300 pb-2 text-base">Twitter</a>
        </div>

        <div className="flex flex-col">
          <h4 className="text-lg pb-4">Help</h4>
          <a href="/" className="text-gray-300 pb-2 text-base">Support</a>
          <a href="/" className="text-gray-300 pb-2 text-base">Troubleshooting</a>
          <a href="/" className="text-gray-300 pb-2 text-base">Contact us</a>
        </div>

        <div className="flex flex-col">
          <h4 className="text-lg pb-4">Others</h4>
          <a href="/" className="text-gray-300 pb-2 text-base">Terms of Service</a>
          <a href="/" className="text-gray-300 pb-2 text-base">Privacy Policy</a>
          <a href="/" className="text-gray-300 pb-2 text-base">License</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
