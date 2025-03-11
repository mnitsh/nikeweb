import React from "react";

function ShoeCard({ shoeUrl, changeBigShoeImage, bigShoe, bigShoeImg }) {
  return (
    <div
      onClick={() => {
        changeBigShoeImage(bigShoe);
      }}
      className={`border-2 rounded-xl ${
        bigShoe === bigShoeImg ? `border-coral-red` : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
    >
      <div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={shoeUrl} alt="Thumbnail" height={127} width={103} className="object-contain"/>
      </div>
    </div>
  );
}

export default ShoeCard;
