import { getMemberData } from "@/services/memberService";
import MemberLayout from "../components/MemberLayout";
import PageContainer from "@/app/ui/PageContainer";

export default async function BandMemberPage({
  params,
}: {
  params: { slug: string };
}) {
  const member = await getMemberData(params.slug);

  if (!member) {
    return (
      <PageContainer>
        <div className="text-white text-center my-[15vh]">
          <h1 className="text-[40px] mb-4">Member Not Found</h1>
          <p className="text-[18px]">
            The requested band member could not be found
          </p>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <MemberLayout
        name={member.name}
        image={member.image}
        details={member.details}
        bio={member.bio}
      />
    </PageContainer>
  );
}
