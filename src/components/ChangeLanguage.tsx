import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../../i18n.js";
import setLanguage from "next-translate/setLanguage";

const { locales } = i18nConfig;

export default function ChangeLanguage() {
  const { t, lang } = useTranslation();

  return locales.map((lng, key) => {
    // if (lng === lang) return null;

    return (
      <button key={key} onClick={async () => await setLanguage(lng)}>
        {lng}
      </button>
    );
  });
}
