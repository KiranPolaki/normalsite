import Image from "next/image";

function ImageDefaultBlur({ setup }) {
  return (
    <div>
      <Image
        src={setup}
        width={1100}
        height={700}
        alt={"setup image"}
        placeholder="blur"
        className="rounded-3xl shadow-2xl "
      />
    </div>
  );
}

export default ImageDefaultBlur;
