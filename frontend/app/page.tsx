import { Button } from "@/components/ui/button";
import React from "react";
import { SlideIn } from "@/components/slideIn";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { fontFamily } from "@/lib/utils";

export default function Home() {
  const CTA = (
    <div className="max-w-lg gap-4 flex flex-col px-12 py-8">
      <p className="text-xl text-primary">
        Create and manage your DAOs with ease. Vote on proposals.
        <br />
        <br />
        Hurrah for democracy!
      </p>
      <div className="flex gap-4">
        <Link href="/dao/create">
          <Button className="w-fit">Create a DAO</Button>
        </Link>
        <Link href="/dao">
          <Button className="w-fit">View your DAOs</Button>
        </Link>
      </div>
    </div>
  );

  const Features = (
    <div className="bg-secondary">
      <div className="flex-1 px-12 py-8 overflow-x-hidden max-w-5xl">
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
              - <strong>Secure and Transparent:</strong>
              {` Our platform leverages
            blockchain technology to ensure the highest level of security and
            transparency. All decisions and transactions are recorded on the
            blockchain, providing an immutable record of your DAO's activities.`}
            </div>

            <div>
              - <strong>Propose and Vote:</strong> Engage in meaningful
              discussions and propose ideas within your DAO. Harness the
              collective wisdom by enabling members to vote on proposals,
              ensuring decisions truly represent the majority.
            </div>

            <div>
              - <strong>Customizable Governance:</strong>
              {`Tailor your DAO's
            governance model to fit your unique needs. Choose from various
            voting mechanisms, such as simple majority, quadratic voting, or
            even futarchy.`}
            </div>

            <div>
              - <strong>Community Building:</strong> Foster a vibrant and
              engaged community by providing spaces for discussions, sharing
              resources, and collaborating on projects directly within the
              platform.
            </div>

            <div>
              - <strong>Cross-DAO Interaction:</strong> Connect with other DAOs
              and create alliances to amplify your impact. Collaborate on larger
              initiatives, share insights, and exchange best practices.
            </div>

            <div>
              - <strong>Educational Resources:</strong> New to the world of
              DAOs? No worries! DAONow offers a wealth of educational materials,
              tutorials, and case studies to help you navigate the realm of
              decentralized governance.
            </div>
          </div>
        </SlideIn>
      </div>
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

  return (
    <div className="gap-4 flex-col flex">
      {CTA}
      {Features}
      {Explanation}
    </div>
  );
}
