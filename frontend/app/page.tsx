import { Button } from "@/components/ui/button";
import logo from "@/assets/logo3.png";
import Image from "next/image";
import React from "react";
import { SlideIn } from "@/components/slideIn";
import { Separator } from "@/components/ui/separator";
import { Vina_Sans } from "next/font/google";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeartFilled
} from "@tabler/icons-react";

const fontFamily = Vina_Sans({
  weight: "400",
  subsets: ["latin"]
});

export default function Home() {
  const Header = (
    <div className="flex gap-4 items-center px-12 pt-8">
      <Image
        src={logo}
        alt="Logo"
        width={75}
        height={75}
        className="rounded-full shadow-lg"
      />
      <h1 className={`text-7xl text-primary ${fontFamily.className}`}>
        DAONow
      </h1>
    </div>
  );

  const CTA = (
    <div className="max-w-lg gap-4 flex flex-col px-12 py-8">
      <p className="text-xl text-primary">
        Create and manage your DAOs with ease. Vote on proposals.
        <br />
        <br />
        Hurrah for democracy!
      </p>
      <div className="flex gap-4">
        <Button className="w-fit">Create a DAO</Button>
        <Button className="w-fit">View your DAOs</Button>
      </div>
    </div>
  );

  const Features = (
    <div className="flex-1 h-[500px] bg-[#fdd310] px-12 py-8 overflow-x-hidden">
      <strong className="text-5xl" style={{ ...fontFamily.style }}>
        Why Choose DAONow?
      </strong>
      <SlideIn>
        <div className="gap-8 flex flex-col py-8">
          <div>
            - <strong>Seamless Creation:</strong> With DAONow, you can
            effortlessly create your own DAO without any technical expertise.
            Simply define the purpose, structure, and rules, and watch your
            community flourish.
          </div>

          <div>
            - <strong>Secure and Transparent:</strong> Our platform leverages
            blockchain technology to ensure the highest level of security and
            transparency. All decisions and transactions are recorded on the
            blockchain, providing an immutable record of your DAO's activities.
          </div>

          <div>
            - <strong>Propose and Vote:</strong> Engage in meaningful
            discussions and propose ideas within your DAO. Harness the
            collective wisdom by enabling members to vote on proposals, ensuring
            decisions truly represent the majority.
          </div>

          <div>
            - <strong>Customizable Governance:</strong> Tailor your DAO's
            governance model to fit your unique needs. Choose from various
            voting mechanisms, such as simple majority, quadratic voting, or
            even futarchy.
          </div>

          <div>
            - <strong>Community Building:</strong> Foster a vibrant and engaged
            community by providing spaces for discussions, sharing resources,
            and collaborating on projects directly within the platform.
          </div>

          <div>
            - <strong>Cross-DAO Interaction:</strong> Connect with other DAOs
            and create alliances to amplify your impact. Collaborate on larger
            initiatives, share insights, and exchange best practices.
          </div>

          <div>
            - <strong>Educational Resources:</strong> New to the world of DAOs?
            No worries! DAONow offers a wealth of educational materials,
            tutorials, and case studies to help you navigate the realm of
            decentralized governance.
          </div>
        </div>
      </SlideIn>
    </div>
  );

  const Explanation = (
    <div className="flex flex-col gap-8 py-8 px-8 text-primary">
      <strong className="text-5xl" style={{ ...fontFamily.style }}>
        What is a DAO?
      </strong>
      <SlideIn isSlideFromLeft>
        A DAO, or Decentralized Autonomous Organization, is a groundbreaking
        concept that allows people from around the world to come together,
        propose ideas, make decisions, and take actions in a decentralized and
        transparent manner. DAOs are reshaping how we govern, collaborate, and
        innovate, enabling more inclusive and efficient decision-making
        processes.
      </SlideIn>
    </div>
  );

  // footer with github, linkedin links, created by LeoTheG
  const Footer = (
    <div className="flex flex-col gap-8 pb-12 px-8 text-primary">
      <strong className="text-2xl flex items-center gap-2">
        Created by Leo with <IconHeartFilled />
      </strong>
      <div className="flex gap-4 items-center">
        <div className="rounded-full border-white border-2 p-1">
          <a href="https://github.com/LeoTheG/dao-site" target="_blank">
            <IconBrandGithub />
          </a>
        </div>
        <a href="https://linkedin.com/in/leonar-gharib" target="_blank">
          <IconBrandLinkedin size={36} />
        </a>
      </div>
    </div>
  );

  return (
    <div className="gap-4 flex-col flex">
      {Header}
      {CTA}
      {Features}
      {Explanation}
      <Separator className="bg-slate-500" />
      {Footer}
    </div>
  );
}
