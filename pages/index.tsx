import Head from "next/head";
import Image from "next/image";
import CustomLink from "@/components/CustomLink";
import ImageSwiper from "@/components/ImageSwiper";
import StepSection from "@/components/StepSection";
import FeatureSection from "@/components/FeatureSection";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import {
  headerVariant,
  subheaderVariant,
  rotateFromRightVariant,
} from "@/motionVariants/HomePage";

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
                priority
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/svgs/pillsync-logo.svg"
                alt="Pillsync logo"
                width={114}
                height={36}
                priority
              />
            </div>
            <div className="hidden md:flex md:gap-x-8 md:text-body-sm md:font-semibold">
              <CustomLink className="text-zinc-700" href="#product">
                Our Product
              </CustomLink>
            </div>
          </nav>
        </div>

        {/* main hero section */}
        <div className="mx-auto max-w-7xl px-8 pt-4 lg:flex lg:gap-40 lg:py-20">
          {/* mobile hero section */}
          <section className="mx-auto mt-8 max-w-7xl">
            <motion.h1
              className="text-h4 font-bold text-zinc-700 lg:text-h1"
              variants={headerVariant}
              initial="hidden"
              animate="visible"
            >
              Manage your {""}
              <span className="text-h4 font-bold bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text lg:text-h1">
                Medication Easily{" "}
                <span className="whitespace-nowrap">and Smartly</span>
              </span>
            </motion.h1>

            <motion.p
              className="mt-5 text-body-lg font-medium text-gray-500 lg:mt-10 lg:text-h3"
              variants={subheaderVariant}
              initial="hidden"
              animate="visible"
            >
              Enhances patient’s experience with AI-powered pharmaceutical
              service
            </motion.p>
          </section>

          {/* 3D model section */}
          <section className="mx-auto max-w-7xl mt-8 mb-8 lg:mt-0 lg:mb-0 h-[300px] md:h-[400px] lg:h-[650px] w-full">
            <motion.div
              className="w-full h-full"
              variants={rotateFromRightVariant}
              initial="hidden"
              animate="visible"
            >
              <Spline
                scene="https://prod.spline.design/Zzm6PH8x0u7-YPak/scene.splinecode"
                className="w-full h-full"
                style={{ background: "transparent" }}
              />
            </motion.div>
          </section>
        </div>

        {/* Use case scenarios section */}
        <section className="mx-auto max-w-7xl px-8 lg:flex lg:py-20">
          <motion.span
            variants={subheaderVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-full"
          >
            <ImageSwiper />
          </motion.span>
        </section>

        {/* How it works section */}
        <section className="mx-auto max-w-7xl px-8 pt-4 lg:py-20">
          <div className="text-center text-h4 font-bold text-zinc-700 lg:text-h1">
            How it works
          </div>
          <StepSection />
        </section>

        {/* Explore our product section */}
        <section id="product" className="mx-auto max-w-7xl px-8 pt-4 lg:py-20">
          <h1 className="text-center text-h4 font-bold text-zinc-700 lg:text-h1">
            Explore our product
          </h1>
          <FeatureSection />
        </section>

        {/* Video section */}
        <section className="mx-auto max-w-7xl px-8 py-8 lg:flex lg:py-20">
          {/* <video width="1200" height="720" controls>
            <source src="video/test.mp4" type="video/mp4" />
          </video> */}
          <div className="relative group w-full h-[400px] md:h-[600px] border">
            <Image
              src="/video/video-cover.jpg"
              alt="test"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
            />
          </div>
        </section>

        {/* What's in our box section */}
        <section className="mx-auto max-w-7xl px-8 py-8 lg:py-20">
          <div className="text-center text-h4 font-bold text-zinc-700 lg:text-h1">
            Packing solutions
          </div>
          <div className="flex flex-col gap-y-12 lg:flex-row lg:justify-center lg:items-center lg:gap-x-12 pt-8 lg:pt-16">
            <div>
              <div className="rounded-md p-4 shadow-lg transition-all duration-300 hover:shadow-2xl">
                <Image
                  src="/images/pillsync-packaging.png"
                  alt="Box packaging"
                  width={600}
                  height={600}
                  priority
                />
              </div>
              <div className="text-center mt-8 lg:mt-16">
                <h3 className="text-h5 font-medium text-zinc-700">
                  Pharmacy pack
                </h3>
              </div>
            </div>
            <div>
              <div className="rounded-md p-4 shadow-lg transition-all duration-300 hover:shadow-2xl">
                <Image
                  src="/images/pharmacy-bag-packaging.png"
                  alt="Pharmacy pack"
                  width={600}
                  height={600}
                  priority
                />
              </div>
              <div className="text-center mt-8 lg:mt-16">
                <h3 className="text-h5 font-medium text-zinc-700">
                  Pharmacy bag
                </h3>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 flex flex-col items-start lg:items-center gap-y-14 bg-teal-50 px-12 py-12">
          <div className="">
            <Image
              src="/svgs/pillsync-logo.svg"
              alt="Pillsync logo"
              width={114}
              height={36}
            />
          </div>
          <p className="text-left lg:text-center text-body-lg text-medium text-gray-500">
            Manage your medication easily and smartly.
          </p>
          <p className="text-left lg:text-center text-body-sm text-medium text-gray-500">
            © 2025 PillSync. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
