import Head from "next/head";
import Image from "next/image";
import CustomLink from "@/components/CustomLink";
import ImageSwiper from "@/components/ImageSwiper";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PillSync - Manage your medication easily and smartly</title>
        <meta
          name="description"
          content="Manage your medication easily and smartly"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-hidden">
        <div className="border-b-2 border-sky-100 bg-zinc-50">
          <nav className="mx-auto flex max-w-7xl justify-center bg-zinc-50 px-8 py-4 md:justify-between">
            <div className="md:hidden">
              <Image
                src="/svgs/pillsync-logo.svg"
                alt="Pillsync logo"
                width={114}
                height={36}
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/svgs/pillsync-logo.svg"
                alt="Pillsync logo"
                width={114}
                height={36}
              />
            </div>
            <div className="hidden md:flex md:gap-x-8 md:text-body-sm md:font-medium">
              <CustomLink className="text-zinc-700" href="#product">
                Our Product
              </CustomLink>
            </div>
          </nav>
        </div>

        {/* main hero section */}
        <div className="bg-zinc-50">
          <div className="mx-auto max-w-7xl px-8 pt-4 lg:flex lg:gap-40 lg:py-20">
            {/* mobile hero section */}
            <section className="mx-auto mt-8 max-w-7xl">
              <div className="text-h4 font-bold text-zinc-700 lg:text-h1">
                Manage your {""}
                <span className="text-h4 font-bold bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text lg:text-h1">
                  Medication Easily{" "}
                  <span className="whitespace-nowrap">and Smartly</span>
                </span>
              </div>

              <p className="mt-5 text-body-lg font-medium text-gray-500 lg:mt-10 lg:text-h3">
                Enhances patient’s experience with AI-powered pharmaceutical
                service
              </p>
            </section>

            {/* 3D model section */}
            <section className="mx-auto max-w-7xl mt-10 mb-11">
              <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
            </section>
          </div>
        </div>

        {/* Use case scenarios section */}
        <section id="product" className="mx-auto max-w-7xl px-8 lg:py-20">
          <ImageSwiper />
        </section>
      </main>
    </div>
  );
}
