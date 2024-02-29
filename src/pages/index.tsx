import Layout from "@/components/layouts/Layout";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function Home(): JSX.Element {
  const { t } = useTranslation();
  return (
    <main className={`flex flex-col items-center justify-between`}>
      <p className="text-7xl">{t("common:title")}</p>
    </main>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};
