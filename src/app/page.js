import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[1200px] w-full m-auto roboto ">
      <div className="flex justify-between h-[48px] items-center">
        <Image
          src="/Images/tr.jpeg"
          width={40}
          height={30}
          className="h-[24px]"
          alt="flag"
        />
        <div className="flex text-[14px] roboto_light  ">
          <div className="mr-[16px]">Bakiye Yükle</div>
          <div className="mr-[16px]">Satış Yap</div>
          <div>Yardım</div>
        </div>
      </div>
      <div className="h">
        <div className="playfair_display w-[200px] h-[80px] flex items-center text-[20px]  ">
          OYUNCUMARKET
        </div>
      </div>
    </main>
  );
}
