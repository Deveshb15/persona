import { getHumeAccessToken } from "@/utils/getHumeAccessToken";
import dynamic from "next/dynamic";
import { configs} from '@/utils/constants'

const Chat = dynamic(() => import("@/components/Chat"), {
  ssr: false,
});


export default async function Page({ params }: { params: { person: string } }) {
  const accessToken = await getHumeAccessToken();
  const configId = configs.find((config) => config.configId === params.person)?.configId || configs[0].configId;
  console.log(" CONFIG ID ", configId)

  if (!accessToken) {
    throw new Error();
  }

  return (
    <div className={"grow flex flex-col"}>
      <Chat accessToken={accessToken} configId={configId} />

    </div>
  );
}
