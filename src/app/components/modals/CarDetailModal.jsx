
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function CarDetailModal({
  isOpen,
  onClose,
  carDetails,
  newCar,
  reconditionedCar,
}) {
  if (!isOpen) return null;

  return (
    <dialog open className="modal modal-open">
      <div className="modal-box bg-white">
        <form method="dialog">
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <div className="">
          <div className="flex items-center gap-5 mb-5">
            <div className="border py-2 bg-white rounded-md">
              <Image
                unoptimized
                src={carDetails.image}
                width={60}
                height={50}
                className=""
                alt=""
              />
            </div>
            <div className="">
              <p className="text-[15px] text-gray-500">{carDetails.model}</p>
              <h1 className="my-1">{carDetails.engineType}</h1>
            </div>
          </div>
          <hr />

          {newCar && (
            <div className="mt-3">
              <h2 className="text-lg font-semibold">Neuf</h2>
              <p>Stock: {newCar.stock}</p>
              <p>Price: {newCar.price} €</p>
              {newCar.stock > 0 ? (
                <Link href={newCar.paymentLink} target="_blank">
                  <button className="orderButton">Commander</button>
                </Link>
              ) : (
                <p className="text-red-500">Hors stock</p>
              )}
            </div>
          )}

          {reconditionedCar && (
            <div className="mt-3">
              <h2 className="text-lg font-semibold">Reconditionné</h2>
              <p>Stock: {reconditionedCar.stock}</p>
              <p>Price: {reconditionedCar.price} €</p>
              {reconditionedCar.stock > 0 ? (
                <Link href={reconditionedCar.paymentLink} target="_blank">
                  <button className="orderButton">Commander</button>
                </Link>
              ) : (
                <p className="text-red-500">Hors stock</p>
              )}
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
