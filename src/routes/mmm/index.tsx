/* eslint-disable qwik/no-react-props */
import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/button";
import { Gallery } from "~/components/gallery";
import { Service } from "~/components/service";
import { Text } from "~/components/text";
import {
  ArcheryIcon,
  BookStackIcon,
  CutSolidWithCurveIcon,
  WifiIcon,
} from "~/integrations/react/iconoir";

export default component$(() => {
  return (
    <div>
      <Gallery
        items={[
          {
            imageUrl:
              "https://imagedelivery.net/gV_YLJoGO2jaxKnnl4mKxg/d2e6641a-7b95-4bfe-78e1-26ed549eb500/public",
            title: "hello",
            description: "this is some world description",
          },
          {
            imageUrl:
              "https://imagedelivery.net/gV_YLJoGO2jaxKnnl4mKxg/fcf44452-85d5-4626-488f-a062cfb92600/public",
            title: "world",
            description: "this is some hello description",
          },
        ]}
      />
      <div class="flex flex-col gap-4 p-7 md:p-10">
        <Text size="large" uppercase bold>
          About us
        </Text>
        <Text size="medium">
          Willkommen im Merzig Mingle Matrix - Ihrem innovativen Coworking-Raum
          im Herzen von Merzig!
        </Text>
        <Text size="medium">
          Unser Zentrum bietet ausreichend Parkplätze für Autos und liegt in
          unmittelbarer Nähe zu den Bahnhöfen. Mit einer offenen Arbeitsfläche,
          Meeting-Boxen und einer voll ausgestatteten Küche schaffen wir eine
          inspirierende Umgebung für Kreativität und Zusammenarbeit. Hier
          treffen Sie auf eine lebendige Community, die sich bei gemeinsamen
          Events wie Mittagessen oder Billardspielen austauscht. Erleben Sie das
          pulsierende Stadtleben direkt vor unserer Tür!
        </Text>
        <Button variant="primary" label="hello button" />
      </div>
      <div class="flex gap-4 flex-wrap p-7 md:p-10 ">
        <Service description="Kostenloses Wifi">
          <WifiIcon q:slot="icon" className="m-auto" />
        </Service>
        <Service description="Ergonomische Ausstattung">
          <CutSolidWithCurveIcon q:slot="icon" className="m-auto" />
        </Service>
        <Service description="Community events">
          <ArcheryIcon q:slot="icon" className="m-auto" />
        </Service>
        <Service description="Workshops & Learning area">
          <BookStackIcon q:slot="icon" className="m-auto" />
        </Service>
      </div>
    </div>
  );
});
