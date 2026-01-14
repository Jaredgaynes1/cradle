import { Navbar } from "@/components/navbar";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"></div>
  );

  const items = [
    {
      title: "Why Marinas Need Modern Data Infrastructure",
      description:
        "How legacy industries are being transformed by real-time data analytics and why your marina can't afford to wait.",
      header: (
        <div className="flex justify-center items-center content-center">
          <Image
            src="images/blog1.png"
            alt="Cradle Logo"
            className="rounded-xl"
            width={150}
            height={100}
          />
        </div>
      ),
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      href: "/blog/why-marinas-need-modern-data-infrastructure",
    },
    {
      title: "The Hidden Costs of Excel Spreadsheets",
      description:
        "Discover how manual reporting is costing your marina thousands in lost revenue and wasted time.",
      header: (
        <div className="flex justify-center items-center content-center">
          <Image
            src="images/blog2.png"
            alt="Cradle Logo"
            className="rounded-xl"
            width={150}
            height={100}
          />
        </div>
      ),
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
      href: "/blog/hidden-costs-of-excel",
    },
    {
      title: "AI-Powered Dry Storage Optimization",
      description:
        "Learn how machine learning can maximize your storage capacity and increase NOI by 15-30%.",
      header: (
        <div className="flex justify-center items-center content-center">
          <Image
            src="images/blog3.png"
            alt="Cradle Logo"
            className="rounded-xl"
            width={150}
            height={100}
          />
        </div>
      ),
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      href: "/blog/ai-storage-optimization",
    },
    {
      title: "Building Customer Loyalty in the Marina Industry",
      description:
        "Automated communication strategies that keep boaters engaged without the manual work.",
      header: (
        <div className="flex justify-center items-center content-center">
          <Image
            src="images/blog4.png"
            alt="Cradle Logo"
            className="rounded-xl"
            width={150}
            height={100}
          />
        </div>
      ),
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      href: "/blog/building-customer-loyalty",
    },
    {
      title: "System Integration 101: Connecting Your Marina Tech Stack",
      description:
        "A practical guide to unifying your accounting, PMS, and operations systems into one data layer.",
      header: (
        <div className="flex justify-center items-center content-center">
          <Image
            src="images/blog1.png"
            alt="Cradle Logo"
            className="rounded-xl"
            width={150}
            height={100}
          />
        </div>
      ),
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
      href: "/blog/system-integration-101",
    },
    {
      title: "Real-Time Business Intelligence for Marina Operators",
      description:
        "How instant access to your data transforms decision-making and operational efficiency.",
      header: (
        <div className="flex justify-center items-center content-center">
          <Image
            src="images/blog1.png"
            alt="Cradle Logo"
            width={150}
            height={100}
          />
        </div>
      ),
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
      href: "/blog/real-time-business-intelligence",
    },
    {
      title: "Case Study: 30% Revenue Increase Through Data Analytics",
      description:
        "How one marina operator used Cradle to identify untapped revenue streams and optimize pricing.",
      header: (
        <div className="flex justify-center items-center content-center">
          <Image
            src="images/blog1.png"
            alt="Cradle Logo"
            width={150}
            height={100}
          />
        </div>
      ),
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
      href: "/blog/case-study-revenue-increase",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <section className="py-16 mt-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
              <Link key={i} href={item.href}>
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={
                    i === 3 || i === 6
                      ? "md:col-span-2 cursor-pointer"
                      : " cursor-pointer"
                  }
                />
              </Link>
            ))}
          </BentoGrid>
        </div>
      </section>
    </div>
  );
}
