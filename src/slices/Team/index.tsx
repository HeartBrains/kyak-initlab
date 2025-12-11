"use client";

import { HeaderFour } from "@/app/components/Typography";
import { Content, GroupField } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Simplify } from "../../../prismicio-types";

const ListOfMembers = ({
  members,
}: {
  members:
    | GroupField<Simplify<Content.TeamSliceDefaultPrimaryMembersItem>>
    | GroupField<Simplify<Content.TeamSliceDefaultPrimaryBoardMembersItem>>
    | GroupField<
        Simplify<Content.TeamSliceDefaultPrimaryDirectorsCircleMembersItem>
      >;
}) => {
  return (
    <section className="accordion-wrapper ">
      <Accordion
        variant="splitted"
        fullWidth
        hideIndicator
        showDivider={false}
        itemClasses={{
          base: "p-0 ",
          trigger: "py-1",
        }}
      >
        {members.map((member) => {
          const hasDescription = member.description?.length > 0;
          return (
            <AccordionItem
              key={member.name}
              aria-label={`accordion-${member.name}`}
              title={
                <div
                  className={`flex flex-col gap-[0px] min-h-[45px] sm:flex-row ${
                    hasDescription ? "" : "cursor-default"
                  }`}
                >
                  <p className="basis-full" style={{ maxWidth: "33%" }}>
                    {member.name}
                  </p>
                  <p className="basis-full" style={{ maxWidth: "33%" }}>
                    {member.title}
                  </p>
                  <p className="basis-full" style={{ maxWidth: "33%" }}>
                    <a className="no-underline" href={`mailto:${member.email}`}>
                      {member.email}
                    </a>
                  </p>
                </div>
              }
            >
              {hasDescription && (
                <section className="py-6">
                  <PrismicRichText field={member.description} />
                </section>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

/**
 * Component for "Team" Slices.
 */
const Team = ({ slice }: TeamProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col gap-4">
        {slice.primary.members.length > 0 && (
          <section className="flex flex-col gap-4 border-b-[1px] border-black pb-4">
            <HeaderFour className="underline">{slice.primary.title}</HeaderFour>
            <ListOfMembers members={slice.primary.members} />
          </section>
        )}

        {slice.primary.board_members.length > 0 && (
          <section className="flex flex-col gap-4 border-b-[1px] border-black pb-4">
            <HeaderFour className="underline">
              {slice.primary.board_title}
            </HeaderFour>
            <ListOfMembers members={slice.primary.board_members} />
          </section>
        )}

        {slice.primary.directors_circle_members.length > 0 && (
          <section className="flex flex-col gap-4 ">
            <HeaderFour className="underline">
              {slice.primary.directors_circle_title}
            </HeaderFour>
            <ListOfMembers members={slice.primary.directors_circle_members} />
          </section>
        )}
      </div>
    </section>
  );
};

export default Team;
