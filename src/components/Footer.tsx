import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-3 gap-8 px-6">
        <div>
          <h2 className="text-md font-bold">cyber</h2>
          <p className="mt-2 text-gray-400 text-sm">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <Image src="/images/footerlogo.jpg" alt="Social Media Icons" width={150} height={30} />
          </div>
        </div>

        <div>
          <h2 className="text-md font-bold">Services</h2>
          <ul className="mt-2 space-y-2 text-gray-400 text-sm">
            <li>Bonus program</li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
        </div>

        <div>
          <h2 className="text-md font-bold">Assistance to the buyer</h2>
          <ul className="mt-2 space-y-2 text-gray-400 text-sm">
            <li>Find an order</li>
            <li>Terms of delivery</li>
            <li>Exchange and return of goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

  