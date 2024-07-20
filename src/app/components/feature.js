import Image from "next/image";
import Mugshot from "/root/projects/personal_site/public/selfie.JPG";

export default function Feature() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:gap-x-8 lg:grid-cols-2 lg:px-8 border-b-4 border-gray-900/5">
        <div className="px-6 sm:pt-10 pb-10">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
            Matthew Szekeres
          </h1>
          <h3>
            Junior Fullstack Developer
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <div className="px-6 pt-10 pb-10">
          <Image
            height={500}
            width={500}
            alt=""
            src={Mugshot}
            className="bg-gray-50 object-cover lg:inset-0 lg:aspect-auto lg:h-full"
          />
        </div>
      </div>
    </div>
  );
}
